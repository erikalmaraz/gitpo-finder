import React from "react";
import Profile from "../../resources/assets/images/profile.jpeg";
import * as S from "./Styles";
const Sidebar = () => {
  return (
    <React.Fragment>
      <S.MainSidebarWrapper>
        <S.ProfileTopContainer>
          <div>
            <S.ProfilePicture src={Profile} alt="Profile picture" />
          </div>
          <div>
            <h3>Ale Ornelas Figueroa</h3>
            <S.Username>greatelse</S.Username>
          </div>
        </S.ProfileTopContainer>
        <div>
          Former Devops Engineer at @gitamv Former Software Engineer at
          @Progressly Former Software Engineer at @magma-labs Former Software
          Engineer at @zoobean
        </div>
        <div>Location</div>
      </S.MainSidebarWrapper>
    </React.Fragment>
  );
};

export default Sidebar;
