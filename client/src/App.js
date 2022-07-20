import React, { lazy, Suspense, } from 'react'
import SimpleLoader from './components/loader/simpleLoader';
import { AuthProvider } from './utility/context/authContext';

function App() {
  const LazyRoute = lazy(() => import('./router/configRoutes'))

  return (
    <>
      <Suspense fallback={<SimpleLoader />}>
        <AuthProvider>
          <LazyRoute />
        </AuthProvider>
      </Suspense>
    </>
  );
}

export default App;
