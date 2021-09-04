import React, { FC } from "react";
import { Finder, SubmitButton } from "./Styles";
import props from './interfaces';
const UserFinder: FC<props> = ({ placeholder }: props) => {
  return (
    <>
      <div>
        <Finder />
      </div>
      <div>
        <SubmitButton>Go!</SubmitButton>
      </div>
    </>
  );
};

export default UserFinder;
