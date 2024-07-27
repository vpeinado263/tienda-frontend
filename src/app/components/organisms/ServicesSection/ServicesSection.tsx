import styles from './ServicesSection.module.css';
import Image from 'next/image';

const ServicesSection = () => {
  return (
    <div className={styles.servicesSection}>
      <div className={styles.container}>
        <h2>Nuestros Servicios</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceItem}>
            <Image src="/images/service1.webp" alt="Servicio 1" width={300} height={200} />
            <h3>Servicio 1</h3>
            <p>Descripción breve del servicio 1.</p>
          </div>
          <div className={styles.serviceItem}>
            <Image src="/images/service2.webp" alt="Servicio 2" width={300} height={200} />
            <h3>Servicio 2</h3>
            <p>Descripción breve del servicio 2.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
