import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../assets/logo.png';
import WalletIcon from '../assets/walletIcon';

const DashboardHeader = () => {
  return (
    <header className='w-full bg-transparent'>
      <div className='md:flex hidden items-end gap-2 lg:gap-4 justify-end px-10 py-10'>
        <span className='text-white font-medium self-end'>Wallet</span>
        <Link href='/wallet'>
          <WalletIcon />
        </Link>
      </div>

      <div className='md:hidden flex justify-between items-center px-4 py-6 sm:px-6 md:px-20 lg:px-44'>
        <div className='flex items-center'>
          <Image
            src={logo}
            width={100}
            height={100}
            alt='Logo'
            className='h-8 w-14 md:h-8 md:w-14 mr-2'
          />
        </div>

        <div className='flex items-center gap-2 md:gap-4'>
          <span className='text-white font-medium'>Wallet</span>
          <Link href='/wallet'>
            <WalletIcon />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
