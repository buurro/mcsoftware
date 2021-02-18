import React from 'react';
import Button from "./Button";

const ValueProp = props => {

  return (
    <section className="value-prop">
      <div className="value-prop-content">
        <div className="main-message">
          <h1>McSoftware S.p.a.</h1>
          <p className="main-subtitle">Applicazioni Web<br/>Gestionali<br/>Piattaforme di Analisi Dati</p>
          <Button label="Richiedi un preventivo" />
        </div>
        <div className="main-photo"></div>
      </div>
    </section>
  )
};

export default ValueProp;
