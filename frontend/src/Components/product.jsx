import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from './Rating';
import { Link } from 'react-router-dom';

function Product({ product }) {
  return (
    <Card className='my-3 p-3 rounded my-card'>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={`http://127.0.0.1:1805/static${product.image}`} alt={product.Name} />
      </Link>
      <Card.Body>
        <Card.Title as='div'>
          <strong>{product.Name}</strong>
        </Card.Title>
        <Card.Text as='div'>
          <div className='my-3'>
            <Rating value={product.Rating} text={`${product.NumReviews} reviews`} color={'#f8e825'} />
          </div>
        </Card.Text>
        <Card.Text as='h3'>₹{product.Price.toLocaleString('en-IN')}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Product;