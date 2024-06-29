'use client';

import { createContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextProps {
  theme: Theme;
  toggle: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: 'light',
  toggle: () => {}
});

const getInitialTheme = (): Theme => {
  if (typeof window !== 'undefined') {
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) return savedTheme;

    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    return prefersDark ? 'dark' : 'light';
  }

  return 'light';
};

const getFromLocalStorage = (): Theme => {
  if (typeof window !== 'undefined') {
    const value = localStorage.getItem('theme');
    return (value as Theme) || 'light';
  }
  return 'light';
};

export const ThemeContextProvider = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  // const [theme, setTheme] = useState<Theme>(() => {
  //   return getFromLocalStorage();
  // });

  const toggle = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);

    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
