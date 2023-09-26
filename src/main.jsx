import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import './main.css';


const rootElement = document.getElementById('root');

const app = (

     <ChakraProvider>
      <App />
    </ChakraProvider>

);

ReactDOM.createRoot(rootElement).render(app);







