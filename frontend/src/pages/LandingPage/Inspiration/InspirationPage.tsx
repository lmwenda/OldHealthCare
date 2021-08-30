import React from 'react';
import axios from "axios";
import { AxiosError } from 'axios';
import { AxiosResponse } from 'axios';

function InspirationPage() {
    
    React.useEffect(() => {
        axios.get("https://www.healthcare.gov/api/blog.json")
            .then((response: AxiosResponse) => console.log(response))
            .catch((err: AxiosError) => console.error(err));
    }, [])

    return (
        <div>
            
        </div>
    )
}

export default InspirationPage;
