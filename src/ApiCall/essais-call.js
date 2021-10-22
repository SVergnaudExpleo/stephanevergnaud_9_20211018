function getUserName() {
    let userName
    async function callUserName() {
        let callResult
        let response
        try {
            response = await axios.get(`http://localhost:${selectApiPort}/user/${selectUserId}`);
        } catch (error) {
            console.error(error);
        }
        callResult = response.data.data.userInfos.firstName;
        return callResult
    }
    const promiseResult = callUserName()
    promiseResult.then((value) => {
        userName = value
        
    })
    return userName
}

const selectUserId = 12
const selectApiPort = 8080


console.log(getUserName)
export {getUserName}