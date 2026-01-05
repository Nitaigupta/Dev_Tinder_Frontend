// Profile.jsx
import React from "react";
import { useSelector } from "react-redux";
import EditProfile from "./EditProfile";

const Profile = () => {
  const user = useSelector((state) => state.user); // get user from redux

  return (
    <div>
      {user ? <EditProfile user={user} /> : <p>Loading profile...</p>}
    </div>
  );
};

export default Profile;
