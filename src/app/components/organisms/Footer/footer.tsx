import React from 'react';
// import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      {/* <div className="flex justify-center space-x-4 mb-4">
        <Link href="https://www.facebook.com/">
          <Image
            src="/footer/facebook.svg"
            alt="Facebook"
            className="w-16 h-16"
            width={70}
            height={70}
          />
        </Link>
        <Link href="https://www.instagram.com/">
          <Image
            src="/footer/instagram.svg"
            alt="Instagram"
            className="w-16 h-16"
            width={70}
            height={70}
          />
        </Link>
        <Link href="https://web.whatsapp.com/">
          <Image
            src="/footer/whatsapp.svg"
            alt="Whatsapp"
            className="w-16 h-16"
            width={70}
            height={70}
          />
        </Link>
      </div> */}

      <div className="flex flex-col items-center">
        <div className="mb-4">
          {/* Puedes agregar contenido aquí si es necesario */}
        </div>
        {/* <div className="text-center">
          <p className="text-lg font-semibold">Tienda -x-</p>
          <p>
            <Link href="#">
              <span className="text-blue-400 hover:text-blue-600">Chatea con nosotros y realiza tu pedido</span>
            </Link>
          </p>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
