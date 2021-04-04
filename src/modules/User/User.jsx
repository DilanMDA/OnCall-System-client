// Home page

import React, { useState } from "react";
import SignIn from "../../Signin";

const User = () => {
  const [isOpen, setIsOpen] = useState(false); //Sidebar properties access{opasity and top}

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="row">
      <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
        <SignIn />
      </div>
      <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Hello</div>
    </div>
  );
};

export default User;
