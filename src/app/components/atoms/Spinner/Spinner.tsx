import React from 'react';

const Spinner = () => {
  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center bg-black text-white z-[9999] rounded-2xl p-4 md:p-8 bg-cover bg-center"
      style={{ 
        backgroundImage: "url('/Tienda-x-2.png')", 
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
        
      }}
    >
      <div className="w-10 h-10 md:w-12 md:h-12 border-4 border-white/30 border-t-white rounded-full animate-spin mb-3 md:mb-5"></div>
      <p className="text-base md:text-xl">Cargando...</p>
    </div>
  );
};

export default Spinner;
