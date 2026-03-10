import { useState, useEffect } from "react";

export default function userApiRequest(url, method = "GET") {

  const [responseData, setResponseData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url, { method })
      .then((res) => res.json())
      .then((data) => {
        setResponseData(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, [url, method]);

  return { responseData, isLoading, error };
}
