import { useState, useEffect } from "react";
import { strapiService, COLLECTION_TYPES } from "../services/strapi";

export function useStrapiContent(collectionType, options = {}) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({
    page: 1,
    pageSize: 25,
    pageCount: 1,
    total: 0,
  });

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await strapiService.getCollection(
        collectionType,
        options
      );
      setData(response.data || []);
      setPagination(
        response.meta?.pagination || {
          page: 1,
          pageSize: 25,
          pageCount: 1,
          total: 0,
        }
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [collectionType, JSON.stringify(options)]);

  return {
    data,
    loading,
    error,
    pagination,
    refetch: fetchData,
  };
}

export function useStrapiItem(collectionType, slug, populate = ["*"]) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    if (!slug) {
      setError("No slug provided");
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const response = await strapiService.getOne(
        collectionType,
        slug,
        populate
      );

      if (response) {
        setData(response);
      } else {
        throw new Error(`${collectionType} not found`);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [collectionType, slug, JSON.stringify(populate)]);

  return {
    data,
    loading,
    error,
    refetch: fetchData,
  };
}
