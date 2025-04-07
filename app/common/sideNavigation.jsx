'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Home,
  MessageSquare,
  BarChart,
  ClipboardList,
  Settings,
} from 'lucide-react';
import { usePathname } from 'next/navigation';
import logo from '../assets/logo.png';

const SideNavigation = () => {
  const pathname = usePathname();

  const navItems = [
    { href: '/dashboard', icon: Home, label: 'Home' },
    { href: '/dashboard/insight', icon: BarChart, label: 'Insight' },
    { href: '/dashboard/chat', icon: MessageSquare, label: 'Chat' },
    { href: '/dashboard/tasks', icon: ClipboardList, label: 'Tasks' },
    { href: '/dashboard/settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <nav className='hidden md:flex h-screen w-64 bg-[#333333] fixed left-0 top-0 flex-col'>
      {/* Logo Area */}
      <div className='flex items-center pt-8 px-6'>
        <Image src={logo} width={40} height={40} alt='Logo' className='mr-3' />
        <span className='text-xl font-bold text-white'>LancheAI</span>
      </div>

      {/* Navigation Links */}
      <div className='flex-1 overflow-y-auto py-8'>
        <div className='space-y-1 px-3'>
          {navItems.map(({ href, icon: Icon, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors
                  ${
                    isActive
                      ? 'bg-[#b02b2c]/20 text-white'
                      : 'text-white hover:bg-[#b02b2c]/10'
                  }`}
              >
                <Icon className='w-5 h-5' />
                <span className='font-medium'>{label}</span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Bottom Section */}
      <div className='p-6 border-t border-gray-800'>
        <div className='text-sm text-gray-400'>© 2024 LancheAI</div>
      </div>
    </nav>
  );
};

export default SideNavigation;
