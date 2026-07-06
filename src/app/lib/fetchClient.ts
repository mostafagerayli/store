interface ApiError {
  error?: string;
  message?: string;
}

export async function fetchClient<T>(
  url: string,
  options: RequestInit = {}
): Promise<T> {
  const res = await fetch(url, {
    credentials: "include",
    ...options,
  });

  let data: unknown;

  try {
    data = await res.json();
  } catch {
    data = null;
  }

  if (!res.ok) {
    const apiError = data as ApiError | null;

    throw new Error(
      apiError?.error ??
      apiError?.message ??
      "Something went wrong"
    );
  }

  return data as T;
}