import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import About from "../components/About";

const ContactPage = () => (
  <Layout>
    <div
      style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <SEO title="About" />
        <About/>
    </div>

  </Layout>
);

export default ContactPage;
