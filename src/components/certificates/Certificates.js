import { useState } from 'react';
import front1 from '../../front-end_part1.png';
import front2 from '../../front-end_part2.png';
import js from '../../javascript.png';
import frontPro from '../../front-end_pro.png';
import reactCert from '../../react_certificate.png';

function Certificates() {
  const [activeImage, setActiveImage] = useState(reactCert);

  return (
    <section className="px-[30px] md:px-[60px] pb-[30px] md:pb-[60px] mt-[30px]">
      <h1 className="text-2xl md:text-4xl font-light underline underline-offset-[10px] decoration-[#7B00FF] decoration-1 leading-[3rem] md:leading-[4rem] text-center">
        CERTIFICATIONS
      </h1>

      <div className="hidden lg:flex flex-row items-center gap-2 md:h-[400px] w-full max-w-5xl mt-10 mx-auto">
        {[front1, front2, js, frontPro, reactCert].map((img, i) => (
          <div
            key={i}
            className="relative flex-grow transition-all w-56 rounded-lg overflow-hidden h-[400px] duration-500 hover:w-full"
          >
            <img
              src={img}
              alt="certificate"
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="flex lg:hidden flex-col items-center space-y-4 mt-[30px]">
        <div className="w-full max-w-3xl">
          <img
            src={activeImage}
            className="w-full rounded-lg"
            alt="Active Certificate"
          />
        </div>

        <div className="grid grid-cols-4 max-w-3xl gap-4">
          {[front1, front2, js, frontPro].map((img, i) => (
            <img
              key={i}
              src={img}
              onClick={() => setActiveImage(img)}
              className="rounded-lg md:h-24 h-14 object-cover cursor-pointer hover:opacity-80"
              alt="Certificate thumbnail"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;