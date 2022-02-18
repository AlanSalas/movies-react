// React
import { useState, useEffect } from "react";
// Components
import { Avatar, Tooltip } from "@mui/material";
// Hooks
import useAuth from "../../hooks/useAuth";

const User = () => {
  const { isAuth } = useAuth();
  const [userName, setUserName] = useState("");
  const [userImage, setUserImage] = useState("");

  useEffect(() => {
    if (isAuth) {
      setUserName(isAuth.name);
      setUserImage(isAuth.imageUrl);
    }
  }, []);

  return (
    <Tooltip title={userName}>
      <Avatar alt={userName} src={userImage} />
    </Tooltip>
  );
};

export default User;
