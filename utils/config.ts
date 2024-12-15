const dev = process.env.NODE_ENV !== "production";

// Currently set to the same URL as the production API
export const API_URL = dev
  ? "https://api.yenkuo.org" // Development URL
  : "https://api.yenkuo.org"; // Production URL
