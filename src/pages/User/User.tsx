import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import UserFinder from "../../components/UserFinder/UserFinder";
import RepositoryFinder from "../../components/RepositoryFinder/RepositoryFinder";
import Repository from "../../components/Repository/Repository";
import * as S from "./Styles";

const User = () => {
  return (
    <>
      <section>
        {/* Search Other User */}
        <S.FinderContainer>
          <UserFinder />
        </S.FinderContainer>
        {/* End Search Other User */}
        <S.CenterContainter>
          <Sidebar />
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
                {[1, 2, 3].map(() => (
                  <Repository />
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
