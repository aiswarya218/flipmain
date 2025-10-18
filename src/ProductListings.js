import React, { useState } from 'react';
import { PiYarnThin } from 'react-icons/pi';
import { Link } from 'react-router-dom';

const styles = {
    pageLayout: {
        display: 'flex',
        padding: '20px 0',
        maxWidth: '1200px', 
        margin: '0 auto',
        fontFamily: 'sans-serif',
    },
    filterSidebar: {
        flexBasis: '25%', 
        padding: '0 15px', 
    },
    listingsArea: {
        flexBasis: '75%', 
    },
    filterGroup: {
        marginBottom: '20px',
        borderBottom: '1px solid #f0f0f0',
        paddingBottom: '15px',
    },
    filterTitle: {
        fontSize: '16px',
        fontWeight: 'bold',
        color: '#333',
        marginBottom: '10px',
        textTransform: 'uppercase',
    },
    filterOption: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '8px',
        fontSize: '14px',
        color: '#444',
    },
    checkbox: {
        marginRight: '8px',
    },
    priceRange: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    priceInput: {
        width: '45%',
        padding: '5px',
        border: '1px solid #ccc',
    },
    priceSeparator: {
        margin: '0 5px',
        color: '#888',
    },
    listingsContainer: {
        width: '100%',
        padding: '0 10px',
    },
    listingHeader: {
        fontSize: '16px',
        fontWeight: '400',
        color: '#555',
        marginBottom: '10px',
    },
    sortingOptions: {
        backgroundColor: '#f1f2f6',
        padding: '10px 15px',
        display: 'flex',
        gap: '15px',
        marginBottom: '15px',
        fontSize: '14px',
        color: '#777',
    },
    sortLink: {
        textDecoration: 'none',
        color: '#555',
        fontWeight: '500',
    },
    sortLinkActive: {
        color: '#2874f0',
        fontWeight: 'bold',
    },
    productItem: {
        display: 'flex',
        borderTop: '1px solid #eee',
        padding: '20px 0',
        alignItems: 'flex-start',
    },
    productImageContainer: {
        flexBasis: '20%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '0 15px',
    },
    productImage: {
        maxWidth: '150px',
        height: 'auto',
        marginBottom: '10px',
    },
    addToCompare: {
        background: 'none',
        border: '1px solid #ccc',
        color: '#333',
        padding: '5px 10px',
        cursor: 'pointer',
        fontSize: '12px',
    },
    productDetails: {
        flexBasis: '80%',
        display: 'flex',
        justifyContent: 'space-between',
    },
    productInfoPrimary: {
        flexBasis: '60%',
        paddingLeft: '15px',
    },
    productPricing: {
        flexBasis: '40%',
        textAlign: 'right',
        paddingRight: '20px', 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
    },
    productName: {
        fontSize: '18px',
        color:'black',
        fontWeight: 'bold',
        cursor: 'pointer',
        margin: '0 0 5px 0',
        display: 'block',
    },
    ratingContainer: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '10px',
    },
    ratingScore: {
        backgroundColor: '#388e3c',
        color: 'white',
        padding: '2px 5px',
        borderRadius: '3px',
        fontSize: '12px',
        fontWeight: 'bold',
        marginRight: '5px',
    },
    ratingText: {
        fontSize: '12px',
        color: '#777',
    },
    // REVERTED: Styles for a standard bulleted list
    productSpecs: {
        listStyleType: 'disc', // Reverted to bullet points
        padding: '0',
        margin: '0',
        fontSize: '14px',
        color: 'black',
        marginLeft: '15px', // Added margin back for indentation
    },
    productSpecItem: {
        marginBottom: '3px',
    },
    // END REVERTED
    priceAndBadgeContainer: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '5px',
        gap: '8px', 
    },
    currentPrice: {
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#212121',
    },
    assuredBadgeImage: {
        width: '77px', 
        height: '14px', 
        verticalAlign: 'middle',
    },
    priceDetails: {
        marginBottom: '5px',
    },
    originalPrice: {
        paddingTop: '10px',
        marginLeft: '0',
        display: 'inline-block',
        marginLeft: '8px',
        textDecoration: 'line-through',
        fontSize: '14px',
        color: '#878787',
    },
    discountPercentage: {
       color:' #388e3c',
       fontSize: '13px',
       letterSpacing: '-.2px',
      fontWeight: '500',
    },
    offerText: {
        fontSize: '13px',
        marginTop: '5px',
        color: 'black',
    }
};

const productData = [
    { 
        "id": 1, 
        "product_name": "REDMI A3X (Midnight Black, 128 GB)",
        "image": "./images/-original-imah2hfpxtwagduh.jpeg",
        "price": { 
           "current_price": "₹6,499",
           "original_price": "₹10,999",
           "discount_percentage": "40% off" },
        "rating": {
           "score": 4.1,
           "total_ratings": "7,529 Ratings",
           "total_reviews": "311 Reviews" },
        "specifications": {
           "ram": "4 GB RAM | 128 GB ROM",
           "storage_expandable": "Expandable Upto 1 TB",
           "display": "17.04 cm (6.71 inch) HD+ Display",
           "rear_camera": "8MP Rear Camera | 5MP Front Camera",
           "battery": "5000 mAh Battery",
        },
        "warranty": { 
            "phone_warranty": "1 Year Manufacturer Warranty for Phone and 6 Months Warranty For in the Box Accessories" 
        },
        "offers": { 
            "exchange_offer": "Upto <b>₹4,350</b> Off on Exchange",
            "bank_offer": "Bank Offer" } 
    },
    { 
        "id": 2, 
        "product_name": "REDMI A5 (Jaisalmer Gold, 128GB)", 
        "image": "./images/redmi.webp", 
        "price": { 
            "current_price": "₹7,499", 
            "original_price": "₹9,999", 
            "discount_percentage": "25% off" }, 
        "rating": { 
            "score": 4.2, 
            "total_ratings": "2,647 Ratings", 
            "total_reviews": "148 Reviews" 
        }, 
        "specifications": { 
            "ram": "4 GB RAM | 128 GB ROM", 
            "storage_expandable": "Expandable Upto 2 TB", 
            "display": "17.48 cm (6.88 inch) HD+ Display", 
            "rear_camera": "32MP Rear Camera | 8MP Front Camera", 
            "battery": "5200 mAh Battery" }, 
        "warranty": { 
            "phone_warranty": "1 Year Manufacturer Warranty and 6 Months Warranty for In the Box Accessories" }, 
        "offers": { 
            "exchange_offer": "Upto <b>₹5,100</b> Off on Exchange", "bank_offer": "Bank Offer" } 
    },
    { "id": 3, "product_name": "Nokia 105 Single SIM, Keypad Mobile Phone", "image": "./images/105-single-sim-keypad-mobile-phone-with-wireless-fm-radio-ta.jpeg", "price": { "current_price": "₹939", "original_price": "₹1,599", "discount_percentage": "41% off" }, "rating": { "score": 4.1, "total_ratings": "1,71,013 Ratings", "total_reviews": "10,902 Reviews" }, "specifications": { "ram": "4 MB RAM | 10 MB ROM", "display": "3.86 cm (1.52 inch) Display", "battery": "800 mAh Battery" }, "warranty": { "phone_warranty": "1 Year Manufacturer Warranty on Handset & 6 Months Warranty on Accessories" }, "offers": { "phones_left": "Only 1 left", "bank_offer": "Bank Offer" } },
    { "id": 4, "product_name": "Motorola g45 5G (Brilliant Blue, 128 GB)", "image": "./images/-original-imah3xk892aj9gck.jpeg", "product_price": { "current_price": "₹11,999", "original_price": "₹14,999", "discount_percentage": "20% off" }, "rating": { "score": 4.3, "total_ratings": "2,13,881 Ratings", "total_reviews": "10,880 Reviews" }, "specifications": { "ram": "8 GB RAM | 128 GB ROM", "storage_expandable": "Expandable Upto 1 TB", "display": "16.51 cm (6.5 inch) HD+ Display", "rear_camera": "50MP + 2MP | 16MP Front Camera", "battery": "5000 mAh Battery" }, "warranty": { "phone_warranty": "1 Year Warranty on Handset and 6 Months Warranty for In the Box Accessories" }, "offers": { "exchange_offer": "Upto <b>₹8,350</b> Off on Exchange", "bank_offer": "Bank Offer" } },
    { "id": 5, "product_name": "Samsung Galaxy F05 (Twilight Blue, 64 GB)", "image": "./images/-original-imah56hkgehywn5b.jpeg", "product_price": { "current_price": "₹6,249", "original_price": "₹9,999", "discount_percentage": "37% off" }, "rating": { "score": 4.2, "total_ratings": "11,399 Ratings", "total_reviews": "488 Reviews" }, "specifications": { "ram": "4 GB RAM| 64 GB ROM", "storage_expandable": "Expandable Upto 1 TB", "display": "17.12 cm (6.74 inch) HD+ Display", "rear_camera": "50MP + 2MP | 8MP Front Camera", "battery": "5000 mAh Battery" }, "warranty": { "phone_warranty": "1 Year Manufacturer Warranty and 6 Months Warranty for In-Box Accessories" }, "offers": { "exchange_offer": "Upto <b>₹4,150</b> Off on Exchange", "bank_offer": "Bank Offer" } },
    { "id": 6, "product_name": "realme Narzo 80 Lite 4G (Beach Gold, 64 GB)", "image": "./images/narzo-80-lite-4g-rmx5313-realme-original-imahegxgdvbva7zf.jpeg", "product_price": { "current_price": "₹7,233", "original_price": "₹8,999", "discount_percentage": "19% off" }, "rating": { "score": 4.3, "total_ratings": "11,399 Ratings", "total_reviews": "488 Reviews" }, "specifications": { "ram": "4 GB RAM | 64 GB ROM", "display": "17.12 cm (6.74 inch) HD+ Display", "rear_camera": "13MP Rear Camera", "battery": "6300 mAh Battery" }, "warranty": { "phone_warranty": "1 Year brand Warranty" }, "offers": { "exchange_offer": "Upto <b>₹3,950</b> Off on Exchange", "bank_offer": "Bank Offer" } },
    { "id": 7, "product_name": "POCO C71 (Power Black, 128 GB)", "image": "./images/-original-imahawgahmkbjxyj.jpeg", "product_price": { "current_price": "₹6,999", "original_price": "₹9,999", "discount_percentage": "30% off" }, "rating": { "score": 4.1, "total_ratings": "14,636 Ratings", "total_reviews": "721 Reviews" }, "specifications": { "ram": "6 GB RAM | 128 GB ROM", "storage_expandable": "Expandable Upto 2 TB", "display": "17.48 cm (6.88 inch) HD+ Display", "rear_camera": "32MP Rear Camera | 8MP Front Camera", "battery": "5200 mAh Battery" }, "warranty": { "phone_warranty": "1 Year Manufacturer Warranty and 6 Months Warranty for In the Box Accessories" }, "offers": { "exchange_offer": "Upto <b>₹4,700</b> Off on Exchange", "bank_offer": "Bank Offer" } },
    { "id": 8, "product_name": "realme 15 Pro 5G(Flowing Silver, 256 GB)", "image": "./images/vicky.webp", "product_price": { "current_price": "₹33,999", "original_price": "₹37,999", "discount_percentage": "10% off" }, "rating": { "score": 4.3, "total_ratings": "4,888 Ratings", "total_reviews": "446 Reviews" }, "specifications": { "ram": "8 GB RAM | 256 GB ROM", "display": "17.27 cm (6.8 inch) Display", "rear_camera": "50MP + 50MP | 50MP Front Camera", "battery": "7000 mAh Battery" }, "warranty": { "phone_warranty": "1 Year Manufacturer Warranty and 6 Months Warranty for In the Box Accessories" }, "offers": { "phones_left": "Only 1 left", "bank_offer": "Bank Offer" } },
    { "id": 9, "product_name": "vivo T4 5G (Phantom Grey, 128 GB)", "image": "./images/vivo.webp", "product_price": { "current_price": "₹20,999", "original_price": "₹25,999", "discount_percentage": "19% off" }, "rating": { "score": 4.5, "total_ratings": "70,252 Ratings", "total_reviews": "3,204 Reviews" }, "specifications": { "ram": "8 GB RAM | 128 GB ROM", "storage_expandable": "Expandable Upto 2 TB", "display": "17.28 cm (6.77 inch) HD+ Display", "rear_camera": "50MP (OIS) + 2MP | 32MP Front Camera", "battery": "7300 mAh Battery" }, "warranty": { "phone_warranty": "1 Year Manufacturer Warranty and 6 Months Warranty for In the Box Accessories" }, "offers": { "exchange_offer": "Upto <b>₹16,100</b> Off on Exchange", "bank_offer": "Bank Offer" } },
    { "id": 10, "product_name": "REDMI A5 (Just Black, 64 GB)", "image": "./images/-original-imahb56zdgszp7tg.jpeg", "product_price": { "current_price": "₹6,499", "original_price": "₹8,999", "discount_percentage": "27% off" }, "rating": { "score": 4.2, "total_ratings": "3,267 Ratings", "total_reviews": "149 Reviews" }, "specifications": { "ram": "3 GB RAM | 64 GB ROM", "storage_expandable": "Expandable Upto 2 TB", "display": "17.48 cm (6.88 inch) HD+ Display", "rear_camera": "32MP Rear Camera | 8MP Front Camera", "battery": "5200 mAh Battery" }, "warranty": { "phone_warranty": "1 Year Manufacturer Warranty and 6 Months Warranty for In the Box Accessories" }, "offers": { "exchange_offer": "Upto <b>₹4,350</b> Off on Exchange", "bank_offer": "Bank Offer" } },
    { "id": 11, "product_name": "POCO C75 5G (Aqua Bliss, 64 GB)", "image": "./images/-original-imahbr2cz5apcwze (1).jpeg", "product_price": { "current_price": "₹7,699", "original_price": "₹10,999", "discount_percentage": "30% off" }, "rating": { "score": 4.2, "total_ratings": "1,03,254 Ratings", "total_reviews": "4,829 Reviews" }, "specifications": { "ram": "3 GB RAM | 64 GB ROM", "storage_expandable": "Expandable Upto 1 TB", "display": "17.48 cm (6.88 inch) HD+ Display", "rear_camera": "50MP Rear Camera | 5MP Front Camera", "battery": "5160 mAh Battery" }, "warranty": { "phone_warranty": "1 Year Manufacturer Warranty and 6 Months Warranty for In the Box Accessories" }, "offers": { "exchange_offer": "Upto <b>₹5200</b> Off on Exchange", "bank_offer": "Bank Offer" } },
    { "id": 12, "product_name": "Samsung Guru Music 2 B310ED", "image": "./images/guru-music-2-b310ed-guru-music-2-samsung-original-imahfyupkv.jpeg", "product_price": { "current_price": "₹898", "original_price": "₹1,999", "discount_percentage": "55% off" }, "rating": { "score": 3.1, "total_ratings": "24,038 Ratings", "total_reviews": "1,689 Reviews" }, "specifications": { "ram": "32 MB RAM | 32 MB ROM", "storage_expandable": "Expandable Upto 100 MB", "display": "4.57 cm (1.8 inch) VGA Display", "rear_camera": "0MP Rear Camera | 0MP Front Camera", "battery": "800 mAh Battery" }, "warranty": { "phone_warranty": "1 Year Seller Warranty" }, "offers": { "exchange_offer": "Upto <b>₹3,950</b> Off on Exchange", "bank_offer": "Bank Offer" } },
    { "id": 13, "product_name": "HOTLINE TURTLE", "image": "./images/classic-turtle-classic-turtle-hotline-original-imahb9gz8jgyn.jpeg", "product_price": { "current_price": "₹699", "original_price": "₹999", "discount_percentage": "30% off" }, "rating": { "score": 3.7, "total_ratings": "376 Ratings", "total_reviews": "27 Reviews" }, "specifications": { "ram": "32 MB RAM | 32 MB ROM", "storage_expandable": "Expandable Upto 16 GB", "display": "4.57 cm (1.8 inch) NA Display", "rear_camera": "1.3MP + 0MP Rear Camera | 0MP Front Camera", "battery": "1100 mAh Battery" }, "warranty": { "phone_warranty": "3 Months domestic Warranty" }, "offers": { "phones_left": "Only 1 left", "bank_offer": "Bank Offer" } },
    { "id": 14, "product_name": "Samsung Galaxy S25 Ultra", "image": "./images/ultra.webp", "product_price": { "current_price": "₹1,19,999", "original_price": "₹1,29,999", "discount_percentage": "7% off" }, "rating": { "score": 4.7, "total_ratings": "2,012 Ratings", "total_reviews": "222 Reviews" }, "specifications": { "ram": "12 GB RAM | 256 GB ROM", "storage_expandable": "Expandable Upto 1 TB", "display": "17.53 cm (6.9 inch) Quad HD+ Display", "rear_camera": "200MP + 50MP + 50MP + 10MP Rear Camera", "front_camera": "12MP Front Camera", "battery": "5000 mAh Battery" }, "warranty": { "phone_warranty": "1 Year Manufacturer Warranty and 6 Months Warranty for In the Box Accessories" }, "offers": { "exchange_offer": "Upto <b>₹41,350</b> Off on Exchange", "bank_offer": "Bank Offer" } },
    { "id": 15, "product_name": "MOTOROLA g35 5G (Midnight Black, 128 GB)", "image": "./images/g35-5g-pb3h0000in-motorola-original-imah7c6ykgz5rtgv.jpeg", "product_price": { "current_price": "₹8,999", "original_price": "₹12,499", "discount_percentage": "28% off" }, "rating": { "score": 4.2, "total_ratings": "75,633 Ratings", "total_reviews": "5,241 Reviews" }, "specifications": { "ram": "4 GB RAM | 128 GB ROM", "storage_expandable": "Expandable Upto 1 TB", "display": "17.07 cm (6.72 inch) Full HD+ Display", "rear_camera": "50MP + 8MP Rear Camera", "front_camera": "16MP Front Camera", "battery": "5000 mAh Battery" }, "warranty": { "phone_warranty": "1 Year Manufacturer Warranty and 6 Months Warranty for In the Box Accessories" }, "offers": { "exchange_offer": "Upto <b>₹6,150</b> Off on Exchange", "bank_offer": "Bank Offer" } },
    { "id": 16, "product_name": "Google Pixel 10 (Indigo, 256 GB)", "image": "./images/google.webp", "product_price": { "current_price": "₹79,999", "original_price": "₹1,10,999", "discount_percentage": "40% off" }, "rating": { "score": 4.4, "total_ratings": "549 Ratings", "total_reviews": "52 Reviews" }, "specifications": { "ram": "12 GB RAM | 256 GB ROM", "storage_expandable": "Expandable Upto 1 TB", "display": "16.0 cm (6.3 inch) HD+ Display", "rear_camera": "48MP + 13MP | 10.5MP Front Camera", "battery": "4970 mAh Battery" }, "warranty": { "phone_warranty": "1 Year Domestic Warranty" }, "offers": { "exchange_offer": "Upto <b>₹53,650</b> Off on Exchange", "bank_offer": "Bank Offer" } }
];

const ProductFilters = ({ filters, setFilters }) => {
    const uniqueBrands = ['Apple', 'Samsung', 'Motorola', 'Google', 'REDMI', 'POCO', 'realme', 'vivo', 'Nokia', 'HOTLINE'].sort();

    const handleBrandChange = (brand) => {
        setFilters(prev => {
            const newBrands = prev.brands.includes(brand)
                ? prev.brands.filter(b => b !== brand)
                : [...prev.brands, brand];
            return { ...prev, brands: newBrands };
        });
    };

    const handlePriceChange = (e) => {
        setFilters(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <div style={styles.filterSidebar}>
            <h3>Filters</h3>

            <div style={styles.filterGroup}>
                <h4 style={styles.filterTitle}>Price</h4>
                <div style={styles.priceRange}>
                    <input type="number" name="minPrice" placeholder="Min" style={styles.priceInput} onChange={handlePriceChange} />
                    <span style={styles.priceSeparator}>to</span>
                    <input type="number" name="maxPrice" placeholder="30000+" style={styles.priceInput} onChange={handlePriceChange} />
                </div>
            </div>

            <div style={styles.filterGroup}>
                <h4 style={styles.filterTitle}>Brand</h4>
                {uniqueBrands.slice(0, 5).map(brand => ( 
                    <label key={brand} style={styles.filterOption}>
                        <input type="checkbox" style={styles.checkbox} checked={filters.brands.includes(brand)} onChange={() => handleBrandChange(brand)}/>
                        {brand}
                    </label>
                ))}
                {uniqueBrands.length > 5 && (
                    <div style={{color: '#2874f0', fontSize: '14px', cursor: 'pointer', marginTop: '5px'}}>
                        {uniqueBrands.length - 5} MORE
                    </div>
                )}
            </div>

            <div style={styles.filterGroup}>
                <h4 style={styles.filterTitle}>Network Type</h4>
                {['5G', '4G', '3G'].map(network => (
                    <label key={network} style={styles.filterOption}>
                        <input type="checkbox" style={styles.checkbox} />
                        {network}
                    </label>
                ))}
            </div>

            <div style={styles.filterGroup}>
                <h4 style={styles.filterTitle}>Categories</h4>
                <div style={{ fontSize: '14px', color: '#2874f0', cursor: 'pointer'}}>
                    Mobiles & Accessories
                </div>
                <div style={{ fontSize: '14px', color: '#444', marginLeft: '15px' }}>
                    Mobiles
                </div>
            </div>
        </div>
    );
};

const ProductItem = ({ product }) => {
    const priceKey = product.price ? 'price' : 'product_price';
    const price = product[priceKey];

    const isAssured = [1, 2, 9, 11].includes(product.id);
    const ASSURED_BADGE_URL = "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_9e47c1.png";

    const specs = product.specifications;
    
    // Collect only the requested specifications into a simple array (single item per line)
    const specsList = [
        specs.ram,
        specs.storage_expandable, 
        specs.display,            
        specs.rear_camera,        
        specs.battery,
        // Correctly access and include warranty details
        product.warranty ? product.warranty.phone_warranty : null, 
    ].filter(Boolean); // Filter out any empty/null/undefined values


    return (
        <div style={styles.productItem}>
            <div style={styles.productImageContainer}>
                <img src={product.image} alt={product.product_name} style={styles.productImage} />
                <button style={styles.addToCompare}>Add to Compare</button>
            </div>
            <div style={styles.productDetails}>
                <div style={styles.productInfoPrimary}>
                <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }} >
                    <h3 style={styles.productName}>
                        {product.product_name}
                    </h3>
                </Link>
                    <div style={styles.ratingContainer}>
                        <span style={styles.ratingScore}>{product.rating.score} <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg==" className="Rza2QY" alt="Star"></img></span>
                        <span style={styles.ratingText}>
                            ({product.rating.total_ratings})
                            ({product.rating.total_reviews}) 
                        </span>
                    </div>
                
                    <ul style={styles.productSpecs}>
                        {specsList.map((spec, index) => (
                            <li key={index} style={styles.productSpecItem}>{spec}</li>
                        ))}
                    </ul>
                </div>
                <div style={styles.productPricing}>
                    
                    <div style={styles.priceAndBadgeContainer}>
                        <div style={styles.currentPrice}>{price.current_price}</div>
                        {isAssured && (
                            <img src={ASSURED_BADGE_URL} alt="F-Assured" style={styles.assuredBadgeImage} />
                        )}
                    </div>

                    <div style={styles.priceDetails}>
                        <span style={styles.originalPrice}>
                            {price.original_price}
                        </span>
                        <span style={styles.discountPercentage}>
                            {price.discount_percentage}
                        </span>
                    </div>
                    {product.offers.exchange_offer && (
                        <p style={styles.offerText}
                            dangerouslySetInnerHTML={{ __html: product.offers.exchange_offer  }}/>
                    )}
                    {product.offers.bank_offer && (
                        <p style={styles.offerText}>{product.offers.bank_offer}</p>
                    )}
                </div>
            </div>
        </div>
    );
};


const ProductListings = ({ mobilePhones, totalResults }) => {

    return (
        <div style={styles.listingsContainer}>
            <h2 style={styles.listingHeader}>
                Showing 1 - {mobilePhones.length} of {totalResults} results for "mobile"
            </h2>
            <div style={styles.sortingOptions}>
                <span>Sort By</span>
                <a href="/#" style={{...styles.sortLink, ...styles.sortLinkActive}}>Relevance</a>
                <a href="/#" style={styles.sortLink}>Popularity</a>
                <a href="/#" style={styles.sortLink}>Price -- Low to High</a>
                <a href="/#" style={styles.sortLink}>Price -- High to Low</a>
                <a href="/#" style={styles.sortLink}>Newest First</a>
            </div>

            {mobilePhones.map((product) => (
                <ProductItem key={product.id} product={product} />
            ))}
        </div>
    );
};

const SearchResultsPage = () => {
    const [filters, setFilters] = useState({
        brands: [],
        minPrice: '',
        maxPrice: '30000+',
    });

    const allMobilePhones = productData.filter(p => p.id !== 3 && p.id !== 12 && p.id !== 13);
    const totalResults = allMobilePhones.length;

    const filteredMobilePhones = allMobilePhones.filter(product => {
        const productName = product.product_name.toUpperCase();
        const brandMatch = filters.brands.length === 0 || 
                           filters.brands.some(brand => productName.includes(brand.toUpperCase()));

        return brandMatch;
    });

    return (
        <div style={styles.pageLayout}>

            <ProductFilters filters={filters} setFilters={setFilters} />
            <div style={styles.listingsArea}>
                <ProductListings mobilePhones={filteredMobilePhones} totalResults={totalResults} />
            </div>
        </div>
    );
};

export default SearchResultsPage;