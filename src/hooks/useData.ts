import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../api-client";

interface ApiResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<ApiResponse<T>>(endpoint, { signal: controller.signal })
      .then((res) => {
        setData(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setLoading(false);
        setError(err.message);
      });
    return () => controller.abort();
  }, []);
  return { data, error, isLoading };
};

export default useData;
