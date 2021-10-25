import axios from "axios"

// Make a request for a user with a given ID

const selectUserId = 18
const selectApiPort = 8080

class UserData {
    getUser(){
        return axios.get(`http://localhost:${selectApiPort}/user/${selectUserId}`)
    };
    getActivity(){
        return axios.get(`http://localhost:${selectApiPort}/user/${selectUserId}/activity`)
    }
}
export default new UserData()