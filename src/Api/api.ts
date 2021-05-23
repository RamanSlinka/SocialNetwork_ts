import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '3d0e16a8-fd7d-4f04-a847-cacf5931e58d'
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,)
            .then(response => {
                return response.data
            })
    },
    follow(userId: number) {
      return  instance.post(`follow/${userId}`)
    },
    unfollow(userId: number) {
       return instance.delete(`follow/${userId}`)
    },
    getProfile(userId: number) {
      return   instance.get(`profile/` + userId);
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
}

