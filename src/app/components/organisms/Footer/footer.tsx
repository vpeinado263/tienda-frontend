import React from 'react';
import styles from './footer.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.banner}>
        <Link href="https://www.facebook.com/" passHref>
          <Image src="./footer/facebook.svg" alt="Facebook" className={styles.iconsBanner} width={70} height={70} />
        </Link>
        <Link href="https://www.instagram.com/" passHref>
          <Image src="./footer/instagram.svg" alt="Instagram" className={styles.iconsBanner} width={70} height={70} />
        </Link>
        <Link href="https://www.twitter.com/" passHref>
          <Image src="./footer/twitter.svg" alt="Twitter" className={styles.iconsBannerFullscreen} width={70} height={70} />
        </Link>
        <Link href="https://web.whatsapp.com/" passHref>
          <Image src="./footer/whatsapp.svg" alt="Whatsapp" className={styles.iconsBanner} width={70} height={70} />
        </Link>
        <Link href="https://tiktok.com/" passHref>
          <Image src="./footer/tiktok.svg" alt="TikTok" className={styles.iconsBannerFullscreen} width={70} height={70} />
        </Link>
        <Link href="https://web.telegram.org/a/" passHref>
          <Image src="./footer/telegram.svg" alt="Telegram" className={styles.iconsBannerFullscreen} width={70} height={70} />
        </Link>
      </div>

      <div className={styles.footerLinks}>
        <div className={styles.clubDeBeneficios}>
          <p><Link href="#"><span>¿Aun no estas Suscripto?</span></Link></p>
        </div>
        <div className={styles.contacto}>
          <h2>Contacto</h2>
          <p>0800-999-0000</p>
          <p>Tienda -x-.com</p>
          <p><Link href="#"><span>Buscanos en Redes</span></Link></p>
          <p><Link href="#"><span>Chateá con un asesor</span></Link></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
