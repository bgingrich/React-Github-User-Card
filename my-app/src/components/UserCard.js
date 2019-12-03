import React from "react";

const UserCard = ({user, img, bio, location}) => {
    return(
        <div className="card">

            <img src={img} alt="user-image"/>
            <p className ="name">Name: {user}</p>
            <p className ="name">Bio: {bio}</p>
            <p className ="name">Location: {location}</p>

        </div>
    )
}

export default UserCard;