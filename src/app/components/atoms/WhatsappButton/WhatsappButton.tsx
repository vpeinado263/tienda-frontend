import React from "react";
import styles from './WhatsappButon.module.css'
import Link from "next/link";
import Image from 'next/image';


const WhatsapButton = () => {
  return (
    <>
      <button>
        <Link href={'https://api.whatsapp.com/send?phone=+542612448018&text=Encargue:'} className={styles.float}>
        <div className="w-16 h-16">
          <Image src="/icon/whatsapp.svg" alt="Chat " width={500} height={300}  />
        </div>
        </Link>
      </button>
    </>
  );
};

export default WhatsapButton ;
