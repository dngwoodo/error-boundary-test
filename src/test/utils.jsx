import {
  render as rtlRender, screen, waitForElementToBeRemoved,
} from '@testing-library/react';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { QueryClient, QueryClientProvider } from 'react-query';

const generateQueryClient = () => new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
      retry: 0,
      useErrorBoundary: true,
    },
  },
});

function AppProviders({ children }) {
  return (
    <QueryClientProvider client={generateQueryClient()}>
      <ErrorBoundary fallback={<div aria-label="error" />}>
        <Suspense fallback={<div aria-label="loading" />}>
          {children}
        </Suspense>
      </ErrorBoundary>
    </QueryClientProvider>
  );
}

async function render(ui, renderOptions) {
  const returnValue = rtlRender(ui, {
    wrapper: AppProviders,
    ...renderOptions,
  });

  await waitForLoadingToFinish();

  return returnValue;
}

const waitForLoadingToFinish = () => waitForElementToBeRemoved(
  () => [
    ...screen.queryAllByLabelText(/loading/i),
    ...screen.queryAllByText(/loading/i),
  ],
  { timeout: 4000 },
);

export * from '@testing-library/react';
export { render, waitForLoadingToFinish };
