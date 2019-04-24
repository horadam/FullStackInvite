const initialState = {
  users:[],
  notGoingUsers:[],
  fname:'',
  lname:'',
  phone:'',
  email:'',
  img:''

}

export default function (state = initialState, action) {
  switch(action.type) {
    case 'GET_RANDOM_USER_DATA':
      return {...state,

      fname: action.fname,
      lname: action.lname,
      phone: action.phone,
      email: action.email,
      img: action.img
      }

    case 'GET_GOING_USERS':
      return {...state,
        users: action.users}

    case 'GET_NOT_GOING_USERS':
      return {...state,
        notGoingUsers: action.users}

    default:
      return state
  }
}