import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const defaultApiUrl: string = 'http://localhost:8080';

export const researchIO_api = {
    getCityInfo: createAsyncThunk(
        'researchIO_api/getCityInfo',
        async () => {
            const response = await axios.get<CityInfo>(defaultApiUrl + '/city');
            return response;
        }
    )
}

interface CityInfo {
    idx: number;
    name: string;
    nation: string;
    address: string;
};