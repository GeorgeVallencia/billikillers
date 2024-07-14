import RegisterPage from './pages/RegisterPage';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import HomeMenu from "./components/HomeMenu";
import SignInPage from './pages/SignInPage';
import PackagesPage from './pages/PackagesPage';
import ProductsPage from './pages/ProductsPage';
import ArticlesPage from './pages/ArticlesPage';
import Headline1Page from './pages/HeadLine1';
import { AuthContextProvider } from './context/AuthContext';
import AccountPage from './pages/AccountPage';
import ProtectedRoute from './components/ProtectedRoute';
import PaymentPage from './pages/PaymentPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomeMenu />
      },
      {
        path: '/register',
        element: <RegisterPage />
      },
      {
        path: '/signin',
        element: <SignInPage />
      },
      {
        path: '/packages',
        element: <PackagesPage />
      },
      {
        path: '/products',
        element: <ProductsPage />
      },
      {
        path: '/articles',
        element: <ProtectedRoute><ArticlesPage /></ProtectedRoute>
      },
      {
        path: '/headline1',
        element: <Headline1Page />
      },
      {
        path: '/account',
        element: <AccountPage />
      },
      {
        path: '/payment',
        element: <PaymentPage />
      }
    ],
  }
]);

function App() {
  return(
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  );
}

export default App;