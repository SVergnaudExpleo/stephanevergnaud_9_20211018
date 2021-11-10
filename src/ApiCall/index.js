/** 
* Project API call grouped in a class
*
* @param {number} selectUserId User ID in database
* @param {number} selectApiPort Api port configuration if needed
* @author Stéphane
* @version 1
*/

import axios from "axios"

// usable ID : 12 or 18 //
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