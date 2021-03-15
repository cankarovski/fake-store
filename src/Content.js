import React from "react";
import ItemsContainer from "./ItemsContainer";
import FilterItems from "./FilterItems";
import LoadMoreItems from "./LoadMoreItems";
import { StatusProvider } from "./contexts/StatusContext";
import Carousel from "react-bootstrap/Carousel";

import "./Content.css";

export default function Content() {
  return (
    <div className="Content">
      <div className="Carousel-container">
        <Carousel>
          <Carousel.Item className="Carousel-item">
            <div className="Carousel-img">
              <h2>WELCOME TO THE FAKE STORE!</h2>
            </div>
            <Carousel.Caption>
              <h3>SPRING SALE</h3>
              <p>Hurry and get extra discount!</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="Carousel-item">
            <div className="Carousel-img">
              <h2>CLOTHING</h2>
            </div>

            <Carousel.Caption>
              <h3>Best selection of clothes and apparel</h3>
              <p>Don't miss the best deals.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="Carousel-item">
            <div className="Carousel-img">
              <h2>ELECTRONICS</h2>
            </div>

            <Carousel.Caption>
              <h3>Latest electronics products</h3>
              <p>Lowest prices guaranteed!</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <StatusProvider>
        <h1 className="Store-title">ITEMS FOR SALE</h1>
        <FilterItems />
        <ItemsContainer />
        <LoadMoreItems />
      </StatusProvider>
    </div>
  );
}
