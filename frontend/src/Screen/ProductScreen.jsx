import { Link, useParams } from 'react-router-dom';
import { Col, Row, ListGroup, Image, Card, Button } from 'react-bootstrap';
import Rating from '../Components/Rating';
import axios from 'axios';
import { useEffect, useState } from 'react';

function ProductScreen() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const { data } = await axios.get(`http://127.0.0.1:1805/api/products/${id}/`);
        setProduct({
          ...data,
          Price: parseFloat(data.Price),
          Rating: parseFloat(data.Rating),
        });
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    }

    fetchProduct();
  }, [id]);

  if (!product) return <h2>Loading...</h2>;

  return (
    <>
      <Link to='/' className='btn btn-dark my-3'>Go Back</Link>

      <Row>
        {/* Product Image Section */}
        <Col md={6}>
          <Image src={`http://127.0.0.1:1805${product.image}`} alt={product.Name} fluid />
          
          {/* Moved Price & Stock Below Image */}
          <Card className='mt-3'>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col><strong>Price:</strong></Col>
                  <Col><h4 className='text-success'>₹{product.Price.toLocaleString('en-IN')}</h4></Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col><strong>Status:</strong></Col>
                  <Col>
                    <h5 className={product.CountInStock > 0 ? 'text-success' : 'text-danger'}>
                      {product.CountInStock > 0 ? 'In Stock' : 'Out of Stock'}
                    </h5>
                  </Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>

        {/* Product Details */}
        <Col md={6}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{product.Name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating value={product.Rating} text={`${product.NumReviews} reviews`} color={'#f8e825'} />
            </ListGroup.Item>
            <ListGroup.Item>
              <p><strong>Description:</strong> {product.Description}</p>
            </ListGroup.Item>
          </ListGroup>

          {/* Add to Cart Button */}
          <Button 
            className='btn-block mt-3' 
            type='button' 
            disabled={!product.CountInStock || product.CountInStock === 0}
          >
            Add to Cart
          </Button>
        </Col>
      </Row>
    </>
  );
}

export default ProductScreen;
