import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        // 🌟 FIX: Wrap the sibling elements (<header> and <style>) in a React Fragment (<>...</>) 🌟
        <> 
            <header className="header-container">
                <div className="header-wrapper">
                    
                    {/* 1. Flipkart Logo and Explore Plus Text */}
                    <div className="logo-section">
                        <Link to="/" className="flipkart-logo">
                            <h1>Flipkart</h1> 
                        </Link>
                        <div className="explore-plus">
                            <Link to="/plus">
                                Explore <span className="plus-text">Plus</span>✨
                            </Link>
                        </div>
                    </div>

                    {/* 2. Search Bar */}
                    <div className="search-bar">
                        <div className="search-icon-wrapper">
                            {/* Search Icon SVG */}
                            <svg 
                                width="20" 
                                height="20" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <title>Search Icon</title>
                                <path 
                                    d="M10.5 18C14.6421 18 18 14.6421 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18Z" 
                                    stroke="#717478" 
                                    strokeWidth="1.4" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round"
                                />
                                <path 
                                    d="M16 16L21 21" 
                                    stroke="#717478" 
                                    strokeWidth="1.4" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                        <input 
                            type="text" 
                            placeholder="Search for Products, Brands and More" 
                            aria-label="Search for Products, Brands and More"
                        />
                    </div>

                    {/* 3. Navigation Links (Login, Seller, Cart) */}
                    <nav className="header-nav">
                        <div className="nav-item login-dropdown">
                            <Link to="/login" className="login-btn">Login</Link>
                        </div>
                        <div className="nav-item">
                            <Link to="/sell" className="seller-link">Become a Seller</Link>
                        </div>
                        <div className="nav-item">
                            <Link to="/cart" className="cart-link">
                                🛒 Cart
                            </Link>
                        </div>
                    </nav>
                </div>
            </header>
            
            {/* The style tag must contain a valid JavaScript string, not CSS comments/syntax directly */}
            <style>
              {`
                /* --- Global Header Container --- */
                .header-container {
                    background-color: #2874f0; /* Flipkart Blue */
                    padding: 10px 0;
                    position: sticky;
                    top: 0;
                    z-index: 100;
                    box-shadow: 0 1px 2px 0 rgba(0,0,0,.2);
                }
                
                .header-wrapper {
                    max-width: 1400px;
                    margin: 0 auto;
                    padding: 0 16px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    height: 40px;
                }
                
                /* --- 1. Logo Section --- */
                .logo-section {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;
                    margin-right: 16px;
                }
                .flipkart-logo h1 {
                    color: #fff;
                    font-size: 24px;
                    font-style: italic;
                    font-weight: 700;
                    margin: 0;
                }
                .flipkart-logo {
                    text-decoration: none;
                }
                
                .explore-plus {
                    font-size: 11px;
                    margin-top: -5px;
                }
                .explore-plus a {
                    color: #fff;
                    text-decoration: none;
                }
                .plus-text {
                    color: #ffe500;
                    font-style: italic;
                    font-weight: 500;
                }
                
                /* --- 2. Search Bar (Flexbox) --- */
                .search-bar {
                    display: flex; 
                    align-items: center; 
                    flex-grow: 1;
                    max-width: 560px;
                    background-color: #f0f5ff;
                    border-radius: 8px;
                    height: 40px; 
                    padding: 0 0 0 16px;
                    margin: 0 20px;
                }
                .search-icon-wrapper {
                    display: flex;
                    align-items: center;
                    cursor: pointer;
                    width: 20px;
                    height: 20px;
                }
                .search-bar input {
                    flex-grow: 1; 
                    padding: 8px 16px 8px 12px; 
                    border: none; 
                    border-radius: 0 8px 8px 0;
                    font-size: 14px;
                    background-color: transparent; 
                    outline: none;
                    line-height: 24px;
                    color: #555;
                }
                .search-bar input::placeholder {
                    color: #717478;
                }
                
                /* --- 3. Navigation Links --- */
                .header-nav {
                    display: flex;
                    align-items: center;
                    gap: 30px;
                    margin-left: 20px;
                }
                .nav-item a {
                    color: #fff;
                    text-decoration: none;
                    font-weight: 500;
                    font-size: 16px;
                    padding: 8px 0;
                }
                
                .login-btn {
                    white-space: nowrap; 
                }
              `}
            </style>
        </>
    );
};

export default Header;