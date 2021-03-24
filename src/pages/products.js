import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Products from "../components/Products";

const ProductsPage = () => (
  <Layout>
    <SEO title="Prodotti" />
    <Products />
  </Layout>
);

export default ProductsPage;
