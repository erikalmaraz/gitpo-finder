import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import UserFinder from "../../components/UserFinder/UserFinder";
import RepositoryFilters from "../../components/RepositoryFilters/RepositoryFilters";
import Repository from "../../components/Repository/Repository";
import Pagination from "../../components/Pagination/Pagination";
import useFetch from "../../hooks/useFetch";
import UserInfo from "../../interfaces/userInfo.interface";
import Loader from "../../components/Loader/Loader";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { routes } from "../../config/request";
import { useLocation } from "@reach/router";
import UserType from "../../interfaces/user.interface";
import * as S from "./Styles";

library.add(fas);

const User = ({ theme }: UserType) => {
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
  const {
    response: userInfo,
    isLoading: isInfoLoading,
    error: userErr,
  }: UserInfo = useFetch(getUserInfoParams);
  const userWasFound = Object.keys(userInfo).length > 0;
  const { response: reposReponse, isLoading: isReposLoading }: UserInfo =
    useFetch(getUserRepoParams);
  const [userRepos, setUserRepos] = useState([]);

  // End API request

  // Start filters

  const filterByName = (name: string) => {
    return userRepos.filter((item: any) => item.name.includes(name));
  };

  const filterByLanguage = (language: string) => {
    return userRepos.filter((item: any) => {
      if (item.language && language !== "") {
        return item.language.toLowerCase().includes(language);
      }
    });
  };

  const [searchByName, setSearchByName] = useState("");
  const [searchByType, setSearchByType] = useState("");

  const applyFilters = () => {
    let filteredArray;
    if (searchByName !== "") {
      filteredArray = filterByName(searchByName);
    }
    if (searchByType !== "") {
      filteredArray = filterByLanguage(searchByType);
    }
    if (filteredArray) setUserRepos(filteredArray);
  };
  // End filters
  // Start pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsToSplice, setitemsToSplice] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(5);

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

  useEffect(() => {
    setUserRepos(reposReponse);
  }, [reposReponse, searchByName, searchByType]);

  useEffect(() => {
    applyFilters();
    setItemsToShow(5);
    setitemsToSplice(0);
  }, [searchByName, searchByType]);

  return (
    <>
      <section>
        <S.FinderContainer>
          <UserFinder theme={theme} />
        </S.FinderContainer>
        {userWasFound && !userErr ? (
          <S.CenterContainter>
            <Sidebar
              name={userInfo.name}
              image={userInfo.avatar_url}
              description={userInfo.bio}
              username={userInfo.login}
            />
            <S.RepositoryOverviewContainer>
              <S.TabsContainer>
                <S.TabItem theme={theme}>
                  <S.TabItemIcon theme={theme}>
                    <FontAwesomeIcon icon="book-open" />
                  </S.TabItemIcon>
                  <span>Overview</span>
                </S.TabItem>
              </S.TabsContainer>
              <S.RepositoryListContainer>
                <div>
                  <RepositoryFilters
                    setSearchByName={setSearchByName}
                    setSearchByType={setSearchByType}
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
                  nextPage={nextPage}
                  prevPage={prevPage}
                />
              </S.RepositoryListContainer>
            </S.RepositoryOverviewContainer>
          </S.CenterContainter>
        ) : (
          <S.UserWasntFound>
            User wasn't found, please try with another.
          </S.UserWasntFound>
        )}
      </section>
      {(isInfoLoading || isReposLoading) && <Loader />}
    </>
  );
};

export default User;
