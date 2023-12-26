import { createRoot } from 'react-dom/client';
import App from './App';

const domRootNode = document.querySelector('#root');

if (domRootNode) {
  const root = createRoot(domRootNode);
  root.render(<App />)
} else {
  console.error('Root node is null')
}