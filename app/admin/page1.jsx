'use client';

import { useState } from 'react';
import ParentComponent from '@/components/sections/ParentComponent';

export default function App() {
  const [asideOpen, setAsideOpen] = useState(false); // Sidebar toggle state


  // Toggle Sidebar
  const asideClickOpen = () => {
    setAsideOpen(!asideOpen);
  };

  return (
    <>
      <ParentComponent appOpen={asideOpen} appAsideOpen={asideClickOpen} />
      <main>
        {/* <div className={asideOpen ? 'container' : 'container active'}>
          <Component {...pageProps} />
        </div> */}
      </main>
    </>
  );
}
