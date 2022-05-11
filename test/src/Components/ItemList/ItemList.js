import React from "react";
import ItemCard from "../ItemCard/ItemCard";

const ItemList = ({ items }) => {
  <div className="itemList">
    {items.map((item) => {
      return <ItemCard key={item.id} item={item} />;
    })}
  </div>;
};

export default ItemList;
