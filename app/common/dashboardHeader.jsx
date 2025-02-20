import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../assets/logo.png'
import WalletIcon from '../assets/walletIcon'

const DashboardHeader = () => {
  return (
    <header className="w-full bg-transparent">
      <div className="md:flex hidden items-end gap-3 sm:gap-6 md:gap-8 justify-end px-10 py-10">
        <span className="text-white font-medium self-end">Wallet</span>
        <Link href="/wallet">
          <WalletIcon />
        </Link>
      </div>

      <div className="md:hidden flex justify-between items-center px-4 py-3 sm:px-6 md:px-20 lg:px-44">
          {/* Logo Section */}
          
          <div className="flex items-center">
              <Image src={logo} width={100} height={100} alt="Logo" className="h-6 w-8 md:h-8 md:w-14 mr-2" />
          </div>

          {/* Icons Section */}
          <div className="flex items-center gap-3 sm:gap-6 md:gap-8">
              <span className='text-white font-medium'>Wallet</span>
              <Link href='/wallet'>
                <WalletIcon />
              </Link>
          </div>
      </div>
    </header>
  )
}

export default DashboardHeader