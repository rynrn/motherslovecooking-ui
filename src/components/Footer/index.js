import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import { Image, Divider, Container } from 'semantic-ui-react';
import Title from '../Title/Title';
import '../../utils/image-util';
import './Footer.css';

const year = new Date().getFullYear();

export const query = graphql`
  query {
    image1: file(relativePath: { eq: "insta-logo.png" }) {
      ...squareImage
    }
    image2: file(relativePath: { eq: "insta-text.png" }) {
      ...squareImage
    }
  }
`

const Footer = () => {
  const data = useStaticQuery(query);

  return (
    <footer>
      <Container>
        <Divider />
        <Title text="עקבו אחרי באינסטגרם" subtext="שם אני מפרסמת הרבה עדכונים" />
        <div className="text-center">
          <a href="https://www.instagram.com/riki_avisror/" rel="noopener noreferrer nofollow" target="_blank">
            <Image className="img-center" src={data.image1.childImageSharp.fixed.src} size='small' alt='עקבו אחרי באינסטגרם' />
            <Image className="img-center" src={data.image2.childImageSharp.fixed.src} size='small' alt='עקבו אחרי באינסטגרם' />
          </a>
        </div>
      </Container>
      <div className="pink-strip">
        כל הזכויות שמורות למאמא באהבה {year}
      </div>
    </footer>
  );
}

/* <Img style={{
          verticalAlign: 'middle',
          position: 'absolute',
          top: '15px',
          left: '50%',
          transform: 'translateX(-50%)'
        }}
          className="ui tiny circular image"
          fluid={data.file.childImageSharp.fluid} alt={title} />
       */
export default Footer;
