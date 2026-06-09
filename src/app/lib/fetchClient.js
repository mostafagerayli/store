// lib/fetchClient.js

export async function fetchClient(url, options = {}) {
  const res = await fetch(url, {
    credentials: "include",
    ...options,
  });

  let data;

  try {
    data = await res.json();
  } catch {
    data = null;
  }

  if (!res.ok) {
    throw new Error(
      data?.error ||
      data?.message ||
      "Something went wrong"
    );
  }

  return data;
}