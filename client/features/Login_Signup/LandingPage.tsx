import React, { useState } from "react";
import Signup from "./Signup";
import Login from "./Login"

const LandingPage = () => {
  const [memberStatus, setMemberStatus] = useState(true);

  return (
    <>
      {memberStatus ? (
        <div style={{ textAlign: "center" }}>
          <Login /> <p>Not a Registered User?</p>
          <a onClick={() => setMemberStatus(false)}>Signup</a>
        </div>
      ) : (
          <div style={{ textAlign: "center" }}>
        <Signup />
        <p>Already Have an Account?</p>
        <a onClick={() => setMemberStatus(true)}>Login</a>
        </div>
      )}
    </>
  );
};

export default LandingPage;
