const BACKEND_BASE_URL = import.meta.env.VITE_BASE_URL || "https://advance-t-d-backend.vercel.app/api/v1" 
import axios from "axios"
export const getAllTodo = async () => {
    try {
        console.log("I am fine")
        const response = await axios.get(`${BACKEND_BASE_URL}/getAllTodo`);

        if (!response) {
            console.log("Api response not comming")
        }
        return response;

    } catch (error) {
        console.log("Api response failed")
    }
}

export const deleteTodo = async (id) => {
    try {
        const response = await axios.delete(`${BACKEND_BASE_URL}/deleteTodo`, { data: { id } });
        if (!response) {
            console.log("Api response not comming")
        }
        return response;


    } catch (error) {
        console.log("Api response failed")
        return error;
    }
}

export const addTodo = async (data) => {
    try {
        const response = await axios.post(`${BACKEND_BASE_URL}/addTodo`, data);
        if (!response) {
            return error.message;
        }
        return response;


    } catch (error) {
        console.log("Api response failed")
        return error;
    }

}


export const getAllCategory = async () => {
    try {
        const res = await axios.get(`${BACKEND_BASE_URL}/getAllCategory`)
        if (!res) {
            console.log("Error while feting the all category")
        }
        if (res) {
            return res;
        }
    } catch (error) {
        console.log("Api response failed")
        return error;
    }
}

export const getTodoById = async (id) => {
    try {
        const res = await axios.post(`${BACKEND_BASE_URL}/getTodoById`, { id })
        if (!res) {
            console.log("Error while feting the all category")
        }
        if (res) {
            return res;
        }

    } catch (error) {
        return error;
    }
}

export const updateTodo = async (id, data) => {
    console.log("Is is ", id)
    try {
        const res = await axios.put(`${BACKEND_BASE_URL}/updateTodo`, { id, ...data });
        if (!res) {
            console.log("Error while feting the all category")
        }
        if (res) {
            return res;
        }

    } catch (error) {
        return error;
    }
}

export const addCategories = async (name) => {
    try {
        console.log(name)
        const res = await axios.post(`${BACKEND_BASE_URL}/addCategory`, {name});
        console.log("esponse of categoresi is ",res)
        if (!res) {
            console.log("Error while feting the all category")
        }
        if (res) {
            return res;
        }
    } catch (error) {
        return error;
    }

}
