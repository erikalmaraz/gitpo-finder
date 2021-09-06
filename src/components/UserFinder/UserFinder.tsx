import React, { useState } from "react";
import * as S from "./Styles";
import UserFinderType from "../../interfaces/userFinder.interface";
import { navigate } from "@reach/router";

const UserFinder = ({ theme }: UserFinderType) => {
  const [username, setUsername] = useState("");
  const [isValidForm, setIsValidForm] = useState(true);

  const searchByUser = (event: any) => {
    event.preventDefault();
    if (username === "") {
      setIsValidForm(false);
      return;
    }
    setIsValidForm(true);
    navigate(`/user/${username}`);
  };

  return (
    <>
      <S.FormContainer>
        <div>
          <S.Finder
            theme={theme}
            isValidForm={isValidForm}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            type="text"
            placeholder="Type a username..."
          />
        </div>
        <div>
          <S.SubmitButton
            theme={theme}
            type="submit"
            onClick={(e) => searchByUser(e)}
          >
            Go!
          </S.SubmitButton>
        </div>
      </S.FormContainer>
    </>
  );
};

export default UserFinder;
