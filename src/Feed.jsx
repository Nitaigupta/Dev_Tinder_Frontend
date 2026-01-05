import React, { useEffect } from 'react';
import NavBar from './NavBar';
import { useDispatch, useSelector } from 'react-redux';
import { BASE_URL } from './utils/constant';
import axios from 'axios';
import { addFeed } from './utils/feedSlice';
import UserCard from './UserCard';

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();

  const getFeed = async () => {
    // ✅ Only skip if feed already has data
    if (feed && feed.length > 0) return;

    try {
      const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(res?.data?.data || []));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  // ✅ Handle loading state
  if (feed === null || feed === undefined)
    return <h1 className="flex justify-center my-10">Loading...</h1>;

  if (feed.length === 0)
    return <h1 className="flex justify-center my-10">No new users found!</h1>;

  return (
    <div className="flex justify-center my-10">
      <UserCard user={feed[0]} />
    </div>
  );
};

export default Feed;
