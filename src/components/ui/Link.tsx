import React from 'react';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const Link: React.FC<LinkProps> = ({ 
  href, 
  children, 
  className = '', 
  onClick 
}) => {
  // Handle internal links
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick(e);
      return;
    }

    // For internal links, prevent default and handle navigation
    if (href.startsWith('/')) {
      e.preventDefault();
      // In a real app, you would use a router here
      window.history.pushState({}, '', href);
      // Dispatch a navigation event that components could listen for
      window.dispatchEvent(new CustomEvent('navigationchange', { detail: href }));
    }
  };

  return (
    <a 
      href={href} 
      className={className}
      onClick={handleClick}
    >
      {children}
    </a>
  );
};