// components/layouts/adminLayout.jsx

'use client'

import { useState } from 'react';
import ParentComponent from '../sections/ParentComponent';

export default function AdminLayout({ children }) {
  const [asideOpen, setAsideOpen] = useState(false);
  
  const asideClickOpen = () => {
    setAsideOpen(!asideOpen);
  };

  return (
    <>
      <ParentComponent appOpen={asideOpen} appAsideOpen={asideClickOpen} />

      <main className=''>
        <div className={asideOpen ? 'container' : 'container active'}>
          {children}
        </div>
      </main>
    </>
  );
}
