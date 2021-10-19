import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from 'recoil';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import { ProvideAuth } from './Hooks/useAuth';

import Loader from './components/Loader'

const App = lazy(() => import('./App'))

const g = "color:#00000;font-weight:bold;font-size:18px;";
const hello = `%c 👋 Hello, \n\n ✔️ Portfolio. \n ✔️ WebSite. \n ✔️ WebApp. \n 🤙 https://guillaume-morin.fr/`;
console.info(hello, g);

ReactDOM.render(
  <Suspense fallback={<Loader />}>
    <ProvideAuth>
      <RecoilRoot>
          <BrowserRouter>
              <App />
          </BrowserRouter>
      </RecoilRoot>
    </ProvideAuth>
  </Suspense>,
  document.getElementById('root')
);

reportWebVitals();
