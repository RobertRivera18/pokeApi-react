import ReactDom from 'react-dom/client';
import {App} from './App';
import './sass/index.scss'

const rootElement=document.querySelector('#root');
const root=ReactDom.createRoot(rootElement);
root.render(
  <App/>
);