
import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import FlipkartLandingPage from './FlipkartLandingPage'; 
import ProductDetailPage from './ProductDetailPage'; 
// import Header from './Header'; 

const App = () => {
    return (
        <>
            {/* <Header />  */}
            <Routes>
                <Route 
                    path="/" 
                    element={<FlipkartLandingPage />} 
                />
                
                <Route 
                    path="/product/:id" 
                    element={<ProductDetailPage />} 
                />

                <Route path="*" element={<div>404 Page Not Found</div>} />
            </Routes>
        </>
    );
};

export default App;