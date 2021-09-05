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
  const getUserRepoParams = {
    url: routes.user,
    username: location.pathname.split("/")[2],
    additionalPath: "repos",
  };

  const { response: userInfo, isLoading: isInfoLoading }: UserInfo =
    useFetch(getUserInfoParams);

  const { response: userRepos, isLoading: isReposLoading }: UserInfo =
    useFetch(getUserRepoParams);

  console.log(userRepos, " user repos");
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
                {isReposLoading}
                {!isReposLoading &&
                  userRepos.map((repo: any, index: number) => (
                    <Repository name={repo.name} description={repo.description} language={repo.language} key={index} />
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
