import Image from "next/image";
import React from "react";

const ImprintPage = () => {
  return (
    <div className="py-20 bg-white">
      <div className="flex items-center justify-between w-[60%] m-auto">
        {" "}
        <div className="grid gap-5">
          {" "}
          <Image
            src={"/t.jpeg"}
            width={1100}
            height={800}
            className="w-[300px] rounded-md shadow-md "
            alt="CEO image"
          />
          <h3 className="text-center ">OWNER/C.E.O</h3>
          <h4 className="text-center ">Thakur Singh Gurung</h4>
        </div>{" "}
        <div className="grid gap-5">
          <Image
            src={"/rr.png"}
            width={1100}
            height={800}
            className="w-[300px] rounded-md shadow-md "
            alt="CEO image"
          />
          <h3 className="text-center"> OWNER/Project Manager</h3>
          <h4 className="text-center ">Romisha Gurung</h4>
        </div>{" "}

      </div>
      <div className="grid gap-2 text-black text-center py-10">
        <h5>WAA Tech Ltd.</h5>
        <h5>NiLe Street 64,London, UK</h5>

        <h5>UTR: 32568 17834</h5>
        <h5>Contact: tech@gmail.com</h5>

      </div>
    </div>
  );
};

export default ImprintPage;
