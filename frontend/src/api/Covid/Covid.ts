import { AxiosResponse } from "axios";
import request from "../request";

export class Covid{
    public getAll(yesterday: boolean): Promise<AxiosResponse>{
        return request(`https://corona.lmao.ninja/v2/all?yesterday=${yesterday}`, {
            method: "GET"
        })
    }

    public allCountries(sorted: boolean, yesterday: boolean): Promise<AxiosResponse>{
        return request(`https://corona.lmao.ninja/v2/countries?yesterday${yesterday}&sort=${sorted}`, {
                method: "GET"
            }
        );
    }

    public allContinents(sorted: boolean, yesterday: boolean): Promise<AxiosResponse>{
        return request(`https://corona.lmao.ninja/v2/continents?yesterday=${yesterday}&sort=${sorted}`, {
                method: "GET"
            }
        );
    }

    public getAllCovidStates = (sorted: boolean, yesterday: boolean): Promise<AxiosResponse>=> {
        return request(`https://corona.lmao.ninja/v2/states?sort=${sorted}&yesterday=${yesterday}`, {
                method: "GET"
            }
        );
    }
    
    public getCovidState = (state: string, yesterday: boolean) => {
        return request(`https://corona.lmao.ninja/v2/states/${state}?yesterday=${yesterday}`, {
                method: "GET"
            }
        );
    }
    
    public getCovidCountry = (country: string, yesterday: boolean) => {
        return request(
            `https://corona.lmao.ninja/v2/countries/${country}?yesterday=${yesterday}&strict=true&query`,
            {
                method: "GET"
            }
        );
    } 
    
    public getCovidContinent = (continent: string, yesterday: boolean) => {
        return request(
            `https://corona.lmao.ninja/v2/continents/${continent}?yesterday=${yesterday}&strict=`,
            {
                method: "GET"
            }
        );
    }
}