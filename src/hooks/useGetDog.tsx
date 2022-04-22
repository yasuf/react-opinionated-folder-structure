import { useState, useEffect } from 'react';
import { getDog } from '../requests/dog';

export const useGetDog = () => {
  const [dog, setDog] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getDog()
      .then(response => {
        setIsLoading(false);
        setDog(response.data.url);
      })
      .catch(error => {
        setIsLoading(false);
        console.error(error);
      });
  }, []);

  return { dog, isLoading }
};
