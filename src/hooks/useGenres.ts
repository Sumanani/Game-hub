import { useState, useEffect } from "react";
import apiClient from "../api-client";

interface Genre {
  id: number;
  name: string;
}

interface ApiResponse {
  count: number;
  results: Genre[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<ApiResponse>("/genres", { signal: controller.signal })
      .then((res) => {
        setLoading(false);
        setGenres(res.data.results);
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
        setError(err.message);
      });
    return () => controller.abort();
  }, []);

  return { genres, error, loading };
};

export default useGenres;
