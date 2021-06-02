import React from "react"
import { Divider, Container } from 'semantic-ui-react';
import SEO from '../components/seo';
import ContactForm from '../components/ContactForm/ContactForm';
import Layout from "../components/Layout/Layout"
import { usePageview } from "../hooks/anaytics"

const ContactMePage = () => {
  usePageview();

  return (
    <Layout hideForm>
      <SEO title="יצירת קשר" />
      <div className="contact-you" style={{ height: '100%' }}>
        <Container>
          <Divider hidden />
          <ContactForm />
        </Container>
      </div>
    </Layout>
  )
};

export default ContactMePage
