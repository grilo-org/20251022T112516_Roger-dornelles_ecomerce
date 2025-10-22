import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { UserContextProvider } from './context/userContext';
import { AddCartProvider } from './context/addCartContext';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <UserContextProvider>
          <AddCartProvider>
            <App />
          </AddCartProvider>
        </UserContextProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
