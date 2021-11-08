/** 
*   Project API call
*   @author Stéphane
*   @version 0.1
*/

import axios from "axios"

// usable ID : 12 and 18 //
const selectUserId = 12
const selectApiPort = 3000

// Make a request for a user with a given ID //
class UserData {
    getUser(){
        return axios.get(`http://localhost:${selectApiPort}/user/${selectUserId}`)
    };
    getActivity(){
        return axios.get(`http://localhost:${selectApiPort}/user/${selectUserId}/activity`)
    };
    getAverageSession(){
        return axios.get(`http://localhost:${selectApiPort}/user/${selectUserId}/average-sessions`)
    };
    getPerfData(){
        return axios.get(`http://localhost:${selectApiPort}/user/${selectUserId}/performance`)
    };
};
export default new UserData();