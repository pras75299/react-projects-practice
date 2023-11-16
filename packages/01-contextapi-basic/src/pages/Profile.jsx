import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);
  if (user) {
    return (
      <>
        <div className="positionoftext">
          <h2 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
            Welcome <span className="text-green-700">{user.username}</span>
          </h2>
        </div>
      </>
    );
  }
};

export default Profile;
