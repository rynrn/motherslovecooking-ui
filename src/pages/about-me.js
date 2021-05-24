import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Divider, Container } from 'semantic-ui-react';
import SEO from '../components/seo';
import Title from '../components/Title/Title';
import Layout from "../components/Layout/Layout"
import { usePageview } from "../hooks/anaytics"
import '../utils/image-util';
import ContactForm from '../components/ContactForm/ContactForm';

const AboutMePage = () => {
  usePageview();

  const data = useStaticQuery(graphql`
    query AboutMePageQuery {
      boss: file(relativePath: { eq: "shutterstock_1112366681.jpg" }) {
        ...heroImageFluid
      }
      me: file(relativePath: { eq: "me.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 150) {
            src
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="קצת על הבוסית"
        description="אני ריקי אביסרור, בעלת עסק של בישולים ומשלוחים עד הבית. העסק שהרמתי בעשר אצבעות ואני מקדישה לו את החיים והאהבה שלי" />
      <div className="boss" style={{ height: '100%' }}>
        <style>{`
            #layout .pusher .nav-bar {
              background: transparent !important;
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              z-index: 1;
            }

            .nav-bar .icon, .nav-bar .shop-name a {
              color: var(--main-color)
            }

            h1 {
              font-size: 35px;
            }

            .image-gallery-slide .image-gallery-description {
              bottom: 5%;
              left: 50%;
              background: transparent;
              font-size: 20px;
              transform: translate(-50%, -30%);
              font-family: 'Heebo', sans-serif;
              font-weight: 300;
              text-shadow: 0px 0px 1px #000;
              background: rgba(0,0,0,0.3);
              border-radius: 30px;
              padding: 10px;
            }
            .hero-image {
              width: 100vw;
              height: 100vh;
              background-image: url('${data.boss.childImageSharp.fluid.src}');
              background-size: cover;
            }
            .boss p {
              font-family: 'Heebo', sans-serif !important;
              font-weight: 300 !important;
            }
            .boss img {
              float: right;
              margin-left: 20px;
            }
          `}</style>
        <div className="hero-image"></div>
        <Container>
          <Divider hidden />
          <Title text="על הבוסית" subtext="About the boss" />
          <Divider hidden />
          <p dir="rtl">
            <img src={data.me.childImageSharp.fluid.src} alt="ריקי אביסרור" />

            מי אני?
            <br />
            נעים מאד, אני ריקי אביסרור ואני שמחה שהגעתם לבקר אצלי!
            גדלתי בבית של אמא טוניסאית ואבא פרסי, בית אותנטי שמתעסק המון באוכל, סבתי היא בשלנית בחסד עליון.
            מדי יום כשהייתי שבה מבית הספר לאחר יום הלימודים הביתה, הייתי יושבת איתה במטבח ומביטה בה מבשלת על אף היותי תלמידה.
            עם הזמן, כשגדלתי ולימים הכרתי את בעלי, התחתנו והבאנו לעולם את בתי הבכורה.
            מצאתי את עצמי אובדת עצות במטבח בשל היותה בררנית, מתקשרת לסבתי ומבקשת ממנה מתכונים והוראות מדוייקות. לאחר לידתה של בתי השניה, הרגשתי שיש יותר מדיי עומס על אמהות, ולכן מתוך צורך אישי שלי כאמא עסוקה שלא מצאה את הזמן גם לבשל, גם לנקות ולסיים את שאר מטלות הבית, הבנתי שיש פה צורך לבישול ביתי אמיתי שיגיע עד הבית ללא שום מאמץ.
            בין אם להורים עסוקים או משפחות שרוצות לפנק את עצמן ובין לכאלו שאין להם את הידע.
          </p>
          <Divider hidden />
          <ContactForm />
        </Container>
      </div>
    </Layout>
  )
};

export default AboutMePage
