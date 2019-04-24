import React, { Component } from 'react'
import { getNotGoingUsers } from '../actions/actions';
import {connect} from 'react-redux'

class NotGoing extends Component {

    componentDidMount () {
        getNotGoingUsers()

    }

    render() {

        console.log('users', this.props.users)
        return (
            <div>
                <h1>Not Going</h1>
                <div className="usersList">
                    {this.props.users.map(user => (
                        <div key={`user${user.lname}`} className="RandomUser">
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
        )
    }
}

function mapStateToProps(appState) {
    return {
        users: appState.notGoingUsers
    }
    
}

export default connect (mapStateToProps) (NotGoing)