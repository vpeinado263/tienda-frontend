import React from 'react';
import styles from './footer.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.banner}>
        <Link href="https://www.facebook.com/">
          <Image src="./footer/facebook.svg" alt="Facebook" className={styles.iconsBanner} width={70} height={70} />
        </Link>
        <Link href="https://www.instagram.com/">
          <Image src="./footer/instagram.svg" alt="Instagram" className={styles.iconsBanner} width={70} height={70} />
        </Link>
        <Link href="https://web.whatsapp.com/">
          <Image src="./footer/whatsapp.svg" alt="Whatsapp" className={styles.iconsBanner} width={70} height={70} />
        </Link>
      </div>

      <div className={styles.footerLinks}>
        <div className={styles.clubDeBeneficios}>
        </div>
        <div className={styles.contacto}>
          <p>Tienda -x-</p>
          <p><Link href="#"><span>Chatea con nosotros y realiza tu pedido</span></Link></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
