import axios from "axios";
import {
  SLACK_CHANNELS_KEYS,
  SLACK_TRIGGER_BASE_URL,
  corsProxyUrl,
} from "../utils/constants";

const triggerAlert = (ChannelId, data) => {
  const url = SLACK_TRIGGER_BASE_URL + ChannelId;
  const headers = {
    "Content-Type": "application/json",
  };
  return axios.post(url, data, { headers });
};

export const slackAlerts = {
  demoRequestAlert: async (data) => {
    try {
      const { client_name, email, mobile_number, category, description } = data;
      const message = {
        ["text"]: "*New Request for Demo* :5c Website:",
        ["attachments"]: [
          {
            ["text"]: `Client Name: ${client_name} \n\Email: ${email}\nMobile Number: ${mobile_number} \nCategory: ${category} \n Description: ${description}`,
          },
        ],
      };
      await triggerAlert(SLACK_CHANNELS_KEYS.DEMO_REQUEST, message);
    } catch (e) {
      console.error(e);
    }
  },
  jobRequestAlert: async (data) => {
    try {
      const {
        first_name,
        last_name,
        email,
        phone_number,
        department,
        position,
        cover_letter,
        cv_drive_link,
      } = data;
      const message = {
        ["text"]: "*New Application Submitted* :5c Website:",
        ["attachments"]: [
          {
            ["text"]: `First Name: ${first_name}\n- Last Name: ${last_name}\n- Email: ${email}\n- Mobile Number: ${phone_number}\n- Department: ${department}\n- Position: ${position}\n- Cover Letter: ${cover_letter}\n- CV Link: ${cv_drive_link}`,
          },
        ],
      };
      await triggerAlert(SLACK_CHANNELS_KEYS.JOB_REQUEST, message);
    } catch (e) {
      console.error(e);
    }
  },
};
