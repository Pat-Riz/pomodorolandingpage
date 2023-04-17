import React from "react";
import Image from "next/image";
import heroImg from "../../public/hero.png";

export default function Shame() {
  return (
    <div className='w-screen h-screen bg-gradient-to-b from-focus from-30% to-focus-dark'>
      <div className='flex flex-col justify-center items-center'>
        <div className='text-primary font-bold text-8xl mt-12 tracking-wide'>
          Shame!
        </div>
        <div className='text-primary font-bold text-2xl mt-12'>
          You should be focusing on work right now
        </div>
        <div className='hover:scale-105 hover:brightness-150'>
          <Image src={heroImg} alt='Guy focusing' width={512} height={512} />
        </div>
      </div>
    </div>
  );
}
