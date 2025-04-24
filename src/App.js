import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="calculator" element={<Calculator />} />
          <Route path="quote" element={<Quote />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
