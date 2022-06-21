import '@testing-library/jest-dom';
// import { server } from './src/mocks/testServer';

jest.mock('./src/appConfig', () => ({
  MODE: 'development',
  DEV: true,
  VITE_API_URL: 'http://localhost:3000/api',
}));

// beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
//
// afterAll(() => server.close());
//
// afterEach(() => server.resetHandlers());
