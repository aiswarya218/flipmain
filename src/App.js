import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import FlipkartLandingPage from './FlipkartLandingPage';
import ProductDetailPage from './ProductDetailPage';
import ProductListings from './ProductListings';
import Header from './Header';
import Footer from './Footer';

const AppContent = () => {
    const location = useLocation();
    // To hide header
    const isLandingPage = location.pathname === '/';

    return (
        <>
            {!isLandingPage && <Header />}
            
            <Routes>
                <Route path="/" element={<FlipkartLandingPage />} />
                <Route path="/mobiles" element={<ProductListings />} />
                <Route path="/product/:id" element={<ProductDetailPage />} />
                <Route path="*" element={<div>404 Page Not Found</div>} />
            </Routes>
            
            <Footer />
        </>
    );
};

const App = () => {
    return <AppContent />;
};

export default App;