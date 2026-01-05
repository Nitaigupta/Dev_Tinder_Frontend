import React from 'react'
import axios from "axios";
import { BASE_URL } from "./utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { removeUserFromFeed } from "./utils/feedSlice";
import { useEffect } from "react";

const UserCard = ({user}) => {
 const { _id, firstName, lastName, photoUrl, age, gender, about } = user;
    const dispatch = useDispatch();
    const handleSendRequest = async (status, userId) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/send/" + status + "/" + userId,
        {},
        { withCredentials: true }
      );
      dispatch(removeUserFromFeed(userId));
    } catch (err) {}
  };

  return (
    <div>
      <div className="card bg-base-300 w-85   shadow-sm">
  <figure>
    <img
      src={photoUrl}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{firstName + " "+ lastName}</h2>
   {age && gender && <p>{age +" "+ gender}</p>}

    <p>{about}</p>
    <div className="card-actions justify-center">
      <button
            className="btn btn-primary"
            onClick={() => handleSendRequest("ignored", _id)}
          >
            Ignore
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => handleSendRequest("interested", _id)}
          >
            Interested
          </button>
    </div>
  </div>
</div>
    </div>
  )
}

export default UserCard
