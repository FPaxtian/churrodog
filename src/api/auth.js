import { USER } from '../utils/constants'
import axios from 'axios'


const logInApi = async (props) => {
    try {
        const { email, password, churroAlerError, churroAlerSuccess, goToHome } = props
        const data = { email: email, password: password }
        axios
            .post(`api/v1/auth`, data)
            .then(res => {
                if (res.data.mesage == "not found") {
                    churroAlerError() && churroAlerError()

                } else {
                    churroAlerSuccess() && churroAlerSuccess()
                    addUserCurrent(res.data)
                    goToHome() && goToHome()
                }
            })
            .catch(error => {
                console.log('Error: ', error)
            });
    } catch (error) {

    }
}

const updateUser = (props) => {
    const { fullname, cellphone, user_id, _getUserCurrent, churroAlerSuccess } = props
    const data = { fullname: fullname, cellphone: cellphone }
    axios
        .put(`api/v1/users/${user_id}`, data)
        .then(res => {
            addUserCurrent(res.data)
            _getUserCurrent() && _getUserCurrent()
            churroAlerSuccess() && churroAlerSuccess()
        })
        .catch(error => {
            console.log('Error: ', error)
        });
}

const signOff = async (props) => {
    const { churroAlerOff, goToHome } = props
    localStorage.removeItem(USER);
    churroAlerOff() && churroAlerOff()
    goToHome() && goToHome()
}
const getUserCurrent = () => {
    const user = localStorage.getItem(USER);
    if (!user) return [];
    return JSON.parse(user);
}

const addUserCurrent = (data) => {
    localStorage.setItem(USER, JSON.stringify(data))
}
export {
    logInApi,
    getUserCurrent,
    updateUser,
    signOff
}