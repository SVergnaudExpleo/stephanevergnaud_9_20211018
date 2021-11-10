import axios from "axios"

/** 
 * Project API call grouped in a class
 *
 * @param {number} selectUserId User ID in database set the value at 12 or 19 to change user
 * @param {number} selectApiPort Api port configuration if needed
 * @author Stéphane
 * @version 1
 */

const selectUserId = 12
const selectApiPort = 3000

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