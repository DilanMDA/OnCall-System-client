// Home page

import React, { useState } from "react";
import SignIn from "../../Signin";

const User = () => {
  const [isOpen, setIsOpen] = useState(false); //Sidebar properties access{opasity and top}

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <SignIn />
      User...
    </>
  );
};

export default User;
