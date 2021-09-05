import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import UserFinder from "../../components/UserFinder/UserFinder";
import RepositoryFilters from "../../components/RepositoryFilters/RepositoryFilters";
import Repository from "../../components/Repository/Repository";
import Pagination from "../../components/Pagination/Pagination";
import useFetch from "../../hooks/useFetch";
import UserInfo from "../../interfaces/userInfo.interface";
import Loader from "../../components/Loader/Loader";
import { routes } from "../../config/request";
import { useLocation } from "@reach/router";
import * as S from "./Styles";

const User = () => {
  // Start API request
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
  // End API request

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
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsToSplice, setitemsToSplice] = useState(0);
  const itemsToShow = 3;
  const nextPage = () => {
    const totalPages = Math.ceil(userRepos.length / itemsToShow);
    const isMaxPagesNotAchive = currentPage < totalPages;
    if (isMaxPagesNotAchive) {
      setCurrentPage(currentPage + 1);
      setitemsToSplice(itemsToSplice + itemsToShow);
    }
  };

  const prevPage = () => {
    const isCurrentPageZero = currentPage === 1;
    if (!isCurrentPageZero) {
      setCurrentPage(currentPage - 1);
      setitemsToSplice(itemsToSplice - itemsToShow);
    }
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
                {!isReposLoading &&
                  userRepos
                    .slice(itemsToSplice, itemsToSplice + itemsToShow)
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
                showing={itemsToSplice + itemsToShow}
                nextPage={nextPage}
                prevPage={prevPage}
              />
            </S.RepositoryListContainer>
          </S.RepositoryOverviewContainer>
        </S.CenterContainter>
      </section>
      {(isInfoLoading || isReposLoading) && <Loader />}
    </>
  );
};

export default User;
