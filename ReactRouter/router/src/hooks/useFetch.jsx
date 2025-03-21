import { useState, useEffect } from "react";

// custom hook
export const useFetch = (url) => {

    const [data, setData] = useState(null);

    //refatorando post
    const [config, setConfig] = useState(null)
    const [method, setMethod] = useState(null)
    const [callFetch, setCallFetch] = useState(false)

    //loading
    const[loading, setLoading] = useState(false);

    // Tratando errors

    const [error, setError] = useState(null);

    // processo do delete

    const [itemId, setItemId] = useState(null);


    const httpConfig = (data, method) => {
        if(method === "POST"){
            setConfig({
                method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })
            setMethod(method);
        } else if(method === "DELETE"){
            setConfig({
                method,
                headers: {
                    'Content-Type': 'application/json',
                },
            
            })
            setMethod(method);
            setItemId(data);
    }
}

    useEffect(() => {
        const fetchData = async () => {
            
            //LOADING
            setLoading(true);

            try { 
                const res = await fetch(url);
                const json = await res.json();
                setData(json);
                setLoading(false);
            } catch (error) {
                console.log(error.message);
                setError("Ocorreu um erro ao tentar acessar a API");
                setLoading(false);
            }
        }
        fetchData();
    }, [url, callFetch]);

    //refatorando post

    useEffect(() => {
        const httpRequest = async () => {

            let json

            if(method === "POST"){
                let fetchOptions = [url,config]
    
                const res = await fetch(...fetchOptions);
                json = await res.json();
                
            } else if (method === "DELETE"){
                const deleteUrl = `${url}/${itemId}`;
                const res = await fetch(deleteUrl, config);
                json = await res.json();
               
            }

            setCallFetch(json);
        };
        
        httpRequest();

    }, [config, method, url]);

    

    return {data, httpConfig, loading, error};
    
};
