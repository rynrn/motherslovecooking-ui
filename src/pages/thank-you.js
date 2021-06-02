import React from "react"
import { Divider, Container } from 'semantic-ui-react';
import SEO from '../components/seo';
import Title from '../components/Title/Title';
import Layout from "../components/Layout/Layout"
import { usePageview } from "../hooks/anaytics"

const AboutMePage = () => {
  usePageview();

  return (
    <Layout hideForm>
      <SEO title="תודה" />
      <div className="thank-you" style={{ height: '100%' }}>
        <Container>
          <Divider hidden />
          <Title text="תודה" subtext="Thank you" />
          <Divider hidden />
          <p dir="rtl">
            הפרטים שלך הועברו אליי.
            <br />
            אפנה אליך ברגע שאתפנה
          </p>
          <Divider hidden />
        </Container>
      </div>
    </Layout>
  )
};

export default AboutMePage
