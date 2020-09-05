import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasketIcon";


function Header() {
  return (
  <nav className="header">
    {/*logo on the left -> img */}
    <Link to="/">
<img className="header_logo"
 src="https://www.freelogodesign.org/file/app/blog/20180911090509731amazon_logo_RGB.jpg" 
alt="amazon123"
/>
</Link>
{/* search box */}
<div className="header_search">
<input type="text" className="header_searchInput"/>
<searchIcon className="header_searchIcon"/>
</div>

{/* 3 links */}
<div className="header_nav">
  {/* 1st link */}
  <Link to="/login" className="header_Link">
  <div className="header_option">
    <span className="header_optionLineone">hello qazi</span>
    <span className="header_optionLineTwo">Sign in</span>

  </div>
  </Link>

  {/* 2nd link */}
  <Link to="/" className="header_Link">
  <div className="header_option">
    <span className="header_optionLineone">returns</span>
    <span className="header_optionLineTwo">& Orders</span>

  </div>
  </Link>

  {/* 3rd link */}
  <Link to="/" className="header_Link">
  <div className="header_option">
    <span className="header_optionLineone">your</span>
    <span className="header_optionLineTwo">prime</span>
  </div>
  </Link>

  {/* 4th link */}
<Link to="/checkout">
<div className="header_optionBasket">
  {/*shoping basket icon */}
<ShoppingBasketIcon/>
  {/* number of items in the basket */}
<span className="header_optionLineTwo header_basketCount">0</span>
</div>
</Link>


</div>
  </nav>
  );
}

export default Header;
