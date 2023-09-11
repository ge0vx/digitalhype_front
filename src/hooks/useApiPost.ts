import { useState } from "react";

export type HTTPmethods = "POST" | "GET";

export const UseApiPost = <T>(
  body?: any
): [
    T | T[],
    boolean,
    boolean,
    string,
    (url: string, method: HTTPmethods) => Promise<void>
  ] => {

  const [data, setData] = useState<T | T[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('')

  const fetchResourse = async (url: string, method: HTTPmethods) => {
    if (url.length) {
      setLoading(true);
      try {
        let response;
        
        switch (method) {
          case "GET":
            response = await fetch(url);
            break;
          default:
            response = await fetch(url, {
              method: 'POST',
              body: JSON.stringify(body),
            });
            break;
        }
        let d: T | T[] = await response.json();
        setData(d);

      } catch (error) {
        setError(true);
        let message: string = 'Unknown Error'
        if (error instanceof Error){ 
          message = error.message
        }
        // we'll proceed, but let's report it
        console.error(message)
        setErrorMessage(`${message}. correct your cipher code`)
        

      } finally {
        setLoading(false);
      }
    }
  };

  return [data, loading, error, errorMessage, fetchResourse];
};