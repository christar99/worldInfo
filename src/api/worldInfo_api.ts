import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const defaultApiUrl: string = 'http://localhost:8080';

export const worldInfo_api = {
    getNationsList: createAsyncThunk(
        'worldInfo_api/getNationsList',
        async () => {
            const response = await axios.get<NationInfo[]>(defaultApiUrl + '/nations');
            return response;
        }
    )
}

interface NationInfo {
    idx: number;
    name: string;
    continent: string;
};