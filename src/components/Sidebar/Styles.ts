import styled from "styled-components";

export const MainSidebarWrapper = styled.div`
  width: 30%;
  @media screen and (max-width: 768px) {
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
  }
`;

export const ProfileTopContainer = styled.div`
  margin-top: 15px;
  h3 {
    margin-top: 15px;
  }
`;

export const Username = styled.p`
  margin: 2px 0;
  font-size: 19px;
`;

export const ProfilePicture = styled.img`
  max-width: 260px;
  border-radius: 100%;
  object-fit: cover;
  width: 100%;
`;
