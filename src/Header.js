import React from 'react';
import { DiDart, DiSafari } from 'react-icons/di';
import { SiD, SiD3Dotjs } from 'react-icons/si';
import { Link } from 'react-router-dom';

const CartIcon = () => (
   <svg className="GAbRIN" width="14" height="14" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
     <path className="cziJ98" d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86" fill="#fff"></path></svg>
);

const DownArrowIcon = ({ className }) => (
   <svg width="4.7" height="8" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="CGMB7B">
     <path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#878787" class="CPYntE"></path></svg>
);

const menuData = [
  {     
    title: "Electronics",
    category: "electronics",
    columns: [
      {
        heading: "Mobiles",
        links: ["Mi", "Realme", "Samsung", "Infinix", "OPPO", "Apple", "Vivo", "Honor", "Asus", "Poco X2", "realme Narzo 10", "Infinix Hot 9", "IQOO 3", "iPhone SE", "Motorola razr", "realme Narzo 10A", "Motorola g8 power lite"]
      },
      {
        heading: "Mobile Accessories",
        links: ["Mobile Cases", "Headphones & Headsets", "Power Banks", "Screenguards", "Memory Cards", "Smart Headphones", "Mobile Cables", "Mobile Chargers", "Mobile Holders"],
        subGroups: [
          {
            heading: "Smart Wearable Tech",
            links: ["Smart Watches", "Smart Glasses(VR)", "Smart Bands"]
          },
          {
            heading: "Health Care Appliances",
            links: ["Bp Monitors", "Weighing Scale"]
          }
        ]
      },
      {
        heading: "Laptops",
        links: ["Gaming Laptops"],
        subGroups: [
          { heading: "Desktop PCs" },
          { heading: "Gaming & Accessories" },
          {
            heading: "Computer Accessories",
            links: ["External Hard Disks", "Pendrives", "Laptop Skins & Decals", "Laptop Bags", "Mouse"]
          },
          {
            heading: "Computer Peripherals",
            links: ["Printers & Ink Cartridges", "Monitors"]
          },
          {
            heading: "Tablets",
            links: ["Apple iPads"]
          }
        ]
      },
      {
        heading: "Televisions", 
        isFeatured: true,
        subGroups: [
          {
            heading: "Speakers",
            links: ["Home Audio Speakers", "Soundbars", "Home Theatres", "Bluetooth Speakers", "DTH Set Top Box"]
          },
          {
            heading: "Smart Home Automation",
            links: ["Google Nest"]
          },
          {
            heading: "Camera",
            links: ["DSLR & Mirrorless", "Compact & Bridge Cameras", "Sports & Action"]
          },
          {
            heading: "Camera Accessories",
            links: ["Lens", "Tripods"]
          },
          {
            heading: "Network Components",
            links: ["Routers"]
          }
        ]
      },
      {
        heading: "Featured",
        isFeatured: true,
        links: ["Google Assistant Store", "Laptops on Buyback Guarantee", "Flipkart SmartBuy", "Li-Polymer Power Banks", "Sony PS4 Pro & Slim", "Apple Products", "Microsoft Store", "Lenovo Phab Series", "JBL Speakers", "Smartphones On Buyback Guarantee", "Philips", "Dr. Morepen", "Complete Mobile Protection", "Mobiles No Cost EMI", "Huawei Watch Gt 2e Smart Watch"]
      }
    ]
  },
  {
    title: "TVs & Appliances",
    category: "tvs-appliances",
    columns: [
      {
        heading: "Television",
        subGroups: [
          { heading: "New Launches" },
          { heading: "Smart & Ultra HD" },
          {
            heading: "Top Brands",
            links: ["Mi", "Vu", "Thomson", "Samsung", "IFFALCON by TCL", "Nokia", "LG", "realme", "Motorola"]
          },
          {
            heading: "Shop by Screen Size",
            links: ["24 & below", "28-32", "39-43", "48-55", "60 & above"]
          }
        ]
      },
      {
        heading: "Washing Machine",
        links: ["Fully Automatic Front Load", "Semi Automatic Top Load", "Fully Automatic Top Load"],
        subGroups: [
          {
            heading: "Air Conditioners",
            links: ["Inverter AC", "Split ACs", "Window ACs"]
          },
          {
            heading: "Shop By Brand",
            links: ["LG", "Hitachi", "Carrier"]
          },
          {
            heading: "Refrigerators",
            links: ["Single Door", "Double Door", "Triple door", "Side by Side", "Convertible"]
          }
        ]
      },
      {
        heading: "Kitchen Appliances",
        links: ["Microwave Ovens", "Oven Toaster Grills(OTG)", "Juicer/Mixer/Grinder", "Electric Kettle", "Induction Cooktops", "Chimneys", "Hand Blenders", "Sandwich Makers", "Pop Up Toasters", "Electric Cookers", "Wet Grinders", "Food Processors", "Coffee Makers", "Dishwashers"],
        subGroups: [
          { heading: "Healthy Living Appliances" }
        ]
      },
      {
        heading: "Small Home Appliances",
        isFeatured: true,
        links: ["Irons", "Water Purifiers", "Fans", "Air Coolers", "Inverters", "Vaccum Cleaners", "Sewing Machines", "Voltage Stabilizers", "Water Geyzers", "Immersion Rods"],
        subGroups: [
          {
            heading: "Top Brands",
            links: ["Livpure", "Philips", "Bajaj", "IFB", "Eureka Forbes", "Kaff"]
          }
        ]
      },
      {
        heading: "Buying Guides",
        isFeatured: true,
        links: ["Televisions", "Washing Machines", "Refrigerators", "Air Conditioners", "Water Purifiers", "Air Purifiers", "Chimneys", "Water Geysers"],
        subGroups: [
          {
            heading: "New Launches",
            links: ["Coocaa Smart TVs", "Nokia (55) 4K Android TV", "Mi (32) 4A Pro Android TV", "MarQ (43) FHD Smart TV", "LG Refrigerators", "Thomson (40) 4K Smart TV", "Whirlpool Refrigerators", "Kodak (22) | (32) LED TVs"]
          }
        ]
      }
    ]
  },
  { 
    title: "Men", 
    category: "men", 
    columns: [
      {
        heading: "Footwear",
        links: ["Sports Shoes", "Casual Shoes", "Formal Shoes", "Sandals & Floaters", "Flip-Flops", "Loafers", "Boots", "Running Shoes", "Sneakers"],
        subGroups: [
          {
            heading: "Men's Grooming",
            links: ["Deodorants", "Perfumes", "Beard Care & Grooming", "Shaving & AfterShave", "Sexual Wellness"]
          }
        ]
      },
      {
        heading: "Clothing",
        links: ["T-Shirts", "Formal Shirts", "Casual Shirts"],
        subGroups: [
          {
            heading: "Bottom wear",
            links: ["Jeans", "Casual Trousers", "Formal Trousers", "Track pants", "Shorts", "Cargos", "Three Fourths"]
          },
          { heading: "Suits, Blazers & Waistcoats" },
          { heading: "Ties, Socks, Caps & More" },
          { heading: "Fabrics" }
        ]
      },
      {
        heading: "Winter Wear",
        links: ["Sweatshirts", "Jackets", "Sweater", "Tracksuits"],
        subGroups: [
          {
            heading: "Ethnic wear",
            links: ["Kurta", "Ethnic Sets", "Sherwanis", "Ethnic Pyjama", "Dhoti", "Lungi"]
          },
          {
            heading: "Innerwear & Loungewear",
            links: ["Briefs & Trunks", "Vests", "Boxers", "Pyjamas and Lounge Pants", "Thermals", "Night Suits"]
          },
          { heading: "Raincoats & Windcheaters" }
        ]
      },
      {
        heading: "Watches",
        isFeatured: true,
        links: ["Fastrack", "Casio", "Titan", "Fossil", "Sonata"],
        subGroups: [
          {
            heading: "Accessories",
            links: ["Backpacks", "Wallets", "Belts", "Sunglasses", "Luggage & Travel", "Frames", "Jewellery"]
          },
          { heading: "Sports & Fitness Store" }
        ]
      },
      {
        heading: "Smart Watches",
        isFeatured: true,
        subGroups: [
          { heading: "Smart Bands" },
          {
            heading: "Personal Care Appliances",
            links: ["Trimmers", "Shavers", "Grooming Kits"]
          },
          {
            heading: "Featured",
            links: ["Watches Store", "Footwear Club", "Bags & Wallet", "T-Shirt Store", "Adidas", "Beardo", "Reebok", "Skechers", "Nike"]
          }
        ]
      }
    ]
  },
  { title: "Women", category: "women", hasDropdown: false },
  { title: "Baby & Kids", category: "baby-kids", hasDropdown: false },
  { title: "Home & Furniture", category: "home-furniture", hasDropdown: false },
  { title: "Sports, Books & More", category: "sports-books", hasDropdown: false },
  { title: "Flights", category: "flights", hasDropdown: false, noIcon: true },
  { title: "Offer Zone", category: "offers", hasDropdown: false, noIcon: true }
];

const DropdownColumn = ({ column }) => (
  <div className={`dropdown-column ${column.isFeatured ? 'featured-column' : ''}`}>
    {column.heading && (
        <h4>
            {column.heading}
        </h4>
    )}
    
    {column.links && column.links.length > 0 && (
      <ul>
        {column.links.map((linkTitle, index) => (
          <li key={index}><a href="#">{linkTitle}</a></li>
        ))}
      </ul>
    )}

    {column.subGroups && column.subGroups.map((sub, subIndex) => (
      <React.Fragment key={subIndex}>
        {sub.heading && <h4>{sub.heading}</h4>}
        {sub.links && sub.links.length > 0 && (
          <ul>
            {sub.links.map((linkTitle, index) => (
              <li key={index}><a href="#">{linkTitle}</a></li>
            ))}
          </ul>
        )}
      </React.Fragment>
    ))}
  </div>
);

const Header = () => {
    const categories = [
        { name: 'Electronics', hasDropdown: true },
        { name: 'TVs & Appliances', hasDropdown: true },   
        { name: 'Men', hasDropdown: true },
        { name: 'Women', hasDropdown: true },
        { name: 'Baby & Kids', hasDropdown: true },
        { name: 'Home & Furniture', hasDropdown: true },
        { name: 'Sports, Books & More', hasDropdown: true },
        { name: 'Flights', hasDropdown: false },
        { name: 'Offer Zone', hasDropdown: false }
    ];
    
    return (
        <div className="main-navbar-container">
            <style>{navbarStyles}</style>

            <header className="top-navbar">
                <div className="header-wrapper">
                    <Link to="/" className="navbar-logo">
                        <img width="75" src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="Flipkart" title="Flipkart" className="W5mR4e" />
                        <div className="flipkart-explore-plus">
                            <span style={{ color: '#f0f0f0' }}>Explore</span> 
                            <span className="plus-text">Plus</span>
                            <img width="10" src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png" alt="Plus" />
                        </div>
                    </Link>

                    <div className="search-container">
                        <input type="text" placeholder='Search for products, brands and more' className="search-input" aria-label="Search" />
                        <button className="search-button">
                            <svg width="20" height="20" viewBox="0 0 17 18" className="" xmlns="http://www.w3.org/2000/svg">
                            <g fill="#2874F1" fillRule="evenodd"><path className="EwE-Fa" d="m11.618 9.897l4.225 4.212c.092.092.101.232.02.313l-1.465 1.46c-.081.081-.221.072-.314-.02l-4.216-4.203"></path><path className="EwE-Fa" d="m6.486 10.901c-2.42 0-4.381-1.956-4.381-4.368 0-2.413 1.961-4.369 4.381-4.369 2.42 0 4.381 1.956 4.381 4.369 0 2.413-1.961 4.368-4.381 4.368m0-10.835c-3.582 0-6.486 2.895-6.486 6.467 0 3.572 2.904 6.467 6.486 6.467 3.582 0 6.486-2.895 6.486-6.467 0-3.572-2.904-6.467-6.486-6.467"></path></g></svg>
                        </button>
                    </div>
                    
                    <nav className="navbar-actions">
                        <Link to="/login" className="action-link login-btn">Login</Link>
                        <Link to="/seller" className="action-link">Become a Seller</Link>
                        <Link to="/more" className="action-link more-link">More
                        <text><svg width="4.7" height="8" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="Wto0b0"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff" class="-dC5Le"></path></svg></text></Link>
                        <Link to="/cart" className="action-link cart-link">
                            <CartIcon />
                            <span className="cart-text">Cart</span>
                        </Link>
                    </nav>
                </div>
            </header>

            <div className="bottom-navbar">
                <ul className="category-list">
                    {categories.map((category, index) => (
                        <li key={index} className={category.hasDropdown ? 'has-dropdown' : ''} >
                            <Link to={`/${category.name.toLowerCase().replace(/ /g, '-')}`} className="category-link" >
                               {category.name}
                               {category.hasDropdown && (
                                    <DownArrowIcon className="dropdown-icon" />
                               )}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const navbarStyles = `
    .category-list {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }

    .main-navbar-container {
        font-family: 'Inter', sans-serif;
        position: sticky;
        top: 0;
        z-index: 100;
        box-shadow: 0 1px 2px 0 rgba(0,0,0,.2);
    }

    .top-navbar {
        background-color: #2874f0;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 56px;
        padding: 0 180px;
    }
    .header-wrapper {
        max-width: 1400px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 40px;
    }
    .navbar-logo {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        margin-right: 16px;
        text-decoration: none;
    }
    .flipkart-explore-plus {
        font-size: 11px;
        font-style: italic;
        color: #fff;
        line-height: 1;
        display: flex;
        align-items: center;
        margin-top: -3px; 
    }
    .flipkart-explore-plus img {
        height: 10px;
        margin-left: 3px;
    }
    .plus-text {
       color: #ffe500;
       font-weight: 500;
       margin-right: 2px;
    }
    .CGMB7B {
        transform: rotate(270deg); 
        margin-left: 5px;
    }
    .CGMB7B:hover {
        transform: rotate(90deg);
    }
    .search-container {
        display: flex;
        width: 560px; 
        min-width: 300px;
        height: 36px;
        background-color: #f0f5ff;
        border-radius: 2px;
        overflow: hidden;
        margin: 0 20px;
        align-items: center;
    }
    .search-input {
        border: none;
        padding: 0 16px;
        font-size: 14px;
        flex-grow: 1;    
        outline: none;
        height: 100%; 
    }
    .search-input::placeholder {
        color: #717478;          
    }
    .search-button {
        background-color: #ffffff;
        border: none;
        padding: 0 12px;
        cursor: pointer;
        color: #2874f0;
        font-size: 18px;
        display: flex;
        align-items: center;
        height: 100%;
    }
    .navbar-actions {
        display: flex;
        align-items: center;
        gap: 30px;
    }
    .action-link {
        text-decoration: none;
        color: #fff;
        font-weight: bold;
        font-size: 16px;
        cursor: pointer;
        display: flex;
        align-items: center;
        white-space: nowrap;
        line-height: 20px;
    }
        .action-link text {
        transform: rotate(270deg);
        }
    .login-btn {
        background-color: #fff;
        color: #2874f0;
        padding: 5px 30px;
        border-radius: 2px;
        font-weight: bold;
    }
    .cart-link {
        gap: 8px;
        font-weight: bold;
    }
    .bottom-navbar {
        background-color: #fff;
        height: 39px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 16px;
    }
    .has-dropdown {
        position: relative;
    }
    .category-link {
        text-decoration: none;
        color: #212121;
        font-size: 14px;
        font-weight: bold;
        padding: 0 20px;
        height: 100%;    
        display: flex;
        align-items: center;
        white-space: nowrap;
        position: relative;
    }
    .category-link:hover {
         color: #2874f0;
    }
    .dropdown-icon {
        margin-left: 5px;
        transition: transform 0.2s ease-in-out;
        width: 8px;
        height: 12px;
        transform: rotate(-90deg);
    }
    .has-dropdown:hover .dropdown-icon {
        transform: rotate(90deg);
    }
    @media (max-width: 768px) {
        .bottom-navbar { 
        display: none; 
    }
    }
`;

export default Header;