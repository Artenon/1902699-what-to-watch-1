import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const data : {
  name: string,
  genre: string,
  year: number
} = {
  name: 'The Grand Budapest Hotel',
  genre: 'Drama',
  year: 2014
};

root.render(
  <React.StrictMode>
    <App data={data} />
  </React.StrictMode>,
);
