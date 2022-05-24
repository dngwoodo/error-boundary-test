import { Suspense } from 'react';

import { ErrorBoundary } from 'react-error-boundary';
import { useQueryErrorResetBoundary } from 'react-query';
import Header from './components/Header';
import Main from './components/Main';
import Loading from './components/Loading';
import Error from './components/Error';

function App() {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <>
      <Header />
      <ErrorBoundary onReset={reset} FallbackComponent={Error}>
        <Suspense fallback={<Loading />}>
          <Main />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

export default App;
