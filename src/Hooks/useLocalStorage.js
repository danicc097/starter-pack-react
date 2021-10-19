import { useMemo } from 'react'

export const useLocalStorage = (key, initialValue) => {
   const storedValue = useMemo(() => {
       try {
            const item = window.localStorage.getItem(key);
            return item ? item : initialValue;
       } catch (error) {
            return initialValue
       }
   }, [key, initialValue]) 

   return {storedValue}
}
