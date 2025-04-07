'use client';
import React from 'react';
import Link from 'next/link';
import {
  Home,
  MessageSquare,
  BarChart,
  ClipboardList,
  Settings,
} from 'lucide-react';
import { usePathname } from 'next/navigation';

const BottomNavigation = () => {
  const pathname = usePathname();

  const navItems = [
    { href: '/dashboard', icon: Home, label: 'Home' },
    { href: '/dashboard/insight', icon: BarChart, label: 'Insight' },
    { href: '/dashboard/chat', icon: MessageSquare, label: 'Chat' },
    { href: '/dashboard/tasks', icon: ClipboardList, label: 'Tasks' },
    { href: '/dashboard/settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <nav className='md:hidden fixed bottom-0 left-0 w-full bg-[#333333] px-2 py-2 flex justify-around items-center shadow-lg z-50'>
      {navItems.map(({ href, icon: Icon, label }) => {
        const isActive = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            className={`flex flex-col items-center p-1 rounded-lg transition-colors ${
              isActive ? 'text-[#b02b2c]' : 'text-gray-400 hover:text-white'
            }`}
          >
            <Icon className='w-5 h-5 mb-1' />
            <span className='text-xs'>{label}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default BottomNavigation;
