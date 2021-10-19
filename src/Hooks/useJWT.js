import jwtDecode from 'jwt-decode';
import { useMemo } from 'react'
import { useLocalStorage } from './useLocalStorage'

export const useJWT = () => {
    const { storedValue } = useLocalStorage('accessToken', '');

    const infos = useMemo(() => {
        if (storedValue) {
            return { jwtContent: jwtDecode(storedValue), jwt: storedValue };
        }
    }, [storedValue])

    return infos
}
