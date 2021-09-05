import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import UserFinder from "../../components/UserFinder/UserFinder";
import RepositoryFilters from "../../components/RepositoryFilters/RepositoryFilters";
import Repository from "../../components/Repository/Repository";
import Pagination from "../../components/Pagination/Pagination";
import useFetch from "../../hooks/useFetch";
import UserInfo from "../../interfaces/userInfo.interface";
import { routes } from "../../config/request";
import { useLocation } from "@reach/router";
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
  const { response: reposReponse, isLoading: isReposLoading }: UserInfo =
    useFetch(getUserRepoParams);
  const [userRepos, setUserRepos] = useState([]);

  useEffect(() => {
    setUserRepos(reposReponse);
  }, [reposReponse]);

  // Start filters
  const filterByName = (name: string) => {
    const optionsThatHasSelectedName: any = reposReponse.filter((item: any) =>
      item.name.includes(name)
    );
    setUserRepos(optionsThatHasSelectedName);
  };

  const filterByLanguage = (language: string) => {
    console.log(language);
    const optionsThatHasSelectedName: any = userRepos.filter(
      (item: any) =>
        item.language && item.language.toLowerCase().includes(language)
    );
    setUserRepos(optionsThatHasSelectedName);
  };
  // End filters
  // Start pagination
  const [currentPage, setCurrentPage] = useState(0);
  const nextPage = () => {
    console.log("Next page");
    setCurrentPage(currentPage + 5);
  };

  const prevPage = () => {
    console.log("Next page");
    setCurrentPage(currentPage - 5);
  };
  // End pagination

  return (
    <>
      <section>
        <S.FinderContainer>
          <UserFinder />
        </S.FinderContainer>
        <S.CenterContainter>
          <Sidebar
            name={userInfo.name}
            image={userInfo.avatar_url}
            description={userInfo.bio}
            username={userInfo.login}
          />
          <S.RepositoryOverviewContainer>
            <S.TabsContainer>
              <S.TabItem>
                <span></span>
                <span>Overview</span>
              </S.TabItem>
            </S.TabsContainer>
            <S.RepositoryListContainer>
              <div>
                <RepositoryFilters
                  filterByLanguage={filterByLanguage}
                  filterByName={filterByName}
                />
              </div>
              <div>
                <p>We found {userRepos.length} for this user.</p>
                {!isReposLoading &&
                  userRepos
                    .slice(currentPage, currentPage + 5)
                    .map((repo: any, index: number) => (
                      <Repository
                        name={repo.name}
                        description={repo.description}
                        language={repo.language}
                        key={repo.id}
                      />
                    ))}
              </div>
              <Pagination
                totalItems={userRepos.length}
                showing={currentPage + 5}
                nextPage={nextPage}
                prevPage={prevPage}
              />
            </S.RepositoryListContainer>
          </S.RepositoryOverviewContainer>
        </S.CenterContainter>
      </section>
    </>
  );
};

export default User;
