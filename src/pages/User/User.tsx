import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import UserFinder from "../../components/UserFinder/UserFinder";
import RepositoryFinder from "../../components/RepositoryFinder/RepositoryFinder";
import Repository from "../../components/Repository/Repository";
import useFetch from "../../hooks/useFetch";
import { routes } from "../../config/request";
import { useLocation } from "@reach/router";
import UserInfo from "../../interfaces/userInfo.interface";
import * as S from "./Styles";

const User = () => {
  const location = useLocation();
  const getUserInfoParams = {
    url: routes.user,
    username: location.pathname.split("/")[2],
    additionalPath: "",
  };
  const { response: userInfo, isLoading }: UserInfo =
    useFetch(getUserInfoParams);

  console.log(userInfo);
  return (
    <>
      <section>
        {/* Search Other User */}
        <S.FinderContainer>
          <UserFinder />
        </S.FinderContainer>
        {/* End Search Other User */}
        <S.CenterContainter>
          <Sidebar
            name={userInfo.name}
            image={userInfo.avatar_url}
            description={userInfo.bio}
            username={userInfo.login}
          />
          {/* Repositories Container */}
          <S.RepositoryOverviewContainer>
            {/* Repositories Tabs */}
            <S.TabsContainer>
              <S.TabItem>
                <span></span>
                <span>Overview</span>
              </S.TabItem>
            </S.TabsContainer>
            {/* End Repositories Tabs */}
            {/* Repository List */}
            <S.RepositoryListContainer>
              <div>
                <RepositoryFinder />
              </div>
              <div>
                {[1, 2, 3].map((index) => (
                  <Repository key={index} />
                ))}
              </div>
            </S.RepositoryListContainer>
            {/* Repository List */}
          </S.RepositoryOverviewContainer>
          {/* End Repositories Container */}
        </S.CenterContainter>
      </section>
    </>
  );
};

export default User;
