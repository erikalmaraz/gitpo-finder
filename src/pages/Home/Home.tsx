import React from "react";
import UserFinder from "../../components/UserFinder/UserFinder"
function Home() {
  return (
    <>
      <div>
        <div>
          <h1>We gonna love find for you</h1>
          <p>Gitpo give you all info about github user and his repositories.</p>
        </div>
        <div>
          <UserFinder />
        </div>
      </div>
    </>
  );
}

export default Home;
