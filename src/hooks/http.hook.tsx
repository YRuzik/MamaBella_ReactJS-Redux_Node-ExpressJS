import {useCallback} from "react";

export const useHttp: any = () => {

    const request = useCallback(async (
        url: string, method = 'GET',
        body = null,
        headers = {
            "Content-Type": "application/json"
        },
    ) => {

        const response = await fetch(url, {method, body, headers});

        if (!response.ok) {
            throw new Error(`Could not fetch ${url}, status: ${response.status}`);
        }

        const data = await response.json();

        return data;
    }, []);

    return {request}

}
