import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Contacts from "../components/Contacts";

const divStyle = {
  
};

const ContactPage = () => (
  <Layout>
    <div style={divStyle}>
      <SEO title="Contattaci" />
        <Contacts/>
    </div>
  </Layout>
);

export default ContactPage;
