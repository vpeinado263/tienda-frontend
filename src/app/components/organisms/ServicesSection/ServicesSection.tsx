import Image from 'next/image';

const ServicesSection = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Las Mejores Ofertas</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex justify-center items-center bg-white shadow-md rounded-lg overflow-hidden">
            <Image src="/images/service1.webp" alt="Servicio 1" width={290} height={100} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
