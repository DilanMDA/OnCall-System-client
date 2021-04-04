// Home page

import React, { useState } from "react";
import ScrollToTop from "../../components/ScrollToTop";
import UserTable from "../../components/UserTable/UserTable";
import SignIn from "../../Signin";

const User = () => {
  const [isOpen, setIsOpen] = useState(false); //Sidebar properties access{opasity and top}

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container">
      <ScrollToTop />
      <div className="row" style={{ paddingTop: 100, paddingBottom: 60 }}>
        <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
          <SignIn />
        </div>
        <div className="col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8">
          <UserTable />
        </div>
      </div>
    </div>
  );
};

export default User;
