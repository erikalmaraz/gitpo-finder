import React, { FC, useState } from "react";
import { Finder, SubmitButton } from "./Styles";
import UserFinderType from "../../interfaces/userFinder.interface";
import { navigate } from "@reach/router";

const UserFinder = ({ theme }: UserFinderType) => {
  const [username, setUsername] = useState("");
  const searchByUser = () => {
    navigate(`/user/${username}`);
  };

  return (
    <>
      <div>
        <Finder
          theme={theme}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          type="text"
          placeholder="Type a username..."
        />
      </div>
      <div>
        <SubmitButton
          theme={theme}
          type="submit"
          onClick={() => searchByUser()}
        >
          Go!
        </SubmitButton>
      </div>
    </>
  );
};

export default UserFinder;
