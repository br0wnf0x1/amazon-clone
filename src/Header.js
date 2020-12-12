import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        {/* http://pngimg.com/uploads/amazon/amazon_PNG11.png */}
        <img
          src="https://bn1302files.storage.live.com/y4pkfMUQa4_C7-mbN-dgLXk12086FBekeNzrkOJOzDXKuQTq01jiafag9DXMIPJaKovT_gMzP_cKwTOU2X-cxJ494xMY4NV4NoNYRC0MlDiuMaJDH39gNdMVSpyZ6OhM_BYZAvMCxwBC_MhHj7fNSEVUfCuGZ8CNeU351DbVQxTS8iRp0gtmu4HjVknTgiF8uxrcXFECc2smdp97PWJnaIxeApi0X0b9w3TCAnIfi2vdoA/KALAKALAN.png?psid=1&width=763&height=308"
          alt=""
          className="header__logo"
        />
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">
              Hello {!user ? "Guest" : user.email}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <Link to="/orders">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
      </div>

      <Link to="/checkout">
        <div className="header__optionBasket">
          <ShoppingBasketIcon />
          <span className="header__optionLineTwo header__basketCount">
            {basket?.length}
          </span>
        </div>
      </Link>
    </div>
  );
}

export default Header;
