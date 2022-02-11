import axios from 'axios'

const getStudents = async () => {
    try {
        axios
            .get(`api/v1/articles`)
            .then(res => {
                return res.data
            })
            .catch(error => {
                console.log('Error: ', error)
            });
    } catch (error) {

    }
}

export {
    getStudents
}