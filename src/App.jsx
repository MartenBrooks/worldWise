import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Product from './pages/Product';
import Homepage from './pages/Homepage';
import Pricing from './pages/Pricing';
import PageNotFound from './pages/PageNotFound';
import Login from './pages/Login';
import AppLayout from './pages/AppLayout';
import CityList from './components/CityList';
import CountryList from './components/CountryList';
import City from './components/City.jsx';
import Form from './components/Form.jsx';
import { CitiesProvider } from './contexts/CitiesContext.jsx';
import { AuthProvider } from './contexts/FakeAuthentication';
import ProtectedRoute from './pages/ProtectedRoute';

function App() {
  return (
    <CitiesProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route
              index
              element={<Homepage />}
            />
            <Route
              path="product"
              element={<Product />}
            />
            <Route
              path="pricing"
              element={<Pricing />}
            />
            <Route
              path="login"
              element={<Login />}
            />
            <Route
              path="app"
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route
                index
                element={
                  <Navigate
                    replace
                    to="cities"
                  />
                }
              />
              <Route
                path="cities/:id"
                element={<City />}
              />
              <Route
                path="cities"
                element={<CityList />}
              />
              <Route
                path="countries"
                element={<CountryList />}
              />
              <Route
                path="form"
                element={<Form />}
              />
            </Route>
            <Route
              path="*"
              element={<PageNotFound />}
            />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </CitiesProvider>
  );
}

export default App;
