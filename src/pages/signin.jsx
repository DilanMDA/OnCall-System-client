import React from "react";
import ScrollToTop from "../components/ScrollToTop";
import SignIn from "../Signin";

const SigninPage = () => {
  return (
    <>
      <ScrollToTop />
      <div style={{ paddingTop: 100, paddingBottom: 100 }}>
        <SignIn />
      </div>
    </>
  );
};

export default SigninPage;
