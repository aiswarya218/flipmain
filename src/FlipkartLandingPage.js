import React, { useState, useEffect } from 'react';
import { 
  SiAkasaair, 
  SiKakao, 
  SiSass 
} from 'react-icons/si';

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
        padding: 12px 28px;
    }
    
    .header-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 1400px;
        margin: 0 auto;
    }
    .logo-section {
        margin-right: 36px;
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
      flex-grow: 1; 
      width: 100%; 
    }

.search-bar .search-icon-wrapper {    
  justify-content: flex-end;
  border-radius: 2px;
  cursor: pointer;  
  background-color: transparent;
}
   .search-bar input {
    flex-grow: 1; 
    width: auto; 
    padding: 8px 16px 8px 12px; 
    border: none; 
    border-radius: 0 8px 8px 0;
    font-size: 17px;
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
        font-size: 16px;
        cursor: pointer;
        transition: color 0.2s;
    }
    .nav-link-cart, .nav-link-login {
        display: flex;
        justify-content: center;
        align-items: center;
    }
        .nav-link-login span {
        margin-right: 8px;
        }
    .nav-link-login img {
        margin-right: 8px;
    }
    .nav-link-seller {
        padding: 0 20px;
        cursor: pointer;
        whitespace: nowrap;
    }
    .nav-link-seller text {
        white-space: nowrap;
    }
    .nav-link svg {
        width: 20px;
        height: 20px;
        margin-right: 4px;
        whitespace: nowrap;
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
    line-height: 1.2;
    color: #333;
    font-weight:600;
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

/* Navigation */
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
        border-width: 0px;
        min-height: 0px;
        min-width: 0px;
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
       filter: none;
       opacity: 1;
       transition: filter 0.5s ease-in-out, opacity 0.5s ease-in-out;
       width: 100%;
       margin: auto;
       display: block;
       object-fit: contain;
       aspect-ratio: 1 / 1;
    }
    .deal-name {
        font-size: 14px;
        line-height: 20px;
        letter-spacing: -.01px;
        color: #1f1f1f;
        font-family: inter_regular,fallback-inter_regular,Arial,sans-serif;
        margin: 0;
        padding: 0;
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
  margin: 0;
  padding: 0;
  font-weight: bold;
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

/* Offer Strip */
.offer-strip-wrapper {
    border-radius: 8px;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-image: url('https://rukminim2.flixcart.com/fk-p-flap/2000/200/image/96645558f3319800.jpg?q=90');
    background-size: cover;
    background-position: bottom;
    padding: 0;
}

.offer-strip-card {
    display: flex; 
    flex-direction: column;
    align-items: center;
    text-align: center;
    flex-grow: 1; 
    flex-basis: 25%;
    flex-shrink: 1; 
    width: auto; 
    padding: 0;
    text-decoration: none;
    color: var(--dark-text);
    transition: transform 0.2s;
}

.offer-strip-img {
    width: 100%;
    height: auto;
    object-fit: cover;
    max-height: 150px; 
    margin-bottom: 8px;
}

@media (max-width: 600px) {
    .offer-strip-wrapper {
        justify-content: flex-start;
        overflow-x: scroll;
    }
    .offer-strip-card {
        flex-basis: 40%;
        flex-shrink: 0;
        min-width: 150px; 
    }
}

/* Banner */
.big-banner-container {
    max-width: 1400px;
    margin: 12px auto;
    position: relative;
}

.big-banner-content {
    background-color: transparent; 
    padding: 0;
    height: auto; 
    display: block;
}

.big-banner-image-wrapper {
    flex-basis: 50%;
    height: 100%;
    position: relative;
}

.big-banner-image-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

.big-banner-text-area {
    flex-basis: 50%;
    padding: 20px 30px;
    position: relative;
    z-index: 2; 
}

.big-banner-text-area h3 {
    font-size: 16px;
    font-weight: 500;
    margin: 0 0 4px 0;
}

.big-banner-text-area h2 {
    font-size: 40px;
    font-weight: 700;
    margin: 0;
}

.big-banner-text-area p {
    margin: 5px 0 15px 0;
    font-size: 18px;
    font-weight: 300;
}

.big-banner-text-area button {
    background-color: var(--light-text);
    color: #ff523d;
    padding: 10px 25px;
    border: none;
    border-radius: 4px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.2s;
}

.big-banner-text-area button:hover {
    background-color: #eee;
}

.big-banner-sponsors {
    position: absolute;
    top: 10px;
    right: 30px;
    display: flex;
    gap: 10px;
}
.big-banner-sponsors img {
    height: 20px;
    width: auto;
}

@media (max-width: 768px) {
    .big-banner-content {
        flex-direction: column;
        height: auto;
    }
    .big-banner-image-wrapper {
        flex-basis: 100%;
        height: 150px;
    }
    .big-banner-text-area {
        flex-basis: 100%;
        text-align: center;
        padding: 20px;
    }
    .big-banner-sponsors {
        right: 10px;
        top: 10px;
    }
}
/* Directory Section */
.directory-section {
    color: #666;
  background-color: #f5f5f5;
  margin: 0 auto;
  text-align: left;
  padding: 25px;
  line-height: 1.5;
}

.directory-container {
   color: #666;
  background-color: #f5f5f5;
  margin: 0 auto;
  text-align: left;
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
  margin-right: 4px;
  font-size: 14px;  
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

const topDeals = [
    { id: 1, name: "Cooling Pads", price: "From ₹599", img: "https://rukminim2.flixcart.com/image/96/96/xif0q/cooling-pad/z/h/d/fksbcpk17-flipkart-smartbuy-original-imagrpra6uudn8xx.jpeg?q=90" },
    { id: 2, name: "Top Rated Keyboards", price: "From ₹299", img: "https://rukminim2.flixcart.com/image/96/96/kzzw5u80/keyboard/multi-device-keyboard/o/2/d/km3322w-km3322w-keyboard-mouse-combo-anti-fade-spill-resistant-original-imagbvyatqteauf2.jpeg?q=90" },
    { id: 3, name: "Tablet Cases & Covers", price: "From ₹299", img: "https://rukminim2.flixcart.com/image/96/96/xif0q/cases-covers/flip-cover/d/f/a/recoilcases9feblk-proelite-original-imahggskgh7hbmtd.jpeg?q=90" },
    { id: 4, name: "Samsung Watch 7", price: "Just ₹13,999*", img: "https://rukminim2.flixcart.com/image/96/96/xif0q/smartwatch/s/d/n/-original-imahcc49mx4png6v.jpeg?q=90" },
    { id: 5, name: "Premium Smartwatches", price: "From ₹3,099", img: "https://rukminim2.flixcart.com/image/96/96/xif0q/smartwatch/f/5/x/-original-imah4fnggqupasyh.jpeg?q=90" },
    { id: 6, name: "Women Epilators & Trimmers", price: "From ₹495", img: "https://rukminim2.flixcart.com/image/96/96/xif0q/epilator/y/k/j/7-silk-pil-3-031-epilator-for-long-lasting-hair-removal-from-original-imahag9thpgffqub.jpeg?q=90" },
    { id: 7, name: "Top Rated Routers", price: "From ₹319", img: "https://rukminim2.flixcart.com/image/96/96/jhjg13k0/router/g/n/n/tp-link-archer-c20-ac-wireless-dual-band-original-imaf5j9whw9bbetb.jpeg?q=90" },
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
                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTEiIHZpZXdCb3g9IjAgMCAxNCAxMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZF80OTc0Xzc1OTY5KSI+CjxwYXRoIGQ9Ik0zIDJMNyA2TDExIDIiIHN0cm9rZT0iIzExMTExMiIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L2c+CjxkZWZzPgo8ZmlsdGVyIGlkPSJmaWx0ZXIwX2RfNDk3NF83NTk2OSIgeD0iMC4yNSIgeT0iMC4yNSIgd2lkdGg9IjEzLjUiIGhlaWdodD0iOS44MTI1IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIiByZXN1bHQ9ImhhcmRBbHBoYSIvPgo8ZmVPZmZzZXQgZHk9IjEiLz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMSIvPgo8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4xNiAwIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93XzQ5NzRfNzU5NjkiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJlZmZlY3QxX2Ryb3BTaGFkb3dfNDk3NF83NTk2OSIgcmVzdWx0PSJzaGFwZSIvPgo8L2ZpbHRlcj4KPC9kZWZzPgo8L3N2Zz4K" alt="Chevron" class="-dOa_b XdYXbi" width="12" height="12"></img>
                    </a>
                    <a href="#" className="nav-link nav-link-cart">
                     <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg" alt="Cart" width="24" height="24"></img>
                        <span>Cart</span>
                    </a>
                    <a href="#" className="nav-link nav-link-seller">
                        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/Store-9eeae2.svg" alt="Become a Seller"></img>
                        <text>Become a Seller</text>
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
    {
        id: 4,
        src: "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/3f893004a60d1fbf.jpeg?q=90",
        alt: "Speakers"
    },
    {
        id: 5,
        src: "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/83d1b7da878cab79.jpeg?q=90",
        alt: "phones"
    }
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

const DealsSection1 = () => {
    const dealsToShow = topDeals.slice(0, 6);

    return (    
        <section className="deals-section">
            <div className="deals-header">
                <h2>Price drop on Electronics</h2>
            </div>
            <div className="deals-list">
                {dealsToShow.map((deal) => (
                    <DealCard key={deal.id} deal={deal} />
                ))}
            </div>
        </section>
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

const offerStripData = [
    {
        img: "https://rukminim2.flixcart.com/fk-p-flap/800/330/image/94c069313e3a5797.jpg?q=90",
        alt: "Gas Stove"
    },
    {
        img: "https://rukminim2.flixcart.com/fk-p-flap/800/330/image/7725cf7ee792d188.jpg?q=90",
        alt: "Diyas"
    },
    {
        img: "https://rukminim2.flixcart.com/fk-p-flap/800/330/image/cfc5d6c591424417.jpg?q=90",
        alt: "Blankets"
    },
    {
        img: "https://rukminim2.flixcart.com/fk-p-flap/800/330/image/d409371db6921c5f.jpg?q=90",
        alt: "Tools"
    },
];

const OfferStrip = ({ data }) => (
    <div className="offer-strip-container">
        <div className="offer-strip-wrapper">
            {data.map((item, index) => (
                <a href="#" className="offer-strip-card" key={index}>
                    <img src={item.img} alt={item.alt} className="offer-strip-img" onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/100x100/CCCCCC/333333?text=Offer'; }} />
                </a>
            ))}
        </div>
    </div>
);
const bigBannerData = {
    img: "https://rukminim2.flixcart.com/fk-p-flap/1600/350/image/fd2145dd37a22555.jpg?q=90",
};

const BigBanner = ({ data }) => (
    <div className="big-banner-container">
        <a href="#" style={{ display: 'block' }}>
            <img src={data.img} alt="Big Bang Diwali Banner" className="full-width-banner-img"
                style={{
                    width: '100%',
                    borderRadius: '8px', 
                    display: 'block',
                    objectFit: 'cover',
                }}
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/1400x350/ff523d/fff?text=BIG+BANNER'; }}
            />
        </a>
    </div>
);

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
                    <DealsSection />
                    <TopAdGrid />
                    <BottomAdGrid />
                    <DealsSection1 />
                    <OfferStrip data={offerStripData} />
                    <BigBanner data={bigBannerData} />
                </main>
                <DirectorySection />
            </div>
        </>
    );
};

export default FlipkartLandingPage;