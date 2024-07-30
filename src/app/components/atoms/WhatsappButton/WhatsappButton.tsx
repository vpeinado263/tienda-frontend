import React from "react";
import styles from './WhatsappButton.module.css'; // Asegúrate de que el nombre del archivo sea correcto
import Link from "next/link";
import Image from 'next/image';

interface Props {
  message: string;
}

function WhatsapButton({ message }: Props) {
  const phoneNumber = "+542612402016";
  const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

  return (
    <Link href={whatsappLink} passHref>
      <span className={styles.float} role="button">
        <div className="w-16 h-16">
          <Image src="/icon/whatsapp.svg" alt="Chat" width={300} height={100} />
        </div>
      </span>
    </Link>
  );
};

export default WhatsapButton;
