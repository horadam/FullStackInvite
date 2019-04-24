import React, { Component } from 'react'
import { getGoingUsers } from '../actions/actions';
import {connect} from 'react-redux'

class Going extends Component {

    componentDidMount () {
        getGoingUsers()

    }

    render() {

        console.log('users', this.props.users)
        return (
            <div>
                <h1>Going</h1>
                <div className="userList">
                    <div className="userContainerSmall">
                    {this.props.users.map((user, i) => (
                        <div key={`going${i}`} className="RandomUser">
                            <div className="imageDiv">
                            <img alt="userImage" src={user.img} />
                            </div>
                            <p>Name: {user.fname} {user.lname}</p>
                            <p>Phone: {user.phone}</p>
                            <p>Email: {user.email}</p>
                        </div>
                   
                    ))}
                </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(appState) {
    return {
        users: appState.users
    }
    
}

export default connect (mapStateToProps) (Going)