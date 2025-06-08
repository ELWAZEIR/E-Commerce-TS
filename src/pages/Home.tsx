// HomePage.jsx
import { 
  Container, 
  Carousel, 
  Row, 
  Col, 
  Card, 
  Button, 
  Form,
  Badge
} from 'react-bootstrap';
import '../styles/HomePage.css'; // Import your custom CSS for styling

const HomePage = () => {
  // Clothing products data
  const products = [
    {
      id: 1,
      name: 'Classic Men\'s Shirt',
      price: 49.99,
      category: 'Men',
      image: 'https://images.unsplash.com/photo-1593030103066-0093718efeb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 2,
      name: 'Summer Women\'s Dress',
      price: 79.50,
      category: 'Women',
      image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 3,
      name: 'Men\'s Denim Jeans',
      price: 89.00,
      category: 'Men',
      image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 4,
      name: 'Wool Sweater',
      price: 65.00,
      category: 'Women',
      image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 5,
      name: 'Leather Jacket',
      price: 129.99,
      category: 'Men',
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 6,
      name: 'Women\'s Skirt',
      price: 45.25,
      category: 'Women',
      image: 'https://images.unsplash.com/photo-1551446591-142875a901a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 7,
      name: 'Kids T-shirt',
      price: 24.99,
      category: 'Kids',
      image: 'https://images.unsplash.com/photo-1617727553252-65863c156eb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 8,
      name: 'Formal Suit',
      price: 199.99,
      category: 'Men',
      image: 'https://images.unsplash.com/photo-1598808503746-f34cfb6c2524?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    }
  ];

  // Clothing categories
  const categories = [
    { name: 'Men', image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
    { name: 'Women', image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
    { name: 'Kids', image: 'https://images.unsplash.com/photo-1519457431-44ccd64a579b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
    { name: 'Accessories', image: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' }
  ];

  // Banner items
  const bannerItems = [
    {
      title: 'Up to 50% Off',
      description: 'On our summer collection',
      image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      buttonText: 'Shop Now'
    },
    {
      title: 'New Arrivals',
      description: 'Discover the latest fashion trends',
      image: 'https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      buttonText: 'Explore'
    },
    {
      title: 'Special Offers',
      description: 'On men\'s clothing collection',
      image: 'https://images.unsplash.com/photo-1548126032-079a0fb0099d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      buttonText: 'View Details'
    }
  ];

  return (
    <div className="home-page">
      {/* Navigation Bar */}
      {/* <Navbar bg="light" expand="lg" className="shadow-sm">
        <Container>
          <Navbar.Brand href="#" className="fw-bold text-primary">Fashion Store</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#" className="active">Home</Nav.Link>
              <Nav.Link href="#">Men</Nav.Link>
              <Nav.Link href="#">Women</Nav.Link>
              <Nav.Link href="#">Kids</Nav.Link>
              <Nav.Link href="#">Sale</Nav.Link>
            </Nav>
            <div className="d-flex align-items-center">
              <Form className="d-flex me-3">
                <Form.Control
                  type="search"
                  placeholder="Search products..."
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-primary">Search</Button>
              </Form>
              <div className="position-relative me-3">
                <i className="bi bi-cart fs-4 text-dark"></i>
                <Badge pill bg="danger" className="position-absolute top-0 start-100 translate-middle">
                  3
                </Badge>
              </div>
              <Button variant="primary" className="me-2">Login</Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}

      {/* Hero Carousel */}
      <Carousel className="mb-5">
        {bannerItems.map((item, index) => (
          <Carousel.Item key={index}>
            <div 
              className="banner-item d-flex align-items-center" 
              style={{ 
                backgroundImage: `url(${item.image})`,
                height: '500px',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="overlay"></div>
              <Container>
                <div className="banner-content text-white text-center">
                  <h1 className="display-4 fw-bold">{item.title}</h1>
                  <p className="lead mb-4">{item.description}</p>
                  {/* <Button variant="light" size="lg" className="px-5">{item.buttonText}</Button> */}
                </div>
              </Container>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Categories Section */}
      <section className="categories py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5 fw-bold">Shop by Category</h2>
          <Row className="g-4">
            {categories.map((category, index) => (
              <Col md={3} key={index}>
                <div className="category-card position-relative rounded overflow-hidden shadow">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="img-fluid"
                  />
                  <div className="overlay d-flex align-items-center justify-content-center">
                    <h3 className="text-white fw-bold">{category.name}</h3>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Featured Products */}
      <section className="featured-products py-5">
        <Container>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="fw-bold">New Arrivals</h2>
            <Button variant="outline-primary">View All</Button>
          </div>
          
          <Row className="g-4">
            {products.map((product) => (
              <Col lg={3} md={6} key={product.id}>
                <Card className="h-100 shadow-sm border-0 product-card">
                  <div className="position-relative">
                    <Card.Img variant="top" src={product.image} width={100} height={400}/>
                    <Badge bg="danger" className="position-absolute top-0 end-0 m-2">New</Badge>
                    <div className="card-actions position-absolute bottom-0 w-100 d-flex justify-content-center p-2">
                      <Button variant="light" size="sm" className="me-1">
                        <i className="bi bi-heart"></i>
                      </Button>
                      <Button variant="light" size="sm" className="me-1">
                        <i className="bi bi-eye"></i>
                      </Button>
                      {/* <Button variant="primary" size="sm">
                        <i className="bi bi-cart-plus"></i> Add to Cart
                      </Button> */}
                    </div>
                  </div>
                  <Card.Body>
                    <Badge bg="info" className="mb-2">{product.category}</Badge>
                    <Card.Title>{product.name}</Card.Title>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <span className="fw-bold text-primary">${product.price.toFixed(2)}</span>
                      <div className="rating">
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star text-warning"></i>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Special Offer */}
      <section className="special-offer py-5 bg-primary text-white">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h2 className="display-5 fw-bold">30% Off Men's Collection</h2>
              <p className="lead">Special discounts on our men's clothing collection this season</p>
              <p className="mb-4">Offer valid until the end of the month</p>
              <Button variant="light" size="lg" className="px-5">Shop Now</Button>
            </Col>
            <Col md={6} className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1593030103066-0093718efeb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Special Offer" 
                className="img-fluid rounded shadow"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Newsletter */}
      <section className="newsletter py-5 bg-light">
        <Container className="text-center">
          <h2 className="fw-bold mb-3">Subscribe to Our Newsletter</h2>
          <p className="mb-4">Get updates on new arrivals, special offers and other discount information</p>
          <Form className="d-flex justify-content-center">
            <Form.Control 
              type="email" 
              placeholder="Your email address" 
              className="w-50 me-2"
            />
            <Button variant="primary">Subscribe</Button>
          </Form>
        </Container>
      </section>

      {/* Footer */}
      {/* <footer className="bg-dark text-white py-5">
        <Container>
          <Row>
            <Col md={4} className="mb-4">
              <h4 className="fw-bold mb-4">Fashion Store</h4>
              <p>The best online store to buy clothes and fashion items. We provide the latest fashion trends at competitive prices.</p>
              <div className="social-icons mt-4">
                <a href="#" className="text-white me-3"><i className="bi bi-facebook fs-5"></i></a>
                <a href="#" className="text-white me-3"><i className="bi bi-instagram fs-5"></i></a>
                <a href="#" className="text-white me-3"><i className="bi bi-twitter fs-5"></i></a>
                <a href="#" className="text-white"><i className="bi bi-pinterest fs-5"></i></a>
              </div>
            </Col>
            
            <Col md={2} className="mb-4">
              <h5 className="fw-bold mb-4">Quick Links</h5>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="#" className="text-white">Home</a></li>
                <li className="mb-2"><a href="#" className="text-white">About Us</a></li>
                <li className="mb-2"><a href="#" className="text-white">Products</a></li>
                <li className="mb-2"><a href="#" className="text-white">Contact</a></li>
              </ul>
            </Col>
            
            <Col md={2} className="mb-4">
              <h5 className="fw-bold mb-4">Categories</h5>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="#" className="text-white">Men</a></li>
                <li className="mb-2"><a href="#" className="text-white">Women</a></li>
                <li className="mb-2"><a href="#" className="text-white">Kids</a></li>
                <li className="mb-2"><a href="#" className="text-white">Accessories</a></li>
              </ul>
            </Col>
            
            <Col md={4} className="mb-4">
              <h5 className="fw-bold mb-4">Contact Info</h5>
              <ul className="list-unstyled">
                <li className="mb-2"><i className="bi bi-geo-alt me-2"></i> 123 Fashion Street, New York</li>
                <li className="mb-2"><i className="bi bi-telephone me-2"></i> +1 234 567 8900</li>
                <li className="mb-2"><i className="bi bi-envelope me-2"></i> info@fashionstore.com</li>
              </ul>
            </Col>
          </Row>
          
          <div className="border-top mt-4 pt-4 text-center">
            <p>© 2023 Fashion Store. All rights reserved.</p>
          </div>
        </Container>
      </footer> */}
    </div>
  );
};

export default HomePage;