import styles from './ServicesSection.module.css';
import Image from 'next/image';

const ServicesSection = () => {
  return (
    <div className={styles.servicesSection}>
      <div className={styles.container}>
        <h2 className={styles.titulo}>Las Mejores Ofertas</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceItem}>
            <Image src="/images/service1.webp" alt="Servicio 1" width={290} height={100} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
