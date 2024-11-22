import LandingPage from '@/pages/landing-page';
import { getProductQuery } from '@/services/product-service';
import { getUserQuery } from '@/services/user-service';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const { getUser, userLoading } = getUserQuery();
  const { getProduct, productLoading } = getProductQuery();

  useEffect(() => {
    const fetchData = async () => {
      const user = await getUser();
      const product = await getProduct();

      console.log(user, product);
    };

    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
