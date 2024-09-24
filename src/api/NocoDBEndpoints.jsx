import { NOCO_DB_BASE_URL, NOCO_DB_X_AUTH_TOKEN } from "../utils/constants";
import axios from "axios";

// Define API endpoints
export const nocodbEndpoints = Object.freeze({
  createDemoEntry: () => `/api/v1/db/data/noco/pg0zrubkir773po/mhtyknk31vrcgun`,
  createJobEntry: () => `/api/v1/db/data/noco/pg0zrubkir773po/m2lgq3rvtdn5n9m`,
});

const TriggerNocoFetch = async (method, endpoint, body, headers = {}) => {
  const url = `${NOCO_DB_BASE_URL}${endpoint}`;
  const XC_TOKEN = NOCO_DB_X_AUTH_TOKEN;

  const options = {
    method,
    headers: { ...headers, "xc-token": XC_TOKEN },
    timeout: 5000,
  };

  if (body) {
    options.data = JSON.stringify(body);
  }

  try {
    const response = await axios(url, options);
    return response;
  } catch (error) {
    console.error("Error during API call:", error);
    throw error;
  }
};

export const NocoFetch = {
  createDemoRequestEntry: async (data) => {
    try {
      console.log("Creating demo with attributes:", data);
      const response = await TriggerNocoFetch(
        "POST",
        nocodbEndpoints.createDemoEntry(),
        data,
        {
          "Content-Type": "application/json",
        }
      );
      return response;
    } catch (e) {
      console.error("Error in updateQueryto5C:", e);
      throw e;
    }
  },
  createJobApplicationEntry: async (data) => {
    try {
      console.log("Creating job with attributes:", data);
      const response = await TriggerNocoFetch(
        "POST",
        nocodbEndpoints.createJobEntry(),
        data,
        {
          "Content-Type": "application/json",
        }
      );
      return response;
    } catch (e) {
      console.error("Error in updateQueryto5C:", e);
      throw e;
    }
  },
};
