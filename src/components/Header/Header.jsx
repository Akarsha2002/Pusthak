import React from "react";
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";
import HomeList from "../HomeList/HomeList"
import Carousel from "../Carousel/Carousel";

const Header = () => {
  return (
    <div className="holder">
      <header className="header">
        <Navbar />
        <>
        <Carousel />
        </>
        
        <div className="header-content flex flex-c text-center text-white">
          <h2 className="header-title text-capitalize">find your book here</h2>
          <br />
          <p className="header-text fs-18 fw-3">
            Discover your perfect book with our intuitive search tool. Browse by
            genre, author, or keyword to find exactly what you're looking for.
            Whether it's a bestseller or a hidden gem, your next great read is
            just a click away.
          </p>
          <SearchForm />
          <HomeList />
          <br /><br />
        </div>
      </header>
    </div>
  );
};

export default Header;
