import { Route, Routes } from 'react-router-dom';
import '../src/scss/app.scss';
import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <div className="wrapper">
      {/* <div className="content">
        <div className="container"> */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
    //   </div>
    // </div>
  );
}

export default App;
