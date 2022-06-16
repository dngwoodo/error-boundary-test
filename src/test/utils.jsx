import {
  render as rtlRender, screen, waitForElementToBeRemoved,
} from '@testing-library/react';

import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient({
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
    <QueryClientProvider client={queryClient}>
      {children}
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
