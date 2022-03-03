import { useCallback, useState } from "react";

const useHTTP = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null as string|null)
    const sendRequest = useCallback(async (requestConfig, applyData) => {
        setIsLoading(true)
        await fetch(requestConfig.url, {
            method: requestConfig.method ?? 'GET',
            headers: requestConfig.headers ?? {},
            body: requestConfig.body ? JSON.stringify(requestConfig.body) : null
        })
            .then(async result => {
                if (!result.ok) {
                    setError('Request failed!')
                }
                const data = await result.json()
                applyData(data)
            }).catch(error=> {
                setError(error.message)
                applyData([])
            })
        setIsLoading(false)
    }, [])
    return { isLoading, error, sendRequest }
}

export default useHTTP;