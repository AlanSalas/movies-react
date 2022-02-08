import { useState } from "react";
import { Avatar, Tooltip } from "@mui/material";

const User = () => {
  const profile = JSON.parse(localStorage.getItem("profile"));
  const [userName, setUserName] = useState((profile && profile.name) || "");
  const [userImage, setUserImage] = useState((profile && profile.imageUrl) || "");

  console.log("profile", profile);

  return (
    <Tooltip title={userName}>
      <Avatar alt={userName} src={userImage} />
    </Tooltip>
  );
};

export default User;
