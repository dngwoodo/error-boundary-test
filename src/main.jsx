import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClientProvider, QueryClient } from 'react-query';
import { Global } from '@emotion/react';

import App from './App';
import worker from './mocks/browser';
import reset from './styles/reset';
import global from './styles/global';

import 'react-loading-skeleton/dist/skeleton.css';

if (import.meta.env.DEV) {
  worker.start();
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
      retry: 0,
      useErrorBoundary: true,
      refetchInterval: 1000 * 60,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <Global styles={[reset, global]} />
    <App />
  </QueryClientProvider>,
);
