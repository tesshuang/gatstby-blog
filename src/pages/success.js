import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Container from '../components/container';


const Success = () => {
  return ( 
    <Layout>
      <Container>
        <h3>Thank you for subscribing!</h3>
        <p>We will get in touch again shortly. In the meanwhile, learn more about Gatsby at <Link to="/blogs">here</Link>.</p>
      </Container>
    </Layout>
   );
}
 
export default Success;