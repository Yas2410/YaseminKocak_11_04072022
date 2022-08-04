import { useState, useEffect } from "react";

export function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getData() {
      //Lorsque mes éléments sont chargés :
      setLoading(true);
      try {
        //J'affiche mes données par le biais de ma méthode Fetch()
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
        //Si erreur :
      } catch (error) {
        console.error("Error at fetch: ", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, [url]);

  return { data, loading, error };
}
