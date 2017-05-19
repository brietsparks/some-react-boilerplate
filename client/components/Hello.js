// @flow

import * as React from "react";

type HelloProps = {
  firstName: string,
  lastName: string
}

export default ({firstName, lastName} : HelloProps) => {
  return <h1>Hello {firstName} {lastName}!</h1>;
};
