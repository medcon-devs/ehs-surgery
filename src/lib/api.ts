import { ApiResponse } from "./registration-types";

export const API_BASE = "https://ehs-ckm-conference.com/backend/public/api/v1";

export const ROUTES = {
  register: "/user/account/register",
  login: "/user/account/login",
  profile: "/user/account/profile",
  stripe: "/user/account/stripe/create-payment-intent",
};

export async function postRequest<T = any>(
  endpoint: string,
  body?: Record<string, any>
): Promise<ApiResponse<T>> {
  const response = await fetch(`${API_BASE}${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  return response.json();
}