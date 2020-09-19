import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './Header';

function Resume() {
  return (
    <div>
      <Header></Header>
      <Container>
        <object data="/Brandon_Mork_Resume.pdf#view=FitH" type="application/pdf" className="w-100" style={{ height: '90vh' }}>
          Uh-oh! Looks like your browser doesn't support PDFs.
        </object>
      </Container>
    </div>
  );
}

export default Resume;
