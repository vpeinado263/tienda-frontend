import React from 'react';
import Image from 'next/image';

const Spinner = () => {
  return (
    <div>
    <Image src="/spinner.png" alt="Loading..." width={400} height={300} />
    </div>
  );
};

export default Spinner;


