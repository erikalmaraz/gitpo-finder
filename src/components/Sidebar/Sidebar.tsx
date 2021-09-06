import React from "react";
import * as S from "./Styles";
import SidebarType from "../../interfaces/sidebar.interface";

const Sidebar = ({ name, image, description, username }: SidebarType) => {
  return (
    <React.Fragment>
      <S.MainSidebarWrapper>
        <S.ProfileTopContainer>
          <div>
            <S.ProfilePicture src={image} alt="Profile picture" />
          </div>
          <div>
            <h3>{name}</h3>
            <S.Username>{username}</S.Username>
          </div>
        </S.ProfileTopContainer>
        <div>{description}</div>
        <div>Location</div>
      </S.MainSidebarWrapper>
    </React.Fragment>
  );
};

export default Sidebar;
