import React, { useState } from 'react';
import { DiCssdeck, DiSafari, DiSnapSvg } from 'react-icons/di';
import { LiaDnaSolid } from 'react-icons/lia';
import { SiD, SiD3Dotjs, SiDsautomobiles } from 'react-icons/si';
import { useParams } from 'react-router-dom';

const allProducts = {
    '1': {
        id: '1',
        name: 'OPPO K13x 5G 6000mAh and 45W SUPERVOOC Charger & AI (Midnight Violet, 128 GB) (4 GB RAM)',
        price: '₹11,999',
        mrp: '₹15,999',
        discount: '25%',
        rating: 4.5,
        reviews: "14,645",
        questions: "1,281",
        deliveryDate: '20 Oct',
        images: [
            { src: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/h/q/k/-original-imahfw4vamrf5xhf.jpeg?q=70&amp;crop=false", alt: 'Main Image' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/5/x/f/-original-imahfw4vas3awbzr.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 2' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/0/s/v/-original-imahfw4v4yk8gfsd.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 3' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/f/h/b/-original-imahfw4vrskkrnrs.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 4' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/x/9/q/-original-imahfw4vpt2ejwn9.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 5' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/5/x/3/-original-imahfw4vezavz8gf.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 6' },
        ],
    },
    '2': {
        id: '2',
        name: 'Samsung Galaxy A35 5G (Awesome Navy, 128 GB)',
        price: '₹17,999',
        mrp: '₹33,999',
        discount: '47%',
        rating: 4.4,
        reviews: "46,492",
        questions: "2,729",
        deliveryDate: '20 Oct',
        images: [
            { src: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/h/q/k/-original-imahfw4vamrf5xhf.jpeg?q=70&amp;crop=false", alt: 'Main Image' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/5/x/f/-original-imahfw4vas3awbzr.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 2' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/0/s/v/-original-imahfw4v4yk8gfsd.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 3' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/f/h/b/-original-imahfw4vrskkrnrs.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 4' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/x/9/q/-original-imahfw4vpt2ejwn9.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 5' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/5/x/3/-original-imahfw4vezavz8gf.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 6' },
        ],
    },
       '3': {
        id: '3',
        name: 'realme C61 (Safari Green, 64 GB) (4 GB RAM)',
        price: '₹8,999',
        mrp: '₹6,299',
        discount: '30%',
        rating: 4.4,
        reviews: "21,009",
        questions: "632",
        deliveryDate: '20 Oct',
        images: [
            { src: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/h/q/k/-original-imahfw4vamrf5xhf.jpeg?q=70&amp;crop=false", alt: 'Main Image' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/5/x/f/-original-imahfw4vas3awbzr.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 2' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/0/s/v/-original-imahfw4v4yk8gfsd.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 3' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/f/h/b/-original-imahfw4vrskkrnrs.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 4' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/x/9/q/-original-imahfw4vpt2ejwn9.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 5' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/5/x/3/-original-imahfw4vezavz8gf.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 6' },
        ],
    },
       '4': {
        id: '4',
        name: 'IQOO Z10R (Aquamarine, 256 GB) (8 GB RAM)',
        price: '₹20,823',
        mrp: '₹24,999',
        discount: '16%',
        rating: 4.4,
        reviews: "1,416",
        questions: "75",
        deliveryDate: '20 Oct',
        images: [
            { src: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/h/q/k/-original-imahfw4vamrf5xhf.jpeg?q=70&amp;crop=false", alt: 'Main Image' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/5/x/f/-original-imahfw4vas3awbzr.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 2' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/0/s/v/-original-imahfw4v4yk8gfsd.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 3' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/f/h/b/-original-imahfw4vrskkrnrs.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 4' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/x/9/q/-original-imahfw4vpt2ejwn9.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 5' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/5/x/3/-original-imahfw4vezavz8gf.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 6' },
        ],
    },   
    '5': {
        id: '5',
        name: 'POCO M7 5G (Mint Green, 128 GB) (8 GB RAM)',
        price: '₹9,499',
        mrp: '₹13,999',
        discount: '32%',
        rating: 4.2,
        reviews: "9,908",
        questions: "490",
        deliveryDate: '20 Oct',
        images: [
            { src: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/h/q/k/-original-imahfw4vamrf5xhf.jpeg?q=70&amp;crop=false", alt: 'Main Image' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/5/x/f/-original-imahfw4vas3awbzr.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 2' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/0/s/v/-original-imahfw4v4yk8gfsd.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 3' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/f/h/b/-original-imahfw4vrskkrnrs.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 4' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/x/9/q/-original-imahfw4vpt2ejwn9.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 5' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/5/x/3/-original-imahfw4vezavz8gf.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 6' },
        ],
    },
     '6': {
        id: '6',
        name: 'Google Pixel 10 (Onsidian, 256 GB) (12 GB RAM)',
        price: '₹9,499',
        mrp: '₹13,999',
        discount: '32%',
        rating: 4.2,
        reviews: "9,908",
        questions: "490",
        deliveryDate: '20 Oct',
        images: [
            { src: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/h/q/k/-original-imahfw4vamrf5xhf.jpeg?q=70&amp;crop=false", alt: 'Main Image' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/5/x/f/-original-imahfw4vas3awbzr.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 2' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/0/s/v/-original-imahfw4v4yk8gfsd.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 3' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/f/h/b/-original-imahfw4vrskkrnrs.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 4' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/x/9/q/-original-imahfw4vpt2ejwn9.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 5' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/5/x/3/-original-imahfw4vezavz8gf.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 6' },
        ],
    },
};


const ProductImageGallery = ({ images }) => (
    <div className="product-image-gallery">
        <div className="thumbnail-list">
            {images.slice(0, 6).map((img, index) => (
                <div key={index} className="thumbnail-item">
                    <img src={img.src} alt={`Thumbnail ${index + 1}`} />
                </div>
            ))}
        </div>
        <div className="main-image-display">
            <img src={images[0].src.replace('/100/100/', '/600/600/')} alt={images[0].alt} />
            
            <div className="gemini-badge">
                <p dangerouslySetInnerHTML={{ __html: 'with **Google Gemini**' }} /> 
            </div>
        </div>
    </div>
);

const ProductDetails = ({ data }) => (
    <div className="product-details-info">
        <h1 className="product-title">{data.name}</h1>
        
        <div className="rating-share-section">
            <span className="rating-badge">{data.rating} <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg==" class="Rza2QY"></img></span>
            <span className="review-text">{data.reviews.toLocaleString()} Ratings & {data.questions} Reviews</span>
            <span className="assured-badge"><img height="21" src="flipmain/public/images/fa_9e47c1.png" /></span>
            <span className="compare-share-links">| Compare | Share</span>
        </div>
        
        <div className="price-section">
            <span className="current-price">{data.price}</span>
            <span className="mrp-price">{data.mrp}</span>
            <span className="discount-percent">{data.discount} Off</span>
        </div>

        <p className="warranty-text">+ ₹75 Protect Promise Fee <a href="#">Learn more</a></p>
        <p className="delivery-text" dangerouslySetInnerHTML={{ __html: `Secure delivery by **${data.deliveryDate}**` }} />

        <h4 className="offer-heading">Available offers</h4>
        <ul className="offers-list">
            <li>Bank Offer 5% cashback on Axis Bank Flipkart Debit Card up to ₹750</li>
            <li>Bank Offer 5% cashback on Flipkart SBI Credit Card up to ₹4,000 per calendar quarter</li>
            <li>No cost EMI ₹4,000/month. Standard EMI also available <a href="#">View Plans</a></li>
        </ul>
        <a href="#" className="view-more-offers">View 4 more offers</a>

        <div className="exchange-options">
            <div className="exchange-option">
                <input type="radio" name="buy_option" id="buy_no_exchange" defaultChecked />
                <label htmlFor="buy_no_exchange">Buy without Exchange</label>
                <span className="option-price">{data.price}</span>
            </div>   
            <div className="exchange-option">
                <input type="radio" name="buy_option" id="buy_with_exchange" />
                <label htmlFor="buy_with_exchange">Buy with Exchange</label>
                <span className="option-price">up to ₹9,000 off</span>
                <p className="pincode-check">Enter Pincode to check if exchange is available</p>
            </div>
        </div>
    </div>
);

const ProductActions = () => (
    <div className="product-actions-bar">
        <button className="add-to-cart-btn">
            <svg class="NwyjNT" width="16" height="16" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path class="" d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86" fill="#fff"></path></svg>ADD TO CART
        </button>
        <button className="buy-now-btn">
            <img src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMHY3LjdoMi4xVjE0TDcgNS42SDQuMkw3IDAiIGZpbGw9IiNGRkYiLz48L3N2Zz4="/>BUY NOW</button>
    </div>
);


const ProductDetailPage = () => {
    const { id } = useParams();
    const productData = allProducts[id]; 
    
    if (!productData) {
        return <div className="product-detail-page-container">
            <h2>Product Not Found or Loading... (ID: {id})</h2>
        </div>;
    }

    const pageStyles = `
        :root {
            --primary-blue: #2874f0;
            --primary-green: #388e3c;
            --dark-text: #212121;
            --light-text: #fff;
        }

        .product-detail-page-container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 20px 16px;
            background-color: #fff;
        }
        .product-main-content {
            display: flex;
            gap: 20px;
            padding-bottom: 20px;
            border-bottom: 1px solid #f0f0f0;
        }

        .product-left-column {
            flex-shrink: 0;
            width: 440px; 
            padding: 10px;
        }
        .product-image-gallery {
            display: flex;
            height: 500px; 
        }
        .thumbnail-list {
            display: flex;
            flex-direction: column;
            gap: 8px;
            padding-right: 15px;
            width: 70px;
        }
        .thumbnail-item {
            border: 1px solid #f0f0f0;
            padding: 4px;
            cursor: pointer;
            width: 60px;
            height: 60px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .thumbnail-item img {
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
        }
        .main-image-display {
            position: relative;
            flex-grow: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid #f0f0f0;
            padding: 20px;
        }
        .main-image-display img {
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
        }
        .feature-overlay-box {
            position: absolute;
            top: 20px;
            left: 20px;
            background: rgba(0, 0, 0, 0.85);
            color: var(--light-text);
            padding: 15px;
            border-radius: 4px;
            font-size: 11px;
            line-height: 1.5;
            font-weight: 500;
        }
        .feature-item {
            margin: 0 0 5px 0;
        }
        .gemini-badge {
            position: absolute;
            bottom: 10px;
            right: 10px;
            font-size: 14px;
            font-weight: 500;
            color: #555;
            background: #fff;
            padding: 4px 8px;
            border-radius: 4px;
        }
        .product-actions-bar {
            display: flex;
            gap: 10px;
            padding: 15px 0;
            margin-top: 10px;
            justify-content: center;
        }
        .add-to-cart-btn, .buy-now-btn {
            padding: 12px 20px;
            font-size: 16px;
            font-weight: 500;
            border: none;
            border-radius: 2px;
            cursor: pointer;
            width: 180px; 
        }
        .add-to-cart-btn {
            background-color: #ff9f00; 
            color: var(--light-text);
        }
        .buy-now-btn {
            background-color: #fb641b; 
            color: var(--light-text);
        }

        .product-right-column {
            flex-grow: 1;
            position: relative;
        }
        .product-title {
            font-size: 18px;
            font-weight: 500;
            margin-bottom: 5px;
            color: var(--dark-text);
        }
        .rating-share-section {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 15px;
            padding-bottom: 15px;
            border-bottom: 1px dashed #f0f0f0;
            font-size: 14px;
        }
        .rating-badge {
            background-color: var(--primary-green);
            color: var(--light-text);
            padding: 2px 6px;
            border-radius: 4px;
            font-weight: bold;
        }
        .review-text {
            color: #878787;
        }
        .assured-badge {
            width: 77px;
            height: 15px;
            background-image: url('https://static-assets-web.flixcart.com/fk-p-s/assets/images/flipkart_assured.svg');
            background-repeat: no-repeat;
        }
        .compare-share-links {
            color: var(--primary-blue);
            font-weight: 500;
            cursor: pointer;
        }
        .price-section {
            padding: 10px 0;
            margin-bottom: 10px;
        }
        .current-price {
            font-size: 32px;
            font-weight: 600;
            margin-right: 10px;
        }
        .mrp-price {
            text-decoration: line-through;
            color: #878787;
            margin-right: 10px;
        }
        .discount-percent {
            color: var(--primary-green);
            font-weight: 600;
        }
        .warranty-text, .delivery-text, .pincode-check {
            font-size: 14px;
            margin: 5px 0;
            color: #555;
        }
        .warranty-text a, .delivery-text a {
            color: var(--primary-blue);
            text-decoration: none;
        }
        .offer-heading {
            font-size: 16px;
            font-weight: 600;
            margin: 15px 0 10px;
        }
        .offers-list {
            list-style: none;
            padding: 0;
            font-size: 14px;
        }
        .offers-list li {
            margin-bottom: 5px;
            list-style-image: url("https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90");
            padding-left: 20px;
        }
        .offers-list li::before {
            content: "•";
            color: var(--primary-green);
            font-weight: bold;
            display: inline-block; 
            width: 1em;
            margin-left: -1em;
        }
        .view-more-offers {
            color: var(--primary-blue);
            font-size: 14px;
            text-decoration: none;
            display: block;
            margin-bottom: 20px;
        }
        .exchange-options {
            border: 1px solid #f0f0f0;
            padding: 15px;
            border-radius: 4px;
            margin-bottom: 20px;
        }
        .exchange-option {
            display: flex;
            align-items: center;
            margin-bottom: 10px;
        }
        .exchange-option label {
            flex-grow: 1;
            font-size: 15px;
            margin-left: 10px;
        }
        .option-price {
            font-weight: 600;
            color: var(--dark-text);
        }
        .pincode-check {
            font-size: 12px;
            color: var(--primary-blue);
            cursor: pointer;
            margin-left: 30px;
        }
        .small-ad-card {
            position: absolute;
            top: 20px;
            right: 0;
            width: 150px;
            text-align: center;
        }
        .small-ad-card img {
            width: 80px;
            height: 80px;
            object-fit: contain;
        }
    `;
    return (
        <>
            <style>{pageStyles}</style>

            <div className="product-detail-page-container">
                <div className="product-main-content">
                    <div className="product-left-column">
                        <ProductImageGallery images={productData.images} />
                        <ProductActions />
                    </div>

                    <div className="product-right-column">
                        <ProductDetails data={productData} />
                        
                        <div className="small-ad-card">
                            <img src="https://rukminim2.flixcart.com/fk-p-lockin/100/100/image/c7c728e83b8a3e74.jpeg?q=90" alt="Samsung Ad" />
                            <p style={{fontSize: '12px', color: '#878787'}}>SAMSUNG Galaxy...</p>
                        </div>
                    </div>
                </div>

                <div className="bottom-sections">
                </div>
            </div>
        </>
    );
};

export default ProductDetailPage;