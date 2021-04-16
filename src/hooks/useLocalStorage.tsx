import { useState, useEffect } from "react";

export default function useLocalStorage(key: any, defaultValue: any) {
  const stored = localStorage.getItem(key);
  const initialValue = stored ? JSON.parse(stored) : defaultValue;
  const [localStorageData, setLocalStorageData] = useState<any>(initialValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(localStorageData));
  }, [key, localStorageData]);

  return [localStorageData, setLocalStorageData];
}
