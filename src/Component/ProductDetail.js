import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import CardComponent from "./CardComponent";
import { useNavigate } from "react-router-dom";

const ProductDetail = () => {
  const [details, showDetails] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

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
      <button type="button" onClick={()=>navigate("/")} class="btn btn-primary d-flex ms-auto mt-3">See All Products</button>
        <CardComponent data={details} />
      </div>
    </>
  );
};

export default ProductDetail;
