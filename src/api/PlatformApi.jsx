import axios from "axios";
import { CORE_PLATFORM_BASE_URL } from "../utils/constants";

export const PlatformApi = {
sendCareerApplicationMailToHR: async (data) => {
        try {
        const url = `${CORE_PLATFORM_BASE_URL}/send-career-application-mail-to-hr`;
        const headers = {
            "Content-Type": "application/json",
            "Authorization": process.env.GATSBY_PLATFORM_API_TOKEN,
        };
          
        return axios.post(url, data, { headers });
    } catch (e) {
      console.error(e);
    }
  },
}