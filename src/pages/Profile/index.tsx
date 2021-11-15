import { useHistory } from "react-router-dom";
import { useEffect } from "react";

import { ProfileStyled } from "./styles";
import { useAuth } from "../../providers/Authentication";

import UserCard from "../../components/Profile/UserCard";
import BookmarkedProperties from "../../components/Profile/BookmarkedProperties";
import AnnouncedProperties from "../../components/Profile/AnnouncedProperties";
import ConsultantTable from "../../components/Profile/ConsultantTable";
import LoadingScreen from "../../components/LoadingScreen";

function Profile() {
  const { userInfo, authenticate } = useAuth();

  useEffect(() => {
    authenticate();
  }, []);

  return (
    <ProfileStyled>
      {!!userInfo.id ? null : (
        <LoadingScreen type="full" message="Carregando seu perfil..." />
      )}
      <UserCard />
      {userInfo.consultant ? <ConsultantTable /> : null}
      <AnnouncedProperties />
      <BookmarkedProperties />
    </ProfileStyled>
  );
}

export default Profile;
