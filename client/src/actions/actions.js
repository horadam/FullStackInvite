import store from '../store'
import axios from 'axios'


export function getRandomUserData() {
    axios.get('https://randomuser.me/api').then(
    resp => {
        console.log(resp.data)
        store.dispatch({
            type: 'GET_RANDOM_USER_DATA',
            user: resp.data.results[0],
            fname:resp.data.results[0].name.first,
            lname:resp.data.results[0].name.last,
            phone: resp.data.results[0].phone,
            email: resp.data.results[0].email,
            img: resp.data.results[0].picture.large
        })
    }
)
}

export function userGoing(person) {
    axios.post('/api/going', person).then(() => {
        getGoingUsers()
    })
}
export function userNotGoing(person) {
    axios.post('/api/notGoing', person).then(() => {
        getNotGoingUsers()
    })
}

export function getGoingUsers() {
    axios.get('/api/going').then(
        resp => {
            store.dispatch({
                type: 'GET_GOING_USERS',
                users: resp.data
            })
        }
    )
}

export function getNotGoingUsers() {
    axios.get('/api/notGoing').then(
        resp => {
            store.dispatch({
                type: 'GET_NOT_GOING_USERS',
                users: resp.data
            })
        }
    )
}


