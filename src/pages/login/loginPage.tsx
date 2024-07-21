import React, { useState } from "react";
import StoreButton from "../../app/components/atoms/StoreButton/StoreButton";
import Login from "../../app/components/organisms/Login/Login";


const LoginPage = () => {
  const [, setToken] = useState<string | null>(null);

  return (
    <>
      <main>
        <StoreButton />
         <Login setToken={setToken}/>    
      </main>
    </>
  );
};

export default LoginPage;
