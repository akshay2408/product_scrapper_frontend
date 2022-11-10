import axios from "axios";
import React, { useState } from "react";
import CardComponent from "./CardComponent";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [urlLink, seturlLink] = useState("");
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:3000/products/scrape", {
      url: urlLink,
    });
    setData(res.data);
  };
  return (
    <>
      <div className="container">
      <button type="button" onClick={()=>navigate("/")} class="btn btn-primary d-flex ms-auto mt-3">See All Products</button>
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6 col-md-6 col-sm-6 border rounded py-5 px-3 my-5">
            <h3 className="mb-5">Scraped URLS Form</h3>
            <form onSubmit={handleSubmit}>
              <label for="url">Enter Your URL:</label>
              <input
                type="text"
                id="fname"
                value={urlLink.url}
                onChange={(e) => seturlLink(e.target.value)}
                name="url"
                className="form-control mt-2"
              />
              <br />
              <button className="btn btn-dark mt-3" type="submit">
                Submit
              </button>
              <br />
            </form>
          </div>
          <div className="col-3"></div>
        </div>
       {data.length!==0 &&
        <div>
        <CardComponent data={data} /> 
       </div>}
      </div>
    </>
  );
};
export default Form;
