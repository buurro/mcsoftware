import React from 'react';
import Button from "./Button";

const Contacts = props => {

  return (
    <section className="cta">
      <h1><a href="tel:+39123456789">+39 123456789</a></h1>
      <h1><a href="mailto:info@mcsoftware.xx">info@mcsoftware.xx</a></h1>
      <Button label="Scrivici" />
    </section>
  )
};

export default Contacts;
