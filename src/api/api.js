import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "bfec528d-df0b-4f80-9e1e-afa4fb5f8eed"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => {
        return   response.data; 
      });
}
}

// export const followAPI = {
//     followUser() {
//         return instance.post(`follow/${u.id}`)
//         .then(response => {
//             return response.data;
//         })
//     }
// };