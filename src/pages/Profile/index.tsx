import { useHistory } from "react-router-dom";
import { useEffect } from "react";

import { ProfileStyled } from "./styles";
import { useAuth } from "../../providers/Authentication";

import UserCard from "../../components/Profile/UserCard";
import BookmarkedProperties from "../../components/Profile/BookmarkedProperties";

function Profile() {
  const history = useHistory();
  const { userInfo } = useAuth();

  const protectRoute = () => {
    if (!!userInfo.id) {
      history.push("/");
    }
  };

  useEffect(() => {
    protectRoute();
  }, []);

  return (
    <ProfileStyled>
      <UserCard />
      <BookmarkedProperties />
    </ProfileStyled>
  );
}

export default Profile;
