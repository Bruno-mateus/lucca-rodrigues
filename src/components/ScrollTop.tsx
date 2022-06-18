import React, { useState } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';

export default function ScrollTop() {
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 290) {
      setVisible(true)
    }
    else if (scrolled <= 290) {
      setVisible(false)
    }

  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  window.addEventListener('scroll', toggleVisible);

  return (
    <button onClick={() => scrollToTop()} className="fixed bottom-4 right-1 bg-slate-800 p-1 rounded-xl	" style={{ display: visible ? 'inline' : 'none' }} >
      <AiOutlineArrowUp fill='white' />
    </button >
  )
}