import React, { useState } from 'react';
import { DiCssdeck, DiDart } from 'react-icons/di';
import { FcFilledFilter } from 'react-icons/fc';
import { GiBigGear, GiElectricalResistance, GiFrogFoot, GiGhost, GiGoldNuggets } from 'react-icons/gi';
import { GrGallery } from 'react-icons/gr';
import { HiHashtag } from 'react-icons/hi';
import { PiYarnThin } from 'react-icons/pi';
import { RiRestTimeFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import './ProductListings.css';   

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
    { 
        "id": 3, 
        "product_name": "Nokia 105 Single SIM, Keypad Mobile Phone", 
        "image": "./images/105-single-sim-keypad-mobile-phone-with-wireless-fm-radio-ta.jpeg", 
        "price": { 
            "current_price": "₹939", 
            "original_price": "₹1,599", 
            "discount_percentage": "41% off" }, 
        "rating": { 
            "score": 4.1, 
            "total_ratings": "1,71,013 Ratings", 
            "total_reviews": "10,902 Reviews" }, 
        "specifications": { 
            "ram": "4 MB RAM | 10 MB ROM", 
            "display": "3.86 cm (1.52 inch) Display", 
            "battery": "800 mAh Battery" }, 
        "warranty": { 
            "phone_warranty": "1 Year Manufacturer Warranty on Handset & 6 Months Warranty on Accessories" }, 
        "offers": { 
            "phones_left": "Only 1 left", 
            "bank_offer": "Bank Offer" } 
    },
    { 
        "id": 4, 
        "product_name": "Motorola g45 5G (Brilliant Blue, 128 GB)", 
        "image": "./images/-original-imah3xk892aj9gck.jpeg", 
        "product_price": { 
            "current_price": "₹11,999", 
            "original_price": "₹14,999", 
            "discount_percentage": "20% off" }, 
            "rating": {  
                "score": 4.3, 
                "total_ratings": "2,13,881 Ratings", 
                "total_reviews": "10,880 Reviews" }, 
            "specifications": { 
                    "ram": "8 GB RAM | 128 GB ROM", 
                    "storage_expandable": "Expandable Upto 1 TB", 
                    "display": "16.51 cm (6.5 inch) HD+ Display", 
                    "rear_camera": "50MP + 2MP | 16MP Front Camera", 
                    "battery": "5000 mAh Battery" }, 
            "warranty": { 
                "phone_warranty": "1 Year Warranty on Handset and 6 Months Warranty for In the Box Accessories" }, 
            "offers": { 
                "exchange_offer": "Upto <b>₹8,350</b> Off on Exchange", 
                "bank_offer": "Bank Offer" } 
    },
    { 
        "id": 5, 
        "product_name": "Samsung Galaxy F05 (Twilight Blue, 64 GB)", 
        "image": "./images/-original-imah56hkgehywn5b.jpeg", 
        "product_price": { 
            "current_price": "₹6,249", 
            "original_price": "₹9,999", 
            "discount_percentage": "37% off" }, 
        "rating": { "score": 4.2, 
            "total_ratings": "11,399 Ratings", 
            "total_reviews": "488 Reviews" }, 
        "specifications": { 
            "ram": "4 GB RAM| 64 GB ROM", 
            "storage_expandable": "Expandable Upto 1 TB", 
            "display": "17.12 cm (6.74 inch) HD+ Display", 
            "rear_camera": "50MP + 2MP | 8MP Front Camera", 
            "battery": "5000 mAh Battery" },
        "warranty": { 
            "phone_warranty": "1 Year Manufacturer Warranty and 6 Months Warranty for In-Box Accessories" }, 
        "offers": { 
            "exchange_offer": "Upto <b>₹4,150</b> Off on Exchange", 
            "bank_offer": "Bank Offer" }
    },
    { 
        "id": 6, 
        "product_name": "realme Narzo 80 Lite 4G (Beach Gold, 64 GB)", 
        "image": "./images/narzo-80-lite-4g-rmx5313-realme-original-imahegxgdvbva7zf.jpeg", 
        "product_price": { 
            "current_price": "₹7,233", 
            "original_price": "₹8,999", 
            "discount_percentage": "19% off" }, 
        "rating": { 
            "score": 4.3, 
            "total_ratings": "11,399 Ratings", 
            "total_reviews": "488 Reviews" }, 
        "specifications": { 
            "ram": "4 GB RAM | 64 GB ROM", 
            "display": "17.12 cm (6.74 inch) HD+ Display", 
            "rear_camera": "13MP Rear Camera", 
            "battery": "6300 mAh Battery" }, 
        "warranty": { 
            "phone_warranty": "1 Year brand Warranty" }, 
        "offers": { 
            "exchange_offer": "Upto <b>₹3,950</b> Off on Exchange", 
            "bank_offer": "Bank Offer" } 
    },
    { 
        "id": 7, 
        "product_name": "POCO C71 (Power Black, 128 GB)", 
        "image": "./images/-original-imahawgahmkbjxyj.jpeg", 
        "product_price": { 
            "current_price": "₹6,999", 
            "original_price": "₹9,999", 
            "discount_percentage": "30% off" }, 
        "rating": { 
            "score": 4.1, 
            "total_ratings": "14,636 Ratings", 
            "total_reviews": "721 Reviews" }, 
        "specifications": { 
            "ram": "6 GB RAM | 128 GB ROM", 
            "storage_expandable": "Expandable Upto 2 TB", 
            "display": "17.48 cm (6.88 inch) HD+ Display", 
            "rear_camera": "32MP Rear Camera | 8MP Front Camera", 
            "battery": "5200 mAh Battery" }, 
        "warranty": { 
            "phone_warranty": "1 Year Manufacturer Warranty and 6 Months Warranty for In the Box Accessories" }, 
        "offers": { 
            "exchange_offer": "Upto <b>₹4,700</b> Off on Exchange", 
            "bank_offer": "Bank Offer" } 
    },
    { 
        "id": 8,
        "product_name": "realme 15 Pro 5G(Flowing Silver, 256 GB)", 
        "image": "./images/vicky.webp", 
        "product_price": { 
            "current_price": "₹33,999", 
            "original_price": "₹37,999", 
            "discount_percentage": "10% off" }, 
        "rating": { 
            "score": 4.3, 
            "total_ratings": "4,888 Ratings", 
            "total_reviews": "446 Reviews" },
        "specifications": { 
            "ram": "8 GB RAM | 256 GB ROM", 
            "display": "17.27 cm (6.8 inch) Display", 
            "rear_camera": "50MP + 50MP | 50MP Front Camera", 
            "battery": "7000 mAh Battery" },
        "warranty": { 
            "phone_warranty": "1 Year Manufacturer Warranty and 6 Months Warranty for In the Box Accessories" }, 
        "offers": { 
            "phones_left": "Only 1 left", 
            "bank_offer": "Bank Offer" } 
    },
    { 
        "id": 9, 
        "product_name": "vivo T4 5G (Phantom Grey, 128 GB)", 
        "image": "./images/vivo.webp", 
        "product_price": { 
            "current_price": "₹20,999", 
            "original_price": "₹25,999", 
            "discount_percentage": "19% off" }, 
        "rating": { 
            "score": 4.5, 
            "total_ratings": "70,252 Ratings", 
            "total_reviews": "3,204 Reviews" }, 
        "specifications": { 
            "ram": "8 GB RAM | 128 GB ROM", 
            "storage_expandable": "Expandable Upto 2 TB", 
            "display": "17.28 cm (6.77 inch) HD+ Display", 
            "rear_camera": "50MP (OIS) + 2MP | 32MP Front Camera", 
            "battery": "7300 mAh Battery" }, 
        "warranty": { 
            "phone_warranty": "1 Year Manufacturer Warranty and 6 Months Warranty for In the Box Accessories" }, 
        "offers": { 
            "exchange_offer": "Upto <b>₹16,100</b> Off on Exchange", 
            "bank_offer": "Bank Offer" } },
    { 
        "id": 10, 
        "product_name": "REDMI A5 (Just Black, 64 GB)", 
        "image": "./images/-original-imahb56zdgszp7tg.jpeg", 
        "product_price": { 
            "current_price": "₹6,499", 
            "original_price": "₹8,999", 
            "discount_percentage": "27% off" }, 
        "rating": { 
            "score": 4.2, 
            "total_ratings": "3,267 Ratings", 
            "total_reviews": "149 Reviews" }, 
        "specifications": { 
            "ram": "3 GB RAM | 64 GB ROM", 
            "storage_expandable": "Expandable Upto 2 TB", 
            "display": "17.48 cm (6.88 inch) HD+ Display", 
            "rear_camera": "32MP Rear Camera | 8MP Front Camera", 
            "battery": "5200 mAh Battery" }, 
        "warranty": { 
            "phone_warranty": "1 Year Manufacturer Warranty and 6 Months Warranty for In the Box Accessories" }, 
        "offers": { 
            "exchange_offer": "Upto <b>₹4,350</b> Off on Exchange", 
            "bank_offer": "Bank Offer" } 
    },
    { 
        "id": 11, 
        "product_name": "POCO C75 5G (Aqua Bliss, 64 GB)", 
        "image": "./images/-original-imahbr2cz5apcwze (1).jpeg", 
        "product_price": { 
            "current_price": "₹7,699", 
            "original_price": "₹10,999", 
            "discount_percentage": "30% off" }, 
        "rating": { 
            "score": 4.2, 
            "total_ratings": "1,03,254 Ratings", 
            "total_reviews": "4,829 Reviews" }, 
        "specifications": { 
            "ram": "3 GB RAM | 64 GB ROM", 
            "storage_expandable": "Expandable Upto 1 TB", 
            "display": "17.48 cm (6.88 inch) HD+ Display", 
            "rear_camera": "50MP Rear Camera | 5MP Front Camera", 
            "battery": "5160 mAh Battery" }, 
        "warranty": { 
            "phone_warranty": "1 Year Manufacturer Warranty and 6 Months Warranty for In the Box Accessories" }, 
        "offers": { 
            "exchange_offer": "Upto <b>₹5200</b> Off on Exchange", 
            "bank_offer": "Bank Offer" } 
    },
    { 
        "id": 12, 
        "product_name": "Samsung Guru Music 2 B310ED", 
        "image": "./images/guru-music-2-b310ed-guru-music-2-samsung-original-imahfyupkv.jpeg", 
        "product_price": { 
            "current_price": "₹898", 
            "original_price": "₹1,999", 
            "discount_percentage": "55% off" }, 
        "rating": { 
            "score": 3.1, 
            "total_ratings": "24,038 Ratings", 
            "total_reviews": "1,689 Reviews" }, 
        "specifications": { 
            "ram": "32 MB RAM | 32 MB ROM", 
            "storage_expandable": "Expandable Upto 100 MB", 
            "display": "4.57 cm (1.8 inch) VGA Display", 
            "rear_camera": "0MP Rear Camera | 0MP Front Camera", 
            "battery": "800 mAh Battery" }, 
        "warranty": { 
            "phone_warranty": "1 Year Seller Warranty" }, 
        "offers": { 
            "exchange_offer": "Upto <b>₹3,950</b> Off on Exchange", 
            "bank_offer": "Bank Offer" } },
    { 
        "id": 13, 
        "product_name": "HOTLINE TURTLE", 
        "image": "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/1/v/i/classic-turtle-classic-turtle-hotline-original-imahb9ghf3g4hc9c.jpeg?q=70&amp;amp;crop=false", 
        "product_price": { 
            "current_price": "₹699", 
            "original_price": "₹999", 
            "discount_percentage": "30% off" }, 
        "rating": { 
            "score": 3.7, 
            "total_ratings": "376 Ratings", 
            "total_reviews": "27 Reviews" }, 
        "specifications": {
            "ram": "32 MB RAM | 32 MB ROM", 
            "storage_expandable": "Expandable Upto 16 GB", 
            "display": "4.57 cm (1.8 inch) NA Display", 
            "rear_camera": "1.3MP + 0MP Rear Camera | 0MP Front Camera", 
            "battery": "1100 mAh Battery" }, 
        "warranty": { 
            "phone_warranty": "3 Months domestic Warranty" }, 
        "offers": { 
            "phones_left": "Only 1 left", 
            "bank_offer": "Bank Offer" } 
    },
    { 
        "id": 14, 
        "product_name": "Samsung Galaxy S25 Ultra", 
        "image": "./images/ultra.webp", 
        "product_price": { 
            "current_price": "₹1,19,999", 
            "original_price": "₹1,29,999", 
            "discount_percentage": "7% off" }, 
        "rating": { 
            "score": 4.7, 
            "total_ratings": "2,012 Ratings", 
            "total_reviews": "222 Reviews" }, 
        "specifications": { 
            "ram": "12 GB RAM | 256 GB ROM", 
            "storage_expandable": "Expandable Upto 1 TB", 
            "display": "17.53 cm (6.9 inch) Quad HD+ Display", 
            "rear_camera": "200MP + 50MP + 50MP + 10MP Rear Camera", 
            "front_camera": "12MP Front Camera", 
            "battery": "5000 mAh Battery" }, 
        "warranty": { 
            "phone_warranty": "1 Year Manufacturer Warranty and 6 Months Warranty for In the Box Accessories" }, 
        "offers": { 
            "exchange_offer": "Upto <b>₹41,350</b> Off on Exchange", 
            "bank_offer": "Bank Offer" } 
    },
    { 
        "id": 15, 
        "product_name": "MOTOROLA g35 5G (Midnight Black, 128 GB)", 
        "image": "./images/g35-5g-pb3h0000in-motorola-original-imah7c6ykgz5rtgv.jpeg", 
        "product_price": { 
            "current_price": "₹8,999", 
            "original_price": "₹12,499", 
            "discount_percentage": "28% off" }, 
        "rating": { 
            "score": 4.2, 
            "total_ratings": "75,633 Ratings", 
            "total_reviews": "5,241 Reviews" }, 
        "specifications": { 
            "ram": "4 GB RAM | 128 GB ROM", 
            "storage_expandable": "Expandable Upto 1 TB", 
            "display": "17.07 cm (6.72 inch) Full HD+ Display", 
            "rear_camera": "50MP + 8MP Rear Camera", 
            "front_camera": "16MP Front Camera", 
            "battery": "5000 mAh Battery" }, 
        "warranty": { 
            "phone_warranty": "1 Year Manufacturer Warranty and 6 Months Warranty for In the Box Accessories" }, 
        "offers": { 
            "exchange_offer": "Upto <b>₹6,150</b> Off on Exchange", 
            "bank_offer": "Bank Offer" } 
    },
    { 
        "id": 16, 
        "product_name": "Google Pixel 10 (Indigo, 256 GB)", 
        "image": "./images/google.webp", 
        "product_price": { 
            "current_price": "₹79,999", 
            "original_price": "₹1,10,999", 
            "discount_percentage": "40% off" }, 
        "rating": { 
            "score": 4.4, 
            "total_ratings": "549 Ratings", 
            "total_reviews": "52 Reviews" }, 
        "specifications": { 
            "ram": "12 GB RAM | 256 GB ROM", 
            "storage_expandable": "Expandable Upto 1 TB", 
            "display": "16.0 cm (6.3 inch) HD+ Display", 
            "rear_camera": "48MP + 13MP | 10.5MP Front Camera", 
            "battery": "4970 mAh Battery" }, 
        "warranty": { 
            "phone_warranty": "1 Year Domestic Warranty" }, 
        "offers": { 
            "exchange_offer": "Upto <b>₹53,650</b> Off on Exchange", 
            "bank_offer": "Bank Offer" } 
    }
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
        <div className="filter-sidebar">
            <h3>Filters</h3>

            <div className="filter-group">
                <h4 className="filter-title">Price</h4>
                <div className="price-range">
                    <input type="number" name="minPrice" placeholder="Min" className="price-input" onChange={handlePriceChange} />
                    <span className="price-separator">to</span>
                    <input type="number" name="maxPrice" placeholder="30000+" className="price-input" onChange={handlePriceChange} />
                </div>
            </div>

            <div className="filter-group">
                <h4 className="filter-title">Brand</h4>
                {uniqueBrands.slice(0, 5).map(brand => ( 
                    <label key={brand} className="filter-option">
                        <input type="checkbox" className="checkbox" checked={filters.brands.includes(brand)} onChange={() => handleBrandChange(brand)}/>
                        {brand}
                    </label>
                ))}
                {uniqueBrands.length > 5 && (
                    <div style={{color: '#2874f0', fontSize: '14px', cursor: 'pointer', marginTop: '5px'}}>
                        {uniqueBrands.length - 5} MORE
                    </div>
                )}
            </div>

            <div className="filter-group">
                <h4 className="filter-title">Network Type</h4>
                {['5G', '4G', '3G'].map(network => (
                    <label key={network} className="filter-option">
                        <input type="checkbox" className="checkbox" />
                        {network}
                    </label>
                ))}
            </div>

            <div className="filter-group">
                <h4 className="filter-title">Customer Ratings</h4>
                {['4★ & above', '3★ & above'].map(ratings => (
                    <label key={ratings} className="filter-option">
                        <input type="checkbox" className="checkbox" />
                        {ratings}
                    </label>
                ))}  
            </div>

            <div className="filter-group">
                <h4 className="filter-title">GST Invoice Available</h4>
                {['GST Invoice Available'].map(invoice => (
                    <label key={invoice} className="filter-option">
                        <input type="checkbox" className="checkbox" />
                        {invoice}
                    </label>
                ))}
            </div>

             <div className="filter-group">
                <h4 className="filter-title">RAM</h4>
                {['4 GB', '3 GB', '6 GB', '8 GB and Above'].map(ram => (
                    <label key={ram} className="filter-option">
                        <input type="checkbox" className="checkbox" />
                        {ram}
                    </label>
                ))}
            </div>

             <div className="filter-group">
                <h4 className="filter-title">Internal Storage</h4>
                {['256 GB & Above', '128 - 255.9 GB', '64 - 127.9 GB'].map(storage => (
                    <label key={storage} className="filter-option">
                        <input type="checkbox" className="checkbox" />
                        {storage}
                    </label>
                ))}
            </div>

            <div className="filter-group">
                <h4 className="filter-title">Battery Capacity</h4>
                {['4000 - 4999 mAh', '5000 - 5999 mAh', '5000 mAh Above'].map(battery => (
                    <label key={battery} className="filter-option">
                        <input type="checkbox" className="checkbox" />
                        {battery}
                    </label>
                ))}
            </div>

            <div className="filter-group">
                <h4 className="filter-title">Screen Size</h4>
                {['6.4 inch & Above', '6 inch above', '5,7 - 5.9 inch'].map(screen => (
                    <label key={screen} className="filter-option">
                        <input type="checkbox" className="checkbox" />
                        {screen}
                    </label>
                ))}
            </div>

            <div className="filter-group">
                <h4 className="filter-title">Primary Camera</h4>
                {['5 - 7.9 MP', 'Below 5 MP', '21 MP Above', '48 - 63.9 MP'].map(primary => (
                    <label key={primary} className="filter-option">
                        <input type="checkbox" className="checkbox" />
                         <span className="filter-text">{primary}</span>
                    </label>
                ))}
            </div>

            <div className="filter-group">
                <h4 className="filter-title">Secondary Camera</h4>
                {['12 - 12.9 MP', '16 - 20.9 MP', '21 MP Above', '5 - 7.9 MP'].map(secondary => (
                    <label key={secondary} className="filter-option">
                        <input type="checkbox" className="checkbox" />
                        {secondary}
                    </label>
                ))}
            </div>

            <div className="filter-group">
                <h4 className="filter-title">Processor Brand</h4>
                {['AMD', 'Apple', 'ARM'].map(processor => (
                    <label key={processor} className="filter-option">
                        <input type="checkbox" className="checkbox" />
                        {processor}
                    </label>
                ))}
            </div>

            <div className="filter-group">
                <h4 className="filter-title">Speciality</h4>
                {['Big Storage', 'Higher Performance', 'Long-lasting Battery'].map(speciality => (
                    <label key={speciality} className="filter-option">
                        <input type="checkbox" className="checkbox" />
                        {speciality}
                    </label>
                ))}
            </div>

            <div className="filter-group">
                <h4 className="filter-title">Resolution Type</h4>
                {['Full HD', 'Full HD+', 'FWVGA'].map(resolution => (
                    <label key={resolution} className="filter-option">
                        <input type="checkbox" className="checkbox" />
                        {resolution}
                    </label>
                ))}
            </div>

            <div className="filter-group">
                <h4 className="filter-title">Operating System</h4>
                {['Android', 'Blackberry', 'iOS'].map(operating => (
                    <label key={operating} className="filter-option">
                        <input type="checkbox" className="checkbox" />
                        {operating}
                    </label>
                ))}
            </div>

            <div className="filter-group">
                <h4 className="filter-title">Sim Type</h4>
                {['Dual Sim', 'Four Sim', 'Single Sim'].map(sim => (
                    <label key={sim} className="filter-option">
                        <input type="checkbox" className="checkbox" />
                        {sim}
                    </label>
                ))}
            </div>

            <div className="filter-group">
                <h4 className="filter-title">Offers</h4>
                {['Special Price', 'Buy More, Save More', 'No Cost EMI'].map(offers => (
                    <label key={offers} className="filter-option">
                        <input type="checkbox" className="checkbox" />
                        {offers}
                    </label>
                ))}
            </div>

            <div className="filter-group">
                <h4 className="filter-title">Features</h4>
                {['WiFi', 'NFC', 'FM Player'].map(features => (
                    <label key={features} className="filter-option">
                        <input type="checkbox" className="checkbox" />
                        {features}
                    </label>
                ))}
            </div>

            <div className="filter-group">
                <h4 className="filter-title">TYPE</h4>
                {['Smart Phones', 'Feature Phones'].map(type => (
                    <label key={type} className="filter-option">
                        <input type="checkbox" className="checkbox" />
                        {type}
                    </label>
                ))}
            </div>

            <div className="filter-group">
                <h4 className="filter-title">Number of cores</h4>
                {['Dual Core', 'Hexa Core', 'Octa Core'].map(cores => (
                    <label key={cores} className="filter-option">
                        <input type="checkbox" className="checkbox" />
                        {cores}
                    </label>
                ))}
            </div>

            <div className="filter-group">
                <h4 className="filter-title">Availability</h4>
                {['Exclude Out of Stock'].map(availability => (
                    <label key={availability} className="filter-option">
                        <input type="checkbox" className="checkbox" />
                        {availability}
                    </label>
                ))}
            </div>

            <div className="filter-group">
                <h4 className="filter-title">Discount</h4>
                {['50% or more', '40% or more', '20% or more', '10% or more'].map(discount => (
                    <label key={discount} className="filter-option">
                        <input type="checkbox" className="checkbox" />
                        {discount}
                    </label>
                ))}
            </div>

            <div className="filter-group">
                <h4 className="filter-title">Operating System Version Name</h4>
                {['Android Q', 'Belle', 'Eclair'].map(version => (
                    <label key={version} className="filter-option">
                        <input type="checkbox" className="checkbox" />
                        {version}
                    </label>
                ))}
            </div>

            <div className="filter-group">
                <h4 className="filter-title">Clock Speed</h4>
                {['1.5-1.9 GHz', '2-2.5 GHz', '2.5 & Above'].map(clock => (
                    <label key={clock} className="filter-option">
                        <input type="checkbox" className="checkbox" />
                        {clock}
                    </label>
                ))}
            </div>
        </div>
    );
};

const ProductItem = ({ product }) => {
    const priceKey = product.price ? 'price' : 'product_price';
    const price = product[priceKey];

    const isAssured = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].includes(product.id);
    const ASSURED_BADGE_URL = "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_9e47c1.png";

    const specs = product.specifications;
    
    const specsList = [
        specs.ram,
        specs.storage_expandable, 
        specs.display,            
        specs.rear_camera,        
        specs.battery,
        product.warranty ? product.warranty.phone_warranty : null, 
    ].filter(Boolean);

    return (
  <div className="product-item">
    <div className="product-image-container">
        <img src={product.image} alt={product.product_name} className="product-image" />
  
        <label className="add-to-compare-label">
            <input type="checkbox" className="add-to-compare-checkbox" />
            Add to Compare
        </label>
    </div>
    <div className="product-details">
        <div className="product-info-primary">
            <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }} >
                <h3 className="product-name">
                    {product.product_name}
                </h3>
            </Link>

            <div className="rating-container">
                <span className="rating-score">
                    {product.rating.score}
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg==" className="Rza2QY" alt="Star"></img>
                </span>
                <span className="rating-text">
                    {product.rating.total_ratings} &amp; {product.rating.total_reviews}
                </span>
            </div>

            <ul className="product-specs">
                {specsList.map((spec, index) => (
                    <li key={index} className="product-spec-item">{spec}</li>
                ))}
            </ul>
        </div>
        <div className="product-pricing">
            <div className="price-and-details-container">
                <div className="price-and-badge-container">
                    <div className="current-price">{price.current_price}</div>
                    {isAssured && (
                        <img src={ASSURED_BADGE_URL} alt="F-Assured" className="assured-badge-image" />
                    )}
                </div>
            </div>

                <div className="price-details">
                    <span className="original-price">
                        {price.original_price}
                    </span>
                    <span className="discount-percentage">
                        {price.discount_percentage}
                    </span>
            </div>
  
            {product.offers.exchange_offer && (
                <p className="offer-text"
                    dangerouslySetInnerHTML={{ __html: product.offers.exchange_offer  }}/>
            )}
            {product.offers.bank_offer && (
                <p className="offer-text1">{product.offers.bank_offer}</p>
            )}
        </div>
    </div>
</div>
    );
};

const ProductListings = ({ mobilePhones, totalResults, sortBy, setSortBy }) => {
    const sortOptions = [
         { label: 'Relevance', value: 'RELEVANCE' },
        { label: 'Popularity', value: 'POPULARITY' },
        { label: 'Price -- Low to High', value: 'PRICE_ASC' },
        { label: 'Price -- High to Low', value: 'PRICE_DESC' },
        { label: 'Newest First', value: 'NEWEST' },
    ];

    return (
        <div className="listings-container">
            <div className="search-header-bar">
                <div className="breadcrumb-container">
                    <Link to="/" className="breadcrumb">Home</Link>
                    <span className="arrow">&gt;</span>
                    <Link to="/mobiles-accessories" className="breadcrumb">Mobiles & A...</Link>
                    <span className="arrow">&gt;</span>
                    <span className="breadcrumb breadcrumb-active">Mobiles</span>
                </div>

                <div className="results-count">
                    Showing 1 - {mobilePhones.length} of {totalResults} results for "mobile"
                </div>
            </div>
            
            <div className="sorting-options">
                <span style={{color: '#212121', fontWeight: '500'}}>Sort By</span> 
                {sortOptions.map((option) => (
                    <span 
                        key={option.value}
                        onClick={() => setSortBy(option.value)}
                        className={sortBy === option.value ? 'sort-link-active' : 'sort-link'}
                    >
                        {option.label}
                    </span>
                ))}
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

    const [sortBy, setSortBy] = useState('RELEVANCE');
    const allMobilePhones = productData;
    const totalResults = '10,730'; 

    const getNumericPrice = (priceString) => {
        const price = priceString ? priceString.replace(/[₹,]/g, '') : '0';
        return parseFloat(price) || 0;
    };
    
    const sortedMobilePhones = [...allMobilePhones].sort((a, b) => {
        const aPriceKey = a.price ? 'price' : 'product_price';
        const bPriceKey = b.price ? 'price' : 'product_price';

        switch (sortBy) {
            case 'PRICE_ASC':
                return getNumericPrice(a[aPriceKey]?.current_price) - getNumericPrice(b[bPriceKey]?.current_price);
            case 'PRICE_DESC':
                return getNumericPrice(b[bPriceKey]?.current_price) - getNumericPrice(a[aPriceKey]?.current_price);
            case 'POPULARITY':
                return b.rating.score - a.rating.score;
            case 'NEWEST':
            default:
                return 0; 
        }
    });

    const displayedMobilePhones = sortedMobilePhones;

    return (
        <div className="page-layout">
            <ProductFilters filters={filters} setFilters={setFilters} />
            <div className="listings-area">
                <ProductListings mobilePhones={displayedMobilePhones} totalResults={totalResults} sortBy={sortBy} setSortBy={setSortBy} />
            </div>
        </div>
    );
};

export default SearchResultsPage;