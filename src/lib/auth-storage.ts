export const ACCESS_TOKEN_KEY = "accessToken";
export const REFRESH_TOKEN_KEY = "refreshToken";
export const USER_DATA_KEY = "userData";
export const PENDING_PAYMENT_KEY = "pendingPayment";

const AUTH_CHANGED_EVENT = "auth-changed";

export function saveAuthSession(user: any, token: string) {
  if (typeof window === "undefined") return;

  localStorage.setItem(USER_DATA_KEY, JSON.stringify(user));
  localStorage.setItem(ACCESS_TOKEN_KEY, token);
  localStorage.setItem(REFRESH_TOKEN_KEY, token);

  window.dispatchEvent(new Event(AUTH_CHANGED_EVENT));
}

export function clearAuthSession() {
  if (typeof window === "undefined") return;

  localStorage.removeItem(USER_DATA_KEY);
  localStorage.removeItem(ACCESS_TOKEN_KEY);
  localStorage.removeItem(REFRESH_TOKEN_KEY);

  window.dispatchEvent(new Event(AUTH_CHANGED_EVENT));
}

export function getStoredUser() {
  if (typeof window === "undefined") return null;
  const raw = localStorage.getItem(USER_DATA_KEY);
  if (!raw) return null;

  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function isUserLoggedIn() {
  if (typeof window === "undefined") return false;
  return !!localStorage.getItem(ACCESS_TOKEN_KEY);
}

export function savePendingPayment(data: any) {
  if (typeof window === "undefined") return;
  localStorage.setItem(PENDING_PAYMENT_KEY, JSON.stringify(data));
}

export function getPendingPayment() {
  if (typeof window === "undefined") return null;
  const raw = localStorage.getItem(PENDING_PAYMENT_KEY);
  if (!raw) return null;

  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function clearPendingPayment() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(PENDING_PAYMENT_KEY);
}

export function getAuthChangedEventName() {
  return AUTH_CHANGED_EVENT;
}