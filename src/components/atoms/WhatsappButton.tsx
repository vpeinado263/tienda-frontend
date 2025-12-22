import React from "react";
import Link from "next/link";
import Image from "next/image";

interface Props {
  message: string;
}

const WhatsapButton = ({ message }: Props) => {
  const phoneNumber = "+542617474514";
  const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

  return (
    <Link href={whatsappLink} passHref>
      <div
        className="absolute bottom-4 right-4 p-2 bg-white rounded-full flex items-center justify-center"
        aria-label="WhatsApp Button"
        role="button"
      >
        <Image src="/whatsapp.svg" alt="Chat" width={50} height={50} />
      </div>
    </Link>
  );
};

export default WhatsapButton;
