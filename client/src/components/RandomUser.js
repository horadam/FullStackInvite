import React, {Component} from 'react'
import { getRandomUserData, userGoing, userNotGoing, getGoingUsers, getNotGoingUsers } from '../actions/actions'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class RandomUser extends Component {

    componentDidMount() {
        getRandomUserData()
        getGoingUsers()
        getNotGoingUsers()
    }

    going = (e) => {
        userGoing({
            fname: this.props.fname,
            lname: this.props.lname,
            phone: this.props.phone,
            email: this.props.email,
            img: this.props.img
        })
        getRandomUserData()
    }

    notGoing = (e) => {
        userNotGoing({
            fname: this.props.fname,
            lname: this.props.lname,
            phone: this.props.phone,
            email: this.props.email,
            img: this.props.img
        })
        getRandomUserData()
    }

    

    render() {
        return (
            <div className="userContainer">
                <div id="goingCounter">
                <div id="Going">
                    <Link to={"/going"}>
                        <p>Going: {this.props.usersGoing.length}</p>
                    </Link>
                </div>
                <div id="notGoing">
                    <Link to={"/notgoing"}>
                        <p>Not Going: {this.props.usersNotGoing.length}</p>
                    </Link>
                </div>
            </div>

                <div className="RandomUser">

                    


                    <div className="imageDiv">
                        <img alt="userImage" src={this.props.img} />
                    </div>
                        <p>Name: {this.props.fname} {this.props.lname}</p>
                        <p>Phone: {this.props.phone}</p>
                        <p>Email: {this.props.email}</p>

                    <div id="goingButtons">
                        <button onClick={this.going} id="goingButton">Invite</button>
                        <button onClick={this.notGoing} id="notGoingButton">Don't Invite</button>
                    </div>
                </div>
                
            </div>
        )
    }
   
}

function mapStateToProps(appState) {
    return {
        usersGoing: appState.users,
        usersNotGoing: appState.notGoingUsers,
        fname: appState.fname,
        lname: appState.lname,
        phone: appState.phone,
        email: appState.email,
        img: appState.img
    }
    
}

export default connect (mapStateToProps) (RandomUser)