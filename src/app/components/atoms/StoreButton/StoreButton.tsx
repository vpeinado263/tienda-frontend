import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const StoreButton = () => {
  return (
    <Link href="/">
      <span className="flex items-center justify-center p-2 rounded-2xl transition-colors duration-300 ease-in-out bg-gradient-to-r from-gray-900 to-gray-700">
        <Image
          src="/Tienda-x-2.png"
          alt="Logo de la tienda"
          width={80}
          height={270}
          priority
        />
      </span>
    </Link>
  );
};

export default StoreButton;


