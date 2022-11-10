import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import CardComponent from "./CardComponent";

const ProductDetail = () => {
  const [details, showDetails] = useState([]);
  const { id } = useParams();

  const getDetails = async () => {
    const showData = await axios(`http://localhost:3000/products/${id}`);
    showDetails(showData.data);
  };

  useEffect(() => {
    getDetails();
  });

  return (
    <>
      <div className="container">
        <CardComponent data={details} />
      </div>
    </>
  );
};

export default ProductDetail;
