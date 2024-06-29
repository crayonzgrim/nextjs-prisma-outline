'use client';

import { useState } from 'react';

import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

export function AuthLinks() {
  const [open, setOpen] = useState(false);

  const { status } = useSession();

  return (
    <>
      {status === 'unauthenticated' ? (
        <Link href="/login" className={'cursor-pointer sm:hidden'}>
          Login
        </Link>
      ) : (
        <>
          <Link href="/write" className={'cursor-pointer'}>
            Write
          </Link>
          <span
            className={'cursor-pointer'}
            onClick={() => signOut({ callbackUrl: '/' })}
          >
            Logout
          </span>
        </>
      )}
      <div
        className={
          'hidden h-4 w-5 cursor-pointer flex-col justify-between sm:flex'
        }
        onClick={() => setOpen(!open)}
      >
        <div className={'h-[2px] w-full bg-textColor'} />
        <div className={'h-[2px] w-full bg-textColor'} />
        <div className={'h-[2px] w-full bg-textColor'} />
      </div>
      {open && (
        <div
          className={
            'absolute left-0 top-[100px] z-[999] flex h-[calc(100vh-100px)] w-full flex-col items-center justify-center gap-12 bg-bg text-[36px]'
          }
        >
          <Link href="/">Homepage</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          {status === 'unauthenticated' ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/write">Write</Link>
              <span className={'cursor-pointer sm:hidden'}>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
}
