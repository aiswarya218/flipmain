import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <> 
            <header className="header-container">
                <div className="header-wrapper">
                    
                    <div className="logo-section">
                        <Link to="/" className="flipkart-logo">
                            <img width="75" src="//static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="Flipkart" title="Flipkart" className="W5mR4e"></img>
                        </Link>
                        <div className="explore-plus">
                            <Link to="/plus">
                                Explore <span className="plus-text">Plus</span>
                                <img width="10" src="//static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png" />
                            </Link>
                        </div>
                    </div>

                    <div className="search-bar">
                        <div className="search-icon-wrapper">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <title>Search Icon</title>
                                <path d="M10.5 18C14.6421 18 18 14.6421 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18Z" stroke="#717478" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M16 16L21 21" stroke="#717478" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <input type="text" placeholder="Search for Products, Brands and More" aria-label="Search for Products, Brands and More"/>
                    </div>

                    <nav className="header-nav">
                        <div className="nav-item login-dropdown">
                            <Link to="/login" className="login-btn">Login</Link>
                        </div>
                        <div className="nav-item">
                            <Link to="/sell" className="seller-link">Become a Seller</Link>
                        </div>
                        <div className="nav-item">
                            <Link to="/cart" className="cart-link">
                                <svg class="GAbRIN" width="14" height="14" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path class="cziJ98" d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86" fill="#fff"></path></svg>
                                <span>Cart</span>
                            </Link>
                        </div>
                    </nav>
                </div>
            </header>
            
            <style>
              {`
                .header-container {
                    background-color: #2874f0; 
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