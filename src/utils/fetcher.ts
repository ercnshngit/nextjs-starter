import { API_URL } from "@/config/api";

export async function fetcher<T>({
  url,
  method,
  options,
}: {
  url: string;
  method: string;
  options: any;
}) {
  try {
    const headers = options.headers || {};
    const body = options.body || null;

    const response = await fetch(API_URL + url, {
      method,
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: body ? JSON.stringify(body) : null,
    });

    if (response.status >= 500) {
      throw new Error("Server error! Please try again later.");
    }

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    return {
      data: data as T,
      error: null,
    };
  } catch (error: any) {
    console.log(error.message);
    throw new Error(error.message);
  }
}

export async function get<T>(url: string) {
  return fetcher<T>({
    url,
    method: "GET",
    options: {},
  });
}

export async function post<T>(url: string, body: any) {
  return fetcher<T>({
    url,
    method: "POST",
    options: { body },
  });
}
