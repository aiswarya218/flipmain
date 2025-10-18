import React, { useState, useEffect } from 'react';
import { AiFillAlipaySquare, AiFillCheckSquare, AiFillSketchCircle, AiFillSketchSquare } from 'react-icons/ai';
import { FcEmptyFilter } from 'react-icons/fc';
import { GiDew } from 'react-icons/gi';
import { LiaAdSolid } from 'react-icons/lia';
import { RiFeedbackFill } from 'react-icons/ri';
import { Si2K, SiD, SiD3Dotjs, SiDocsdotrs, SiK3S, SiKakao, SiKasasmart } from 'react-icons/si';
import { Link, useNavigate } from 'react-router-dom';

const appStyles = `
    :root {
        --primary-blue: #2874f0;
        --background-gray: #f1f3f6;
        --dark-text: #172337;
        --light-text: #fff;
        --success-green: #388e3c;
    }

    body {
        font-family: 'Inter', sans-serif;
        margin: 0;  
        padding: 0;
        background-color: #f1f3f6;
        min-height: 100vh; 
    }

    .app-container {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    .content-area {
        flex-grow: 1;
        max-width: 1400px;
        margin: 0 auto;
        width: 100%;
    }

    /* Header */
    .header {
        position: sticky;
        top: 0;
        z-index: 1000;
        background-color: #fff;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        padding: 12px 16px;
    }
    
    .header-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 1400px;
        margin: 0 auto;
    }

    .logo-section h1 {
        font-size: 24px;
        font-weight: 700;
        color: #2874f0;
        margin: 0;
        line-height: 1;
    }
    .logo-section small {
        font-size: 10px;
        font-style: italic;
        color: #878787;
        display: block;
    }
    
    .search-bar {
    display: flex;
    align-items: center; 
    background-color: #f0f5ff; 
    border-radius: 8px; 
    padding: 0 0 0 16px; 
    height: 40px; 
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.1);
    flex-grow: 1;
    max-width: 600px;
    margin: 0 32px;
    }

.search-bar .search-icon-wrapper {
  justify-content: flex-end;
  height: 40px;
  border-radius: 2px;
  cursor: pointer;
  padding: 8px 8px 8px 12px;     
  background-color: transparent;
}
   .search-bar input {
    flex-grow: 1; 
    width: auto; 
    padding: 8px 16px 8px 12px; 
    border: none; 
    border-radius: 0 8px 8px 0;
    font-size: 14px;
    background-color: transparent;                  
    outline: none;
    line-height: 24px; 
    color: #717478; 
    }
.search-content {
  position: relative;
  display: inline-block;
  width: 100%;
  background-color: transparent;
  }
  .search-icon-wrapper input {
  border: 0;
  outline: 0 none;
  font-size: 17px;
  margin-bottom: 15px;
  background-color: transparent;
  }
    .nav-links {
        display: flex;
        align-items: center;
        gap: 16px;
    }

    .nav-link {
        display: none;
        align-items: center;
        color: #172337;
        text-decoration: none;
        font-weight: 500;
        font-size: 14px;
        cursor: pointer;
        transition: color 0.2s;
    }
    .nav-link:hover {
        color: #2874f0;
    }
    .nav-link-cart, .nav-link-login {
        display: flex;
    }
    .nav-link svg {
        width: 20px;
        height: 20px;
        margin-right: 4px;
    }

    /* Category Menu */
    .category-menu {
        background-color: #fff;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
        overflow-x: scroll;
        white-space: nowrap;
        padding: 12px 0;
    }
    .category-menu-list {
        display: flex;
        justify-content: flex-start;
        gap: 52px;
        padding: 0 16px;
        max-width: 1400px;
        margin: 0 auto;
    }
    
.category-item {
    display: inline-flex;
    flex-direction: column;
    align-items: center; 
    text-align: center; 
    cursor: pointer;
    padding: 8px 4px;
    transition: color 0.2s, transform 0.3s;
    flex-shrink: 0;
    width: 80px;
    text-decoration: none;
    color: inherit;
}

.category-image {
    width: 64px;
    height: 64px;
    object-fit: contain;

    display: block; 
    margin: 0 auto; 
    margin-bottom: 4px; 
}

.category-name {
    font-size: 14px;
    margin-top: 0; 
    white-space: normal;
    line-height: 1.2;
}

    /* Main Banner */
    .main-banner-container {
        position: relative;
        max-width: 1400px;
        margin: 12px auto;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }
    .main-banner-container img {
        width: 100%;
        display: block;
        object-fit: cover;
    }
 /* Banner Slider */
.slider-wrapper {
    position: relative;
    overflow: hidden;
    width: 100%;
}

.slide-track {
    display: flex;
    transition: transform 0.5s ease-in-out;
}

.slide-item {
    min-width: 100%; 
}
.slide-item img {
    width: 100%;
    display: block;
    object-fit: cover;
}

/* Navigation Arrows */
.slider-nav-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(255, 255, 255, 0.9);
    border: none;
    padding: 15px 10px;
    cursor: pointer;
    z-index: 5;
    font-size: 24px;
    color: #111;
    height: 106px; 
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
}
.prev-button {
    left: 0;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
}
.next-button {
    right: 0;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
}

/* Pagination */
.pagination-dots {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 8px;
    z-index: 5;
}

.dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #ccc;
    cursor: pointer;
    transition: background-color 0.3s, width 0.3s;
}
.dot.active {
    background-color: #333; 
    width: 15px; 
    border-radius: 4px;
}

 /* Ad Card */
    .ad-grid-container {
        padding: 0 16px;
        margin-bottom: 12px;
    }

    .ad-grid {
        display: grid;
        gap: 12px;
        grid-template-columns: 1fr;
    }

/* Base Card */
.ad-card {
    background-color: #f0f0f0; 
    overflow: hidden; 
    position: relative;
    text-decoration: none;
    color: inherit;
    display: flex; 
    align-items: center; 
}

.top-ad-card {
    aspect-ratio: 16 / 9; 
    justify-content: space-between; 
    padding: 16px 0 16px 16px; 
}

.ad-content-wrapper {
    flex-shrink: 0; 
    z-index: 10;
    max-width: 50%; 
}
.top-ad-content {
    align-self: flex-start;
}

.ad-card-image {
    width: 100%; 
    height: 100%;
    display: block;
    object-fit: cover; 
    position: absolute; 
    top: 0;
    left: 0;
    z-index: 1; 
}

.top-ad-card .ad-card-image {
    width: auto; 
    height: 100%;
    right: 0;
    left: auto;
}

.bottom-ad-card .ad-card-image {
    position: static; 
    width: 100%; 
    height: 100%;
}

.bottom-ad-card .ad-content-wrapper {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    max-width: 100%;
    z-index: 10;
}
    .ad-color-purple {
        background-image: linear-gradient(to right, #6c5ce7, #8e44ad);
        color: var(--light-text);
    }
    .ad-color-light {
        background-color: #f8f8f8;
        color: #172337;
    }
    .ad-color-red {
        background-color: #c0392b;
        color: #fff;
    }
    .ad-gradient-orange {
        background-image: linear-gradient(to right, #ff6b00, #ff8c00);
        color: #fff;
    }
    
    .diwali-ad::before {
        content: "";
        position: absolute;
        inset: 0;
        background: url(https://rukminim2.flixcart.com/flap/128/128/image/4a26f6d0f8d169f4.jpg?q=100) no-repeat right center;
        background-size: contain;
        opacity: 0.1;
        z-index: 0;
    }
    .diwali-ad .ad-content-wrapper {
        position: relative;
        z-index: 2;
    }

    /* Deals */
    .deals-section {
        background-color: #fff;
        padding: 20px 16px;
        margin: 12px 16px 24px 16px;
        max-width: 1400px;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
    .deals-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #eee;
        padding-bottom: 16px;
        margin-bottom: 16px;
    }
    .deals-header h2 {
        font-size: 20px;
        font-weight: 600;
        margin: 0;
    }
    .view-all-btn {
        background-color: #2874f0;
        color: #fff;
        padding: 8px 16px;
        border: none;
        border-radius: 4px;
        font-weight: 500;
        cursor: pointer;
        transition: background-color 0.2s, box-shadow 0.2s;
    }
    .view-all-btn:hover {
        background-color: #1a58a7;
    }
    .deals-list {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 16px;
    }
    .deal-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 16px 8px;
        border-radius: 6px;
        background-color: var(--light-text);
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
        transition: box-shadow 0.2s, transform 0.2s;
        text-decoration: none;
        color: inherit;
    }
    .deal-image-container:hover {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        transform: translateY(-2px);
    }
    .deal-image-container {
        width: 100px;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 10px;
    }
    .deal-image {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
    }
    .deal-name {
        font-size: 14px;
        font-weight: 600;
        color: #172337;
        margin: 0 0 4px 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 100%;
        line-height: 20px;
        letter-spacing: -.01px;
        font-family: inter_regular,fallback-inter_regular,Arial,sans-serif;
    }
.deal-price {
  border-width: 0px;
  box-sizing: border-box;
  display: inline;
  white-space: nowrap;
  overflow-wrap: normal;   
  text-align: center;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
}
    .deal-info {
        font-size: 11px;
        color: #878787;
        margin-top: 2px;
    }
    .view-more-placeholder {
        display: none;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: #f5f5f5;
        border-radius: 6px;
        text-align: center;
    }

/* Directory Section */
.directory-section {
    padding: 20px 0;
    margin: 20px auto;
    max-width: 1400px;
    border-radius: 0;
    box-shadow: none;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
}

.directory-container {
   color: #666;
  background-color: #f5f5f5;
  margin: 0 auto;
  text-align: left;
  padding: 25px;
  line-height: 1.5;
}

.main-directory-heading {
    color: #565656;
    font-family: inter_semi_bold,fallback-inter_semi_bold,Arial,sans-serif;
    margin-top: 14px;
    padding: 14px 0;
    font-size: 16px;
    font-weight: bold;     
}
.directory-column {
    display: flex; 
    flex-wrap: wrap; 
    align-items: baseline; 
    margin: 4px 0;
    line-height: 1.5;
    border-bottom: 1px solid #f0f0f0;
}
.directory-column:last-child {
    border-bottom: none;
    padding-bottom: 0;
}

.directory-column span {
    color: #565656;
    text-transform: uppercase;
    font-size: 14px;
    text-transform: uppercase;
    margin-right: 4px; 
    margin-bottom: 0; 
    flex-shrink: 0; 
}

.directory-column a {
    color: #565656;
    padding: 0 5px;
    border-right: 1px solid #333;
    font-size: 12px;
    text-decoration: none;
}

.directory-column .see-more-link {
    color: var(--primary-blue);
    font-weight: 500;
}

.refresh-button-container {
    text-align: center;
    padding: 20px 0;
    background-color: #f1f3f6;
}
.refresh-button {
    background-color: var(--primary-blue);
    color: var(--light-text);
    padding: 10px 30px;
    border: none;
    border-radius: 4px;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.2s;
    font-size: 14px;
}
.refresh-button:hover {
    background-color: #1a58a7;
}

/* Footer */
.main-footer-container {
  background-color: #212121; 
  color: #fff;
  padding: 30px 0 10px;
  margin-top: 20px;
  position: relative; 
}

.footer-links-top {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 0 20px 20px; 
}

.footer-column {
  display: flex;
  flex-direction: column;
  width: 12%; 
}

.footer-column h4, .footer-address h4 {
  color: #878787;
  font-size: 12px;
  margin-bottom: 12px;
}

.footer-column a {
  font-family: inter_semi_bold,fallback-inter_semi_bold,Arial,sans-serif;
  font-size: 12px;
  color: #fff;
  display: block;
  line-height: 18px;
  text-decoration: none;
  font-weight: bold;
}

.footer-column a:hover {
  text-decoration: underline;
}

.footer-address {
  width: 25%;
  border-left: 1px solid #3d4d62;
  padding-left: 20px;
}

.footer-address p {
  font-size: 12px;
  line-height: 18px;
  margin: 5px 0 15px;
  color: #fff;
}

.footer-address a {
  color: #2874f0; 
  text-decoration: none;
}

.social-heading {
  margin-top: 15px !important;
}

.social-icons span {
  font-size: 20px;
  margin-right: 15px;
  cursor: pointer;
}

.registered-address {
  border-left: none; 
}

.footer-links-bottom {
  border-top: 1px solid #454d5e;
  padding: 25px 0;
  margin-top: 40px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.footer-tools {
  display: flex;
  align-items: center;
}

.footer-tools a {
  color: #fff;
  text-decoration: none;
  font-size: 13px;
  margin-right: 40px;
}

.footer-tools a:hover {
  color: #f0f0f0;
}

.footer-copyright {
  font-size: 13px;
  color: #fff;
}

.footer-payments span {
  font-size: 18px; 
  margin-left: 10px; 
  opacity: 0.7;
}
    @media (min-width: 600px) {
        .deals-header h2 {
            font-size: 24px;
        }
        .ad-grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }
    
    @media (min-width: 768px) {
        .search-bar {
            display: flex;
        }
        .nav-links {
            gap: 24px;
        }
        .nav-link-seller {
            display: flex;
        }
        .category-menu-list {
            justify-content: center;
            padding: 0;
        }
        .deals-list {
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
        }
        .footer-content {
            grid-template-columns: repeat(6, 1fr);
        }
        .footer-mail {
            grid-column: span 3;
            border-left: 1px solid #333;
            padding-left: 20px;
        }
    }

    @media (min-width: 1024px) {
        .ad-grid {
            grid-template-columns: repeat(3, 1fr);
        }
        .deals-section {
            padding: 30px;
            margin: 12px auto 24px auto;
        }
        .deals-list {
            grid-template-columns: repeat(6, 1fr);
            gap: 24px;
        }
        .view-more-placeholder {
            display: flex;
        }
   .directory-container {
        flex-direction: column;
        gap: 0;
    }
    .directory-column {
        padding: 10px 0;
    }
  }
}
`;

const categories = [
    { name: "Minutes", img: "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/3dbe4c89fbf0003d.png?q=100" },
    { name: 'Mobiles & Tablets', img: "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/cd6aca4f61e8ea95.png?q=100" },
    { name: 'TVs & Appliances', img: "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/9c64dfa667885ca9.png?q=100" },
    { name: 'Electronics', img: "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/4d6b13d5a0e0724a.png?q=100" },
    { name: 'Fashion', img: "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/ec2982e5564fe07c.png?q=100" },
    { name: 'Home & Kitchen', img: "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/febcb9896245caf4.png?q=100" },
    { name: 'Beauty & toys', img: "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/3d7144345bbcf2e4.png?q=100" },
    { name: 'Furniture', img: "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/cddd92e134ba3ea9.png?q=100" },
    { name: 'Flight Bookings', img: "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/d9eea6cd0e7b68bb.png?q=100" },
    { name: 'Grocery', img: "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/2ebb95ec20eae8f1.png?q=100" },
];

const smartphoneDeals = [
    { id: 1, name: "OPPO K13X 5G", price: "From ₹9,499*", img: "https://rukminim2.flixcart.com/image/120/120/xif0q/mobile/h/q/k/-original-imahfw4vamrf5xhf.jpeg?q=90" },
    { id: 2, name: "Moto Edge 60 Pro 5G", price: "From ₹24,999*", img: "https://rukminim2.flixcart.com/image/96/96/xif0q/mobile/y/w/k/-original-imahfvpcn3j8qwzk.jpeg?q=90" },
    { id: 3, name: "realme P4 5G", price: "From ₹14,999*", img: "https://rukminim2.flixcart.com/image/96/96/xif0q/mobile/r/4/p/-original-imahf47e6gzt3ggw.jpeg?q=90" },
    { id: 4, name: "OPPO K13 5G", price: "From ₹14,999*", img: "https://rukminim2.flixcart.com/image/96/96/xif0q/mobile/f/k/e/-original-imahbfd4zqn9zazz.jpeg?q=90" },
    { id: 5, name: "Moto G96 5G", price: "Just ₹14,999*", img: "https://rukminim2.flixcart.com/image/96/96/xif0q/mobile/l/x/1/-original-imahdv5ttyhhyhg9.jpeg?q=90" },
    { id: 6, name: "Samsung GalaxyA35 5G", price: "Just ₹17,999*", img: "https://rukminim2.flixcart.com/image/96/96/xif0q/mobile/o/j/d/-original-imahgy25zuwqzzye.jpeg?q=90" },
];

const topAds = [
    {
        img: "https://rukminim2.flixcart.com/fk-p-flap/450/280/image/12a414b8ec3e1de1.jpeg?q=90",
        imgStyle: "max-width: 100%;"
    },
    {
        img: "https://rukminim2.flixcart.com/fk-p-flap/450/280/image/5dfd98a66c5f7db9.jpeg?q=90",
        imgStyle: "max-width: 100%;"
    },
    {
        img: "https://rukminim2.flixcart.com/fk-p-flap/450/280/image/0ad8b283a1b68993.jpeg?q=90",
        imgStyle: "max-width: 100%;"
    }
];

const bottomAds = [
    {
        img: "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/b8067af3917b7d61.jpg?q=90",
        specialClass: "diwali-ad"
    },
    {
        img: "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/b8fba73c7e59df29.jpg?q=90",
        specialClass: "ad-image-right"
    },
    {
        img: "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/497425dffc1f158d.jpg?q=90",
        specialClass: "ad-image-right"
    }
];

const directoryData = {
'MOST SEARCHED FOR ON FLIPKART:': [
        'Big Bang Diwali Sale', 'Dhanteras Offers', 'Bhai Dooj Sale', 'iPhone 17', 'iPhone 17 Pro Max', 'Google Pixel 10', 'Flipkart Axis Bank Super Elite Credit card', 'Mobile Phones', 'Grievance Redressal',
    ],
    'MOBILES': [
        'Infinix SMART 10', 'OPPO Reno 14 Pro', 'Motorola G64 5G', 'OPPO Reno 12', 'Motorola G45 5G', 'Motorola Edge 50 Fusion', 'Realme 12+ 5G', 'Smart 8', 'Vivo X30', 'Vivo Y30', 'Samsung Galaxy S24 5G', 'Infinix HOT 30i', 'Realme 10 Pro 5G', 'Nokia Mobile', 'Samsung Mobile', 'Oppo Mobile', 'Vivo Mobile', 'Apple Mobile',
    ],
    'CAMERA': [
        'GoPro Action Camera', 'Nikon Camera', 'Canon Camera', 'Sony Camera', 'Canon DSLR', 'Nikon DSLR',
    ],
    'LAPTOPS': [
        'Asus ROG Ally', 'MacBook Pro M2', 'Premium Laptop', 'ASUS ROG Strix SCAR 16 (2023)', 'Core i9 13th Gen', 'ASUS ROG Zephyrus M16 (2023)', 'Core i3 13th Gen', 'ASUS Zenbook 14 OLED (2022)', 'Realme Book Prime Core i5 11th Gen', 'Microsoft Surface Go Pentium 128GB', 'Apple Laptops', 'Acer Laptops', 'Lenovo Laptops', 'Dell Laptops', 'Asus Laptops', 'HP Laptops', 'MSI Laptops', 'Samsung Laptops', 'InBook Y1 Plus', 'SAMSUNG Galaxy Book13', '12th Gen Intel Core Laptops',
    ],
    'TVS': [
        'LG TV', 'Sony TV', 'Samsung TV', 'TCL TV', 'Mi TV', 'Panasonic TV', 'OnePlus TVs', 'Iffalcon TV', '32 Inch TV', '43 Inch TV', '50 Inch TV', '55 Inch TV', '65 Inch TV', '75 Inch TV', 'LED TV', 'OLED TV', 'QLED TV',
    ],
    'LARGE APPLIANCES': [
        'Electric Cookers', 'Air Fryer', 'Sandwich Maker', 'Electric Jug/Heater', 'Travel Kettles', 'Induction Cooktops', 'Inverters / stabilizer', 'Wet Grinders', 'French Press', 'Milk/Coffee Frother', 'Chimneys', 'Microwave Ovens', 'Vacuum Cleaners', 'Fan',
    ],
    'CLOTHING': [
        'Sarees', 'Men\'s Jeans', 'Lehenga', 'Tops', 'Men\'s Footwear', 'Shacket', 'Men\'s Jackets', 'Designer blouses', 'Women\'s Haldi Dress', 'Women\'s Mehndi Dress', 'Lavender Saree', 'Blouse designs', 'Shirts', 'Cotton saree blouse designs', 'T-shirts', 'Men\'s Blazer', 'Dresses', 'One pieces', 'Readymade saree', 'Groom wedding sherwani', 'Designer Salwar Suits', 'Bra', 'Track Pant', 'Men\'s Kurta', 'Parry Dresses', 'Palazzo Suits', 'Anarkali', 'Gowns', 'Cut out dress', 'Salwar Suits', 'Kurtis', 'Designer Sarees', 'Leggings', 'Shorts', 'Georgette Sarees', 'Ethnic Wear', 'Blouse back design', 'Jodhpur pants',
    ],
    'FOOTWEAR': [
        'Adidas Shoes', 'Reebok Shoes', 'Nike Shoes', 'Puma Shoes', 'Boots', 'Bata Shoes', 'Crocs', 'Woodland Shoes', 'Skechers Shoes', 'Sneakers', 'Women\'s Boots', 'Sports Shoes', 'Loafers', 'Sandals', 'Lotto Sports Shoes', 'Casual Shoes', 'Women\'s Skechers Shoes', 'Adidas Sports Shoes', 'Formal Shoes', 'School Shoes',
    ],
    'GROCERIES': [
        'PhonePe Grocery Voucher', 'Hand Wash', 'Soap', 'Cashew Nuts', 'Sunflower Oil', 'Eggs', 'Toilet Cleaner', 'Harpic Toilet Cleaner', 'Dettol Soap', 'Mustard Oil', 'Biscuits', 'Cheese', 'Patanjali Atta', 'Fortune Oil', 'Aashirvaad Atta', 'Tea',
    ],
    'BEST SELLING ON FLIPKART': [
        'Best Gas Geyser', 'Kitchen Geyser', 'Nutri Blenders', 'Portable Air Cooler', 'Best Air Cooler', 'Bags', 'Women\'s Watch', 'Hitachi Refrigerator 3 Door', 'Books', 'Candles', 'Helmets', 'Wall Clocks', 'Baby Food/Chocolates', 'Calculators', 'Lipsticks', 'Mask', 'Bangles', 'Vertu UPS', 'Fastrack Watches', 'Wallets', 'Cold Coins', 'Realme Pad Mini', 'coewk SW2 Smartwatch', 'Mivi Duopods A350', 'Speaker Cleaner',
    ],
    'FURNITURE': [
        'Furniture', 'Beds', 'Dining sets', 'Wardrobes', 'TV Units', 'Tables', 'Chairs', 'Shelves', 'Bean Bags', 'Office Chairs', 'Computer Table', 'Office Tables', 'Red Sofa', 'Wakefit Beds', 'White Sofa', 'Wakefit Mattress', 'Green Sofa', 'Black Sofa', 'Brown Sofa',
    ],
    'BGMH:': [
        'Car Accessories', 'Bike Accessories', 'Car Dashcams', 'Vehicle Battery', 'Engine Oil', 'Car Air Fresheners', 'Car Cleaning Supplies', 'Homeopathy', 'Cricket', 'Cycles', 'Footballs', 'Treadmills', 'Fitness Accessories', 'Online Guitar', 'Books Store', 'Musical Instrument Store', 'Energy Drinks', 'Milk Drink Mixes', 'Protein Supplements',
    ],
};

const Header = () => {
    const navigate = useNavigate();
    // Handles search form submission
    const handleSearchSubmit = (event) => {
        event.preventDefault(); 
        const searchTerm = event.target.elements.search.value.toLowerCase();
        
        if (searchTerm.includes('mobile')) {
            navigate('/mobiles'); 
        } else {
             navigate('/mobiles'); 
        }
    };
    
    return (
        <header className="header">
            <div className="header-content">
                <div className="logo-section">
                    <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" width="160" height="40" title="Flipkart" alt="Flipkart Logo"></img>
                </div>

                <form className="search-bar" onSubmit={handleSearchSubmit}>
                    <div className="search-icon-wrapper">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <title>Search Icon</title>
                            <path d="M10.5 18C14.6421 18 18 14.6421 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18Z" stroke="#717478" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M16 16L21 21" stroke="#717478" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <input type="text" placeholder="Search for Products, Brands and More" name="search" />
                </form>
                
                <nav className="nav-links">
                    <a href="#" className="nav-link nav-link-login">
                       <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg" alt="Login" width="24" height="24"></img>
                        <span>Login</span>
                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTEiIHZpZXdCb3gZz4K" alt="Chevron" width="12" height="12"></img> 
                    </a>
                    <a href="#" className="nav-link nav-link-cart">
                     <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg" alt="Cart" width="24" height="24"></img>
                        <span>Cart</span>
                    </a>
                    <a href="#" className="nav-link nav-link-seller">
                        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/Store-9eeae2.svg" alt="Become a Seller"></img>
                        <span>Become a Seller</span>
                    </a>
                    <a href="#" className="nav-link nav-link-seller">
                     <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_3verticalDots-ea7819.svg" width="24" height="24" alt="Dropdown with more help links"></img>
                    </a>
                </nav>
            </div>
        </header>
    );
};

const CategoryMenu = () => (
    <nav className="category-menu">
        <div className="category-menu-list">
            {categories.map((cat, index) => (
                <a key={index} href="#" className="category-item">
                    <img src={cat.img} alt={cat.name} className="category-image" onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/64x64/CCCCCC/333333?text=Cat'; }}/>
                    <p className="category-name">{cat.name}</p>
                </a>
            ))}
        </div>
    </nav>
);

const bannerImages = [
    {
        id: 1,
        src: "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/619ee07223539121.jpeg?q=90",
        alt: "CMF Phone Big Bang Diwali Deal"
    },
    {
        id: 2,
        src: "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/be6cd4b49d0c13f6.jpeg?q=90",
        alt: "Mobile Sale"
    },
    {
        id: 3,
        src: "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/1c5655da10ed4f88.jpg?q=90",
        alt: "Flight Offers"
    },
];

const MainBanner = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const totalSlides = bannerImages.length;
    const goToNext = () => {
        setActiveIndex((prevIndex) => 
            prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
        );
    };

    useEffect(() => {
        const intervalId = setInterval(goToNext, 4000); 
        return () => {
            clearInterval(intervalId);
        };
    }, [totalSlides]); 

    const goToPrev = () => {
        setActiveIndex((prevIndex) => 
            prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
        );
    };

    return (
        <div className="main-banner-container">
            <div className="slider-wrapper">
                <div 
                    className="slide-track"
                    style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                >
                    {bannerImages.map((image) => (
                        <div className="slide-item" key={image.id}>
                            <img src={image.src} alt={image.alt} onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/1600x270/CCCCCC/333333?text=SALE+BANNER'; }}/>
                        </div>
                    ))}
                </div>
                <button className="slider-nav-button prev-button" onClick={goToPrev}>
                    &lt;
                </button>
                <button className="slider-nav-button next-button" onClick={goToNext}>
                    &gt;
                </button>

                <div className="pagination-dots">
                    {bannerImages.map((_, index) => (
                        <span key={index} className={`dot ${index === activeIndex ? 'active' : ''}`}onClick={() => setActiveIndex(index)} />
                    ))}
                </div>
            </div>
        </div>
    );
};

const AdCard = ({ ad, type }) => {
    const isTopAd = type === 'top';
    const wrapperClass = isTopAd ? 'top-ad-card' : `bottom-ad-card ${ad.specialClass || ''}`;
    const infoBg = ad.colorClass === 'ad-color-light' ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.2)';

    return (
        <a href="#" className={`ad-card ${wrapperClass} ${ad.colorClass}`}>
            <div className={`ad-content-wrapper ${isTopAd ? 'top-ad-content' : ''}`}>
                <p style={{ fontSize: '11px', fontWeight: 400, opacity: 0.8 }}>{ad.title}</p>
                <h3 style={{ marginTop: isTopAd ? '0' : '4px' }}>{ad.subtitle}</h3>
                {ad.info && (
                    <p style={{
                        fontSize: '11px',
                        marginTop: '5px',
                        fontWeight: 400,
                        background: infoBg,
                        display: 'inline-block',
                        padding: '2px 6px',
                        borderRadius: '4px',
                        color: ad.colorClass === 'ad-color-light' ? 'var(--dark-text)' : 'var(--light-text)'
                    }}>
                        {ad.info}
                    </p>
                )}
                <p className="price">{ad.price}</p>
            </div>
            <img src={ad.img} alt={ad.title} onError={(e) => { 
                    e.target.onerror = null; 
                    const text = isTopAd ? 'AD' : 'AD';
                    const color = ad.colorClass.includes('light') ? '333' : 'FFF';
                    e.target.src = `https://placehold.co/${isTopAd ? '150x250' : '150x150'}/${color}/${color}?text=${text}`; 
                }}
            />
        </a>
    );
};

const TopAdGrid = () => (
    <section className="ad-grid-container">
        <div className="ad-grid top-ad-grid">
            {topAds.map((ad, index) => (
                <AdCard key={index} ad={ad} type="top" />
            ))}
        </div>
    </section>
);

const BottomAdGrid = () => (
    <section className="ad-grid-container">
        <div className="ad-grid bottom-ad-grid">
            {bottomAds.map((ad, index) => (
                <AdCard key={index} ad={ad} type="bottom" />
            ))}
        </div>
    </section>
);

const DealCard = ({ deal }) => (
    <Link to={`/product/${deal.id}`} className="deal-card"> 
        <div className="deal-image-container">
            <img src={deal.img} alt={deal.name} className="deal-image" onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/100x100/CCCCCC/333333?text=Deal'; }} />
        </div>
        <p className="deal-name" title={deal.name}>{deal.name}</p>
        <p className="deal-price">{deal.price}</p>
        <p className="deal-info"></p> 
    </Link>
);

const DealsSection = () => {
    const dealsToShow = smartphoneDeals.slice(0, 5);

    return (
        <section className="deals-section">
            <div className="deals-header">
                <h2>Best deals on smartphones</h2>
                <button className="view-all-btn">VIEW ALL</button>
            </div>
            <div className="deals-list">
                {dealsToShow.map((deal) => (
                    <DealCard key={deal.id} deal={deal} />
                ))}

                <div className="view-more-placeholder">
                   <img src="https://rukminim2.flixcart.com/fk-p-flap/530/810/image/11dd6ca78faaf848.jpeg?q=90" alt="Image" className=""
  style={{
    filter: 'none',
    opacity: 1, 
    transition: 'filter 0.5s ease-in-out, opacity 0.5s ease-in-out',
    width: '100%',
    margin: 'auto', 
    display: 'block',
    objectFit: 'cover', 
    aspectRatio: '28 / 43' 
  }}
  aria-busy="false" data-highres-loaded="true" loading="eager" fetchpriority="auto" srcSet="https://rukminim2.flixcart.com/fk-p-flap/160/250/image/11dd6ca78faaf848.jpeg?q=80 1x, https://rukminim2.flixcart.com/fk-p-flap/320/500/image/11dd6ca78faaf848.jpeg?q=60 2x" />
                </div>
            </div>
        </section>
    );
};

const DirectorySection = () => (
    <section className="directory-section">
      <div className="directory-container">
        <span className="main-directory-heading">Top Stories : Brand Directory</span>
        {Object.keys(directoryData).map((heading, index) => (
          <div className="directory-column" key={index}>
            <span>{heading}</span>
            {directoryData[heading].map((link, linkIndex) => (
              <a href="#" key={linkIndex}>{link}</a>
            ))}
          </div>
        ))}
      </div>
    </section>
);

const Footer = () => (
   <footer className="main-footer-container">
      <div className="footer-links-top">
        <div className="footer-column">
          <h4>ABOUT</h4>
          <a href="#">Contact Us</a>
          <a href="#">About Us</a>
          <a href="#">Careers</a>
          <a href="#">Flipkart Stories</a>
          <a href="#">Press</a>
          <a href="#">Corporate Information</a>
        </div>
        <div className="footer-column">
          <h4>GROUP COMPANIES</h4>
          <a href="#">Myntra</a>
          <a href="#">Cleartrip</a>
          <a href="#">Shopsy</a>
        </div>
        <div className="footer-column">
          <h4>HELP</h4>
          <a href="#">Payments</a>
          <a href="#">Shipping</a>
          <a href="#">Cancellation & Returns</a>
          <a href="#">FAQ</a>
        </div>
        <div className="footer-column">
          <h4>CONSUMER POLICY</h4>
          <a href="#">Cancellation & Returns</a>
          <a href="#">Terms Of Use</a>
          <a href="#">Security</a>
          <a href="#">Privacy</a>
          <a href="#">Sitemap</a>
          <a href="#">Grievance Redressal</a>
          <a href="#">EPR Compliance</a>
        </div>
        <div className="footer-address">
          <h4>Mail Us:</h4>
          <p>
            Flipkart Internet Private Limited,<br/>
            Buildings Alyssa, Begonia & Clove Embassy Tech Village,<br/>
            Outer Ring Road, Devarabeesanahalli Village, Bengaluru, 560103,<br/>
            Karnataka, India
          </p>
          <h4 className="social-heading">Social:</h4>
          <div className="social-icons">
            <span><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNSAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjkzMzEgMjFDMTcuOTAzNyAyMSAyMS45MzMxIDE2Ljk3MDYgMjEuOTMzMSAxMkMyMS45MzMxIDcuMDI5NDQgMTcuOTAzNyAzIDEyLjkzMzEgM0M3Ljk2MjU0IDMgMy45MzMxMSA3LjAyOTQ0IDMuOTMzMTEgMTJDMy45MzMxMSAxNi45NzA2IDcuOTYyNTQgMjEgMTIuOTMzMSAyMVoiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTE2LjY4MzEgOC4yNUgxNS4xODMxQzE0LjU4NjQgOC4yNSAxNC4wMTQxIDguNDg3MDUgMTMuNTkyMSA4LjkwOTAxQzEzLjE3MDIgOS4zMzA5NyAxMi45MzMxIDkuOTAzMjYgMTIuOTMzMSAxMC41VjIxIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik05LjkzMzExIDEzLjVIMTUuOTMzMSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K" alt="Facebook" width="24" height="24" /></span>
            <span><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzE4M18yMCkiPgo8cGF0aCBkPSJNMTMuNTQzNiAxMC42MTc5TDIwLjA5NzEgM0gxOC41NDQxTDEyLjg1MzcgOS42MTQ0OEw4LjMwODg3IDNIMy4wNjY4OUw5LjkzOTY0IDEzLjAwMjNMMy4wNjY4OSAyMC45OTA4SDQuNjE5OTRMMTAuNjI5MSAxNC4wMDU2TDE1LjQyODggMjAuOTkwOEgyMC42NzA4TDEzLjU0MzIgMTAuNjE3OUgxMy41NDM2Wk0xMS40MTY1IDEzLjA5MDRMMTAuNzIwMiAxMi4wOTQ0TDUuMTc5NTMgNC4xNjkxMUg3LjU2NDkxTDEyLjAzNjMgMTAuNTY1MUwxMi43MzI2IDExLjU2MTFMMTguNTQ0OCAxOS44NzQ4SDE2LjE1OTVMMTEuNDE2NSAxMy4wOTA4VjEzLjA5MDRaIiBmaWxsPSJ3aGl0ZSIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzE4M18yMCI+CjxyZWN0IHg9IjMuMDY2ODkiIHk9IjMiIHdpZHRoPSIxNy42MDM5IiBoZWlnaHQ9IjE4IiByeD0iMC4yIiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=" alt="Twitter" width="24" height="24" /></span>
            <span><img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/YoutubeLogo-8425c4.svg" alt="YouTube" width="24" height="24" /></span>
            <span><img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/InstagramLogo-43f906.svg" alt="Instagram" width="20" height="20" /></span>
          </div>
        </div>
        <div className="footer-address registered-address">
          <h4>Registered Office Address:</h4>
          <p>
            Flipkart Internet Private Limited,<br/>
            Buildings Alyssa, Begonia & Clove Embassy Tech Village,<br/>
            Outer Ring Road, Devarabeesanahalli Village, Bengaluru, 560103,<br/>
            Karnataka, India<br/>
            CIN : U51109KA2012PTC066107<br/>
            Telephone: <a href="tel:04445614700">044-45614700</a> / <a href="tel:04467415800">044-67415800</a>
          </p>
        </div>
      </div>

      <div className="footer-links-bottom">
        <div className="footer-tools">
          <a href="#"><img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/sell-image-9de8ef.svg" alt="Become a Seller" width="13" height="12" />
          <span>&nbsp;Become a Seller</span></a>
          <a href="#"><img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/advertise-image-866c0b.svg" alt="Advertise" width="14" height="14" />
          <span>&nbsp;Advertise</span></a>
          <a href="#"><img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/gift-cards-image-d7ff24.svg" alt="Gift Cards" width="13" height="13" />
            <span>&nbsp;Gift Cards</span></a>
          <a href="#"><img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/help-centre-image-c4ace8.svg" alt="Help Center" width="13" height="13" />
            <span>&nbsp;Help Center</span></a>
        </div>
        <div className="footer-copyright">
          © 2007-2025 Flipkart.com
        </div>
        <div className="footer-payments">
          <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/payment-method-c454fb.svg" alt="Payment methods"></img>
        </div>
      </div>
    </footer>
);


// Main Application Component (The entire landing page content)
const FlipkartLandingPage = () => {
    return (
        <>
            <style>
                {appStyles}
            </style>
            
            <div className="app-container">
                <Header />
                <main className="content-area">
                    <CategoryMenu />
                    <MainBanner />  
                    <TopAdGrid /><BottomAdGrid />
                    <DealsSection />
                </main>
                <DirectorySection />
                <Footer />
            </div>
        </>
    );
};

export default FlipkartLandingPage;