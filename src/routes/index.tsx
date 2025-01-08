import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import HomePage from '../components/home/HomePage';
import AboutPage from '../components/about/AboutPage';
import ProductsPage from '../components/products/ProductsPage';
import TermsPage from '../components/terms/TermsPage';
import ContactPage from '../components/contact/ContactPage';
import NotFoundPage from '../components/common/NotFoundPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'about-us',
        element: <AboutPage />
      },
      {
        path: 'products',
        element: <ProductsPage />
      },
      {
        path: 'terms',
        element: <TermsPage />
      },
      {
        path: 'contact',
        element: <ContactPage />
      }
    ]
  }
]); 