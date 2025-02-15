import React from "react";
import defaultProfilePic from "../assets/def-no-pfp.png";

function Profile() {
    return (
        <div className="profile-container">
            <img src={defaultProfilePic} alt="Profile" className="profile-picture" />
            <div className="username">
                vanessa <span className="bold-username">vawei</span>
            </div>
            <div className="user-bio">This is the user's bio...</div>
        </div>
    );
}

export default Profile;
