import React, { useEffect } from "react";
import { BASE_URL } from "./utils/constant";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "./utils/connectionSlice";
import { Link } from "react-router-dom";

const Connections = () => {
  const connections = useSelector((store) => store.connections);
  const dispatch = useDispatch();

  const fetchConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      dispatch(addConnections(res.data.data));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  if (!connections) return null;

  if (connections.length === 0)
    return (
      <h1 className="text-white text-center mt-10 text-2xl">
        No Connections Found
      </h1>
    );

  return (
    <div className="my-10">
      <h1 className="text-center font-bold text-white text-3xl mb-6">
        Connections
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 px-6">
        {connections.map((connection, index) => {
          // ✅ Normalize user object
          const user =
            connection?.fromUserId || connection?.toUserId || connection;

          if (!user) return null; // skip if no user data

          const { _id, firstName, lastName, photoUrl, age, gender, about } =
            user;

          return (
            <div
              key={connection._id || index}
              className="bg-base-300 rounded-2xl shadow-lg p-6 flex items-center gap-4"
            >
              <img
                alt="profile"
                className="w-20 h-20 rounded-full object-cover border-2 border-white"
                src={photoUrl || "https://via.placeholder.com/80"}
              />
              <div className="text-left flex-1">
                <h2 className="font-bold text-xl text-white">
                  {firstName + " " + lastName}
                </h2>
                {age && gender && (
                  <p className="text-gray-300">{age + ", " + gender}</p>
                )}
                <p className="text-gray-400">{about}</p>
              </div>

              {/* ✅ Fixed: use user._id */}
              <Link to={`/chat/${_id}`}>
                <button
                  className="ba px-6 py-2 rounded-lg bg-blue-400 text-white font-medium 
                             shadow-sm hover:bg-blue-500 active:bg-blue-600 
                             transition"
                >
                  Chat
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Connections;
