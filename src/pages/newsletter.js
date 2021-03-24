import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Contacts from "../components/Contacts";

const NewsletterPage = () => (
  <Layout>
    <div
      style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <SEO title="Newsletter" />
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSd2tvLpS2JFNFyjmv8sbp6VaLz6TBauHyB4ry9QcCx75FjUaA/viewform?embedded=true"
        width="640" height="650" frameborder="0" marginheight="0" marginwidth="0"
      >
        Caricamento…
      </iframe>
    </div>

  </Layout>
);

export default NewsletterPage;
