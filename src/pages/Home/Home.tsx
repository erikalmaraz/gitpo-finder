import React from "react";
import UserFinder from "../../components/UserFinder/UserFinder"
import { WrapperSection} from './Styles'
function Home() {
  return (
    <React.Fragment>
      <WrapperSection>
        <div>
          <h1>We gonna love find for you</h1>
          <p>Gitpo give you all info about github user and his repositories.</p>
        </div>
        <div>
          <UserFinder />
        </div>
      </WrapperSection>
    </React.Fragment>
  );
}

export default Home;
