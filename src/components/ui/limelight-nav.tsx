import React, { useState, useRef, useLayoutEffect } from 'react';

type NavItem = {
  id: string;
  label: string;
  href: string;
};

type LimelightNavProps = {
  items: NavItem[];
  defaultActiveIndex?: number;
  className?: string;
  limelightClassName?: string;
  linkClassName?: string;
};

export const LimelightNav = ({
  items,
  defaultActiveIndex = 0,
  className,
  limelightClassName,
  linkClassName,
}: LimelightNavProps) => {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);
  const [isReady, setIsReady] = useState(false);
  const navItemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const limelightRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (items.length === 0) return;

    const limelight = limelightRef.current;
    const activeItem = navItemRefs.current[activeIndex];
    
    if (limelight && activeItem) {
      const newLeft = activeItem.offsetLeft + activeItem.offsetWidth / 2 - limelight.offsetWidth / 2;
      limelight.style.left = `${newLeft}px`;

      if (!isReady) {
        setTimeout(() => setIsReady(true), 50);
      }
    }
  }, [activeIndex, isReady, items]);

  if (items.length === 0) {
    return null; 
  }

  const handleItemClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <nav className={`relative inline-flex items-center gap-8 ${className}`}>
      {items.map(({ id, label, href }, index) => (
        <a
          key={id}
          ref={el => (navItemRefs.current[index] = el)}
          href={href}
          className={`relative z-20 cursor-pointer transition-colors ${
            activeIndex === index ? 'text-[#36FF9B]' : 'text-white hover:text-[#36FF9B]'
          } ${linkClassName}`}
          onClick={() => handleItemClick(index)}
        >
          {label}
        </a>
      ))}

      <div 
        ref={limelightRef}
        className={`absolute -top-2 z-10 w-11 h-[3px] rounded-full bg-[#36FF9B] shadow-[0_40px_15px_#36FF9B] ${
          isReady ? 'transition-[left] duration-400 ease-in-out' : ''
        } ${limelightClassName}`}
        style={{ left: '-999px' }}
      >
        <div className="absolute left-[-30%] top-[3px] w-[160%] h-12 [clip-path:polygon(5%_100%,25%_0,75%_0,95%_100%)] bg-gradient-to-b from-[#36FF9B]/30 to-transparent pointer-events-none" />
      </div>
    </nav>
  );
};
