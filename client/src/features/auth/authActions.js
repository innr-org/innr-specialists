import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios'

const backendURL = 'http://164.92.164.196:8080'
export const userLogin = createAsyncThunk(
    'auth/login',
    async (userData, { rejectWithValue }) => {
        try {
            // configure header's Content-Type as JSON
            const config = {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                },
            }

            const formBody =  [];
            for (const property in userData) {
                const encodedKey = encodeURIComponent(property);
                const encodedValue = encodeURIComponent(userData[property]);
                formBody.push(encodedKey + "=" + encodedValue);
            }
            const formBodyString = formBody.join("&");

            const { data } = await axios.post(
                `${backendURL}/api/auth/token`,
                formBodyString,
                config
            )
            // store user's token in local storage
            localStorage.setItem('userToken', data.token.accessToken)
            return data
        } catch (error) {
            // return custom error message from API if any
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)
