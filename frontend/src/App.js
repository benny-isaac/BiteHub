import React, { useEffect } from 'react';
import AppRoutes from './AppRoutes';
import Header from './components/Header/Header';
import Loading from './components/Loading/Loading';
import { useLoading } from './hooks/useLoading';
import { setLoadingInterceptor } from './interceptors/loadingInterceptor';
import { useTheme } from './contexts/ThemeContext';  // Import the context

function App() {
  const { showLoading, hideLoading } = useLoading();
  const { theme, toggleTheme } = useTheme(); // Consume the theme context

  useEffect(() => {
    setLoadingInterceptor({ showLoading, hideLoading });
  }, [showLoading, hideLoading]);

  return (
    <>
      <Loading />
      <Header toggleTheme={toggleTheme} theme={theme} /> {/* Pass toggleTheme and theme to Header */}
      <AppRoutes />
    </>
  );
}

export default App;
