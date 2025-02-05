import axios from "axios";
import { SLACK_TRIGGER_BASE_URL } from "../utils/constants";

export const slackAlerts = {
  demoRequestAlert: async (data) => {
    try {
      const url = `${SLACK_TRIGGER_BASE_URL}/webhook/demo-request`;
      const headers = {
        "Content-Type": "application/json",
      };
      return axios.post(url, data, { headers });
    } catch (e) {
      console.error(e);
    }
  },
  jobRequestAlert: async (data) => {
    try {
      const url = `${SLACK_TRIGGER_BASE_URL}/webhook/career-application-request`;
      const headers = {
        "Content-Type": "application/json",
      };
      return axios.post(url, data, { headers });
    } catch (e) {
      console.error(e);
    }
  },
  leadRequestAlert: async (data) => {
    try {
      const url = `${SLACK_TRIGGER_BASE_URL}/webhook/lead-request`;
      const headers = {
        "Content-Type": "application/json",
      };
      return axios.post(url, data, { headers });
    } catch (e) {
      console.error(e);
    }
  },
};
