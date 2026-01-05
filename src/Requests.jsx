import axios from "axios";
import { BASE_URL } from "./utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addRequests, removeRequest } from "./utils/requestSlice";
import { useEffect } from "react";

const Requests = () => {
  const requests = useSelector((store) => store.requests);
  const dispatch = useDispatch();

  // Accept / Reject request
  const reviewRequest = async (status, fromUserId, requestId) => {
    try {
      await axios.post(
        `${BASE_URL}/request/review/${status}/${fromUserId}`,
        {},
        { withCredentials: true }
      );

      // remove by request._id (stored in Redux)
      dispatch(removeRequest(requestId));
    } catch (err) {
      console.error(
        "Review request error:",
        err.response?.data || err.message
      );
    }
  };

  // Fetch all received requests
  const fetchRequests = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/requests/received", {
        withCredentials: true,
      });

      dispatch(addRequests(res.data.data));
    } catch (err) {
      console.error("Fetch requests error:", err.response?.data || err.message);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  if (!requests) return;

  if (requests.length === 0)
    return <h1 className="flex justify-center my-10"> No Requests Found</h1>;

  return (
    <div className="text-center my-10">
      <h1 className="font-bold text-white text-3xl">Connection Requests</h1>

      {requests.map((request) => {
        const { firstName, lastName, photoUrl, age, gender, about } =
          request.fromUserId;

        return (
          <div
            key={request._id}
            className="flex justify-between items-center m-4 p-4 rounded-lg bg-base-300 mx-auto"
          >
            <div>
              <img
                alt="photo"
                className="w-20 h-20 rounded-full"
                src={photoUrl}
              />
            </div>
            <div className="text-left mx-4">
              <h2 className="font-bold text-xl">
                {firstName + " " + lastName}
              </h2>
              {age && gender && <p>{age + ", " + gender}</p>}
              <p>{about}</p>
            </div>
            <div>
              <button
                className="btn btn-primary mx-2"
                onClick={() =>
                  reviewRequest("rejected", request.fromUserId._id, request._id)
                }
              >
                Reject
              </button>
              <button
                className="btn btn-secondary mx-2"
                onClick={() =>
                  reviewRequest("accepted", request.fromUserId._id, request._id)
                }
              >
                Accept
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Requests;
