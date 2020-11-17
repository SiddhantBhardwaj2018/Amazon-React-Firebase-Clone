import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/Holiday/GiftGuide/Fuji_TallHero_GG2_en_US_1x._CB418256337_.jpg"
        alt=""
      />
        <div className="home__row">
        <Product
          id="12321341"
          title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses: Paperback"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
        />

        <Product
          id="12321341"
          title="Nimble: Make Yourself and Your Company Resilient in the Age of Constant Change Kindle Edition"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/41jwXYraE5L.jpg"
        />
        </div>
        <div className="home__row">
        <Product
          id="12321341"
          title="Ninja DZ201 Foodi 6-in-1 2-Basket Air Fryer with DualZone Technology, 8-Quart Capacity, and a Dark Grey Stainless Finish"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/81kmOpm7eEL._AC_UY218_.jpg"
        />

        <Product
          id="12321341"
          title="Definitive Technology SR-9040 10” Bipolar Surround Speaker | High Performance | Premium Sound Quality | Wall or Table Placement Options | Single, Black"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/91YwR71yTaL._AC_UY218_.jpg"
        />

        <Product
          id="12321341"
          title="Ninja OS301 Foodi 10-in-1 Pressure Cooker and Air Fryer with Nesting Broil Rack, 6.5-Quart Capacity, and a Stainless Finish"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/71h7Y437BLL._AC_UY218_.jpg"
        />
        </div>
    </div>
  );
}

export default Home;
