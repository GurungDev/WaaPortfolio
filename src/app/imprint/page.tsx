import Image from "next/image";
import React from "react";

const ImprintPage = () => {
  return (
    <div className="py-20 bg-white">
      <div className="flex flex-col md:flex-row items-center justify-between w-[60%] m-auto">
        <div className="grid gap-5 items-center justify-center py-8">
          <div className="relative w-[300px] h-[300px] rounded-md shadow-md overflow-hidden">
            <Image
              src={"/t.jpeg"}
              layout="fill"
              objectFit="cover"
              alt="CEO image"
            />
          </div>
          <h3 className="text-center">
            OWNER / <br /> C.E.O
          </h3>
          <h4 className="text-center">Thakur Singh Gurung</h4>
        </div>
        <div className="grid gap-5 items-center justify-center py-8">
          <div className="relative w-[300px] h-[300px] rounded-md shadow-md overflow-hidden">
            <Image
              src={"/rr.png"}
              layout="fill"
              objectFit="cover"
              alt="Project Manager image"
            />
          </div>
          <h3 className="text-center">OWNER / <br /> Project Manager</h3>
          <h4 className="text-center">Romisha Gurung</h4>
        </div>
      </div>
      <div className="grid gap-2 text-black text-center py-10">
        <h5>WAA Tech Ltd.</h5>
        <h5>NiLe Street 64, London, UK</h5>
        <h5>UTR: 32568 17834</h5>
        <h5>Contact: tech@gmail.com</h5>
      </div>
    </div>
  );
};

export default ImprintPage;
