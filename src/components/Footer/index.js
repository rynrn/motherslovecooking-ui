import React from 'react';
import { useStaticQuery, graphql, Link } from "gatsby"
import { Image, Divider, Container, Grid } from 'semantic-ui-react';
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
    categories: allWcProductsCategories {
      nodes {
        id
        wordpress_id
        name
        slug
      }
    }
    wpcontent {
      posts {
        nodes {
          slug
          id
          title
          categories {
            nodes {
              categoryId
            }
          }
        }
      }
    }
  }
`
const Footer = () => {
  const data = useStaticQuery(query);
  const allPosts = data.wpcontent.posts.nodes;
  const allRecipesPosts = allPosts.filter(post => {
    const found = post.categories.nodes.find(cat => cat.categoryId === 47);
    return !!found;
  })

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
      <div className="pink-strip" dir="rtl">
        <Grid className="text-right center-footer-links" style={{ maxWith: '1000px' }}>
          <Grid.Row columns={3}>
            <div>
              <h4>קטגוריות משלוחי אוכל מוכן</h4>
              <ul className="link-list">
                {data.categories.nodes.map(cat => {
                  return (
                    <li key={cat.id}><Link to={`/category/${cat.slug}`}>{cat.name}</Link></li>
                  );
                })}
              </ul>
            </div>
            <div>
              <h4>ניווט מהיר</h4>
              <ul className="link-list">
                <li><Link to={`/`}>דף הבית</Link></li>
                <li><Link to={`/products`}>חיפוש מנות</Link></li>
                <li><Link to={`/about-me`}>קצת עלינו</Link></li>
                <li><Link to={`/cart`}>עגלת קניות</Link></li>
              </ul>
              <h4>מתכונים</h4>
              <ul className="link-list">
                {allRecipesPosts.map(post => {
                  return (
                    <li key={post.id}><Link to={`/recipes/${post.slug}`}>{post.title}</Link></li>
                  );
                })}
              </ul>
            </div>
            <div>
              <h4>יצירת קשר</h4>
               טלפון: <a href="tel:0533044233">053-304-4233</a>
              <br />
               מייל: <a href="mailto:riki.avisror@gmail.com">riki.avisror@gmail.com</a>
              <br />
              <address>
                רחוב בן חור 12, פתח תקווה
              </address>
              <br />
              <br />
              <h4>שעות פתיחה</h4>
              ימי א-ה 08:00-21:00
              <br />
              ימי ו 08:00-14:00
            </div>

          </Grid.Row>
        </Grid>
        <br />
        כל הזכויות שמורות למאמא באהבה {year}
      </div>
    </footer>
  );
}

export default Footer;
