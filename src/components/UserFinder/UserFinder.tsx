import React, { FC, useState } from "react";
import { Finder, SubmitButton } from "./Styles";
import props from "./interfaces";
import { navigate } from "@reach/router";

const UserFinder: FC<props> = ({ placeholder }: props) => {
  const [username, setUsername] = useState("");
  const searchByUser = () => {
    navigate(`/user/${username}`);
  };

  return (
    <>
      <div>
        <Finder
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
      </div>
      <div>
        <SubmitButton onClick={() => searchByUser()}>Go!</SubmitButton>
      </div>
    </>
  );
};

export default UserFinder;
