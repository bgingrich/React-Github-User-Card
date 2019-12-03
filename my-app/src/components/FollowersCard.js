import React from "react";

const FollowersCard = ({followers, img}) => {
    return (
        <div className = "cardFollower">
            <img src={img} alt="user"/>
            <p className="name">Username: {followers}</p>

        </div>
    )
}

export default FollowersCard;