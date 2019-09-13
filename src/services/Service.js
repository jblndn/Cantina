import axios from 'axios';

const API_ENDPOINT = 'http://localhost:9000/api';

const errorHandler = (res) => {
    let errMessage = (res.response) ?
        `${res.response.statusText} : ${res.response.data.message}` :
        res.message;
    return Promise.reject(new Error(errMessage));
}

export default {
    fetchAll: function () {
        return axios.get(`${API_ENDPOINT}/recipes`)
            .then(res => res.data)
            .catch(errorHandler)
    },

    fetchOne: function (id) {
        return axios.get(`${API_ENDPOINT}/recipe/${id}`)
            .then(res => res.data)
            .catch(errorHandler)
    },

    addRecipe: function (recipeObj) {
        return axios.post(`${API_ENDPOINT}/recipes`, recipeObj)
            .then(res => res.data)
            .catch(errorHandler)
    },

    removeRecipe: function (userObj) {
        return axios.delete(`${API_ENDPOINT}/recipe/${userObj.id}`)
            .then(res => res.data)
            .catch(errorHandler)
    },

    
    // updateRecipe: function (userObj) {
    //     return axios.put(`${API_ENDPOINT}/recipes/${userObj.id}`, userObj)
    //         .then(res => res.data)
    //         .catch(errorHandler)
    // }
}