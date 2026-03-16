import { conferenceRoutes } from "./conference-routes";
import { getAccessToken } from "./conference-storage";

type ApiOptions = {
  auth?: boolean;
};

export type ApiResponse<T = any> = {
  status_code: number;
  status: boolean;
  message: string;
  data?: T;
};

export async function postRequest<T = any>(
  endpoint: string,
  body?: Record<string, any>,
  options?: ApiOptions
): Promise<ApiResponse<T>> {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  if (options?.auth) {
    const token = getAccessToken();
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }
  }

  const response = await fetch(`${conferenceRoutes.baseUrl}${endpoint}`, {
    method: "POST",
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });

  const data = await response.json();
  return data;
}