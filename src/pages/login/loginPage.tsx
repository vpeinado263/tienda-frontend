import React, { useState } from "react";
import Login from "../../app/components/organisms/Login/Login";


const LoginPage = () => {
  const [, setToken] = useState<string | null>(null);

  return (
    <>
      <main>
         <Login setToken={setToken}/>    
      </main>
    </>
  );
};

export default LoginPage;
