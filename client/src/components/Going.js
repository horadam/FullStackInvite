import React, { Fragment, Component } from 'react'
import { getGoingUsers } from '../actions/actions';
import {connect} from 'react-redux'

class Going extends Component {

    componentDidMount () {
        getGoingUsers()

    }

    render() {

        console.log('users', this.props.users)
        return (
            <Fragment>
                <h1>Going</h1>
                <div className="userList">
                    <div className="userContainerSmall">
                    {this.props.users.map((user, i) => (
                        <div key={`going${i}`} className="UserListed">
                            <div className="imageDiv">
                            <img alt="userImage" src={user.img} />
                            </div>
                            <p><span>Name: </span>{user.fname} {user.lname}</p>
                            <p><span>Phone: </span>{user.phone}</p>
                            <p><span>Email: </span>{user.email}</p>
                        </div>
                   
                    ))}
                </div>
                </div>
            </Fragment>
        )
    }
}

function mapStateToProps(appState) {
    return {
        users: appState.users
    }
    
}

export default connect (mapStateToProps) (Going)