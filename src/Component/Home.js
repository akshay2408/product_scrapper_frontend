import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [category, setCategory] = useState([]);
  const navigate = useNavigate();
  const getCategory = async () => {
    const callApi = await axios("http://localhost:3000/products");
    setCategory(callApi.data);
  };
  const handleShow = (id) => {
    navigate(`/product/${id}`);
  };

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <>
      <div className="container p-0">
        <button
          type="button"
          onClick={() => navigate("/form")}
          class="btn btn-primary d-flex ms-auto mt-3"
        >
          Search product by URL
        </button>
        <div className="row mx-0">
          <div className="count col-12 col-md-12 py-2 px-2 my-2">
            <h1 className="mb-4 fw-bold">Scraped Product by categories</h1>
            {Object.entries(category).map((item) => (
              <>
                <h3 className="py-3" key={item.product_id}>
                  {item[0]}
                </h3>
                <div className="row flex-wrap">
                  {item[1].map((element) => (
                    <div className="col-md-3 col-12 py-3">
                      <Card
                        onClick={() => handleShow(element.product_id)}
                        key={element.product_id}
                        className="shadow-sm py-3"
                      >
                        <Card.Body>
                          <strong className="h4 fw-bold">Title : </strong>
                          <Card.Title className="pt-3 pb-2">{element.product_title}</Card.Title>
                          <Card.Text>
                            <strong  className="h5 fw-bold text-decoration-underline">Product URL : </strong>
                            <div className="text-primary mt-2">{element.product_url}</div>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </div>
                  ))}
                </div>
              </>
            ))}
          </div>
          <div className="col-3"></div>
        </div>
      </div>
    </>
  );
};

export default Home;
