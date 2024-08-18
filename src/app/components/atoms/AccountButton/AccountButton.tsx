import React from 'react';
import { FaUser } from 'react-icons/fa';
import Link from 'next/link';

const AccountButton = () => {
  return (
    <Link href={"/login/loginPage"}>
      <div className="flex items-center gap-2 px-4 py-2 hover:bg-blue-700 text-white rounded-md shadow-md transition-colors duration-300">
        <FaUser className="text-xl" />
        <span className="text-sm font-medium">Iniciar Sesión</span>
      </div>
    </Link>
  );
};

export default AccountButton;





