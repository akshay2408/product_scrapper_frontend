import React from 'react'
import { Card } from 'react-bootstrap'

const CardComponent = (props) => {
    const {data} =props;
  return (
    <div className="row">
      <div className="col-3"></div>
    <div className="col-6 col-md-6 col-sm-6 py-5 px-3 my-4">
      <Card className='w-75 mx-auto'>
        <Card.Img variant="top" src={data.img_url} className="p-5" />
        <Card.Body className='px-4'>
        <strong  className="h4 fw-bold">Title : </strong>
          <Card.Title className="pt-3 pb-2">{data.title}</Card.Title>
          <Card.Text>
          <strong className="h5 fw-bold d-block">Description : </strong>
           {data.description}
          </Card.Text>
          <strong className="h5 fw-bold">Price : </strong>
          <Card.Text className='my-2'>
           {data.price}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
    <div className="col-3"></div>
  </div>
  )
}

export default CardComponent