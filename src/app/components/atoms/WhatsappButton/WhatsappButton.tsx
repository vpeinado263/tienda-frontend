import React from "react";
import styles from './WhatsappButon.module.css'
import Link from "next/link";
import Image from 'next/image';

interface Props {
  message: string;
}


function WhatsapButton ( {message} : Props ) {

  const phoneNumber = "+542612448018";
  const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

  return (
    <>
      <button>
        <Link href={whatsappLink} className={styles.float}>
        <div className="w-16 h-16">
          <Image src="/icon/whatsapp.svg" alt="Chat " width={300} height={100}  />
        </div>
        </Link>
      </button>
    </>
  );
};

export default WhatsapButton;
