'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import arrowUp from '../../../public/assets/arrow-up.svg';
import logo1 from '../../../public/assets/var.svg';

const functionNav = [
  {
    nameText: "Members",
    id: '#members'
  },
  {
    nameText: "Projects",
    id: '#projects'
  },
  {
    nameText: "Service",
    id: '#service'
  },
  {
    nameText: "Let's Talk",
    id: '#service'
  }
];

const Navbar = () => {
  return (
    <>
      <div className="top-11 z-20 absolute flex justify-center w-full">
        <Image src={logo1} width={150} alt="logo" />
      </div>
      <div className='fixed z-20 text-center bottom-0 container flex'>
        <div className='mx-auto bg-[#101D1F] my-10 text-white rounded-full max-w-full'>
          <nav className='inline-flex flex-row w-[430px] items-center py-[6px] px-[6px] gap-2'>
            <ArrowUpIcon />
            {functionNav.map((item, index) => (
              <LinkHoverAnimation key={index} text={item.nameText} href={item.id} />
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

const ArrowUpIcon = () => {
  const [hovered, setHovered] = useState(false);

  const handleMouseOver = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div className='relative group'>
      <button
        title='arrow up'
        type='button'
        className='bg-[#AAC8CD] w-[40px] h-[40px] m-1 rounded-full flex items-center justify-center'
        onMouseEnter={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        <div className='absolute inset-0 flex items-center justify-center'>
          <Image
            src={arrowUp}
            width={20}
            alt='arrow-up'
            className={`transition-transform duration-300 transform`}
          />
        </div>
      </button>
    </div>
  );
};

type LinkHoverAnimationProps = {
  text: string;
  href: string;
};

const LinkHoverAnimation: React.FC<LinkHoverAnimationProps> = ({ text, href }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseOver = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <a
      href={href}
      className="group relative py-2 my-1 px-2 flex justify-center items-center overflow-hidden"
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <span
        className={`text-[16px] font-[500] whitespace-nowrap transition-transform duration-500 ${hovered ? 'transform -translate-y-[100px]' : ''}`}
      >
        {text}
      </span>
      <span
        className={`text-[16px] font-[500] whitespace-nowrap bg-[#AAC8CD] bg-opacity-45 rounded-2xl p-2 transition-transform duration-500 absolute top-full ${hovered ? 'transform -translate-y-[40px]' : ''}`}
      >
        {text}
      </span>
    </a>
  );
};

export default Navbar;
