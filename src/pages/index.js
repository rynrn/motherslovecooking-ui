import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { isBrowser } from "react-device-detect";
import { Divider, Grid, Container } from 'semantic-ui-react';
import ImageGallery from 'react-image-gallery';
import ImageGridColumnCard from '../components/ImageCard/ImageGridColumnCard';
import ContactForm from '../components/ContactForm/ContactForm';
import StoryAvatar from '../components/StoryAvatar/StoryAvatar';
import ImageCard from '../components/ImageCard/ImageCard';
import SEO from '../components/seo';
import Title from '../components/Title/Title';
import Layout from "../components/Layout/Layout"
import '../utils/image-util';
import { usePageview } from "../hooks/anaytics"

const heroText = (index) => {
  if (index === 1) {
    return (
      <div>
        <h1>תתפנקו גם לכם מגיע</h1>
        <span>אוכל ביתי לשבת ואמצע שבוע עם משלוח עד הבית</span>
      </div>
    )
  } else if (index === 2) {
    return (
      <div className="head-link">
        <Link to="/categories">לצפייה בתפריט המשלוחים</Link>
      </div>
    )
  }
  return (
    <div className="head-link">
      <Link to="/categories">להזמנות משלוח עד הבית</Link>
    </div>
  )
}

const IndexPage = () => {
  usePageview();

  const data = useStaticQuery(graphql`
    query IndexPageQuery {
      hero1: file(relativePath: { eq: "shutterstock_757818340.jpg" }) {
        ...heroImageFluid
      }
      hero2: file(relativePath: { eq: "shutterstock_1150885328.jpg" }) {
        ...heroImageFluid
      }
      hero3: file(relativePath: { eq: "shutterstock_1661406400.jpg" }) {
        ...heroImageFluid
      }
      pasta: file(relativePath: { eq: "shutterstock_1684384675.jpg" }) {
        ...menuItem
      }
      wine: file(relativePath: { eq: "shutterstock_1175348251.jpg" }) {
        ...menuItem
      }
      fish: file(relativePath: { eq: "shutterstock_1748193971.jpg" }) {
        ...menuItem
      }
      salat: file(relativePath: { eq: "shutterstock_614151992.jpg" }) {
        ...menuItem
      }
      soup: file(relativePath: { eq: "shutterstock_275079959.jpg" }) {
        ...menuItem
      }
      dessert: file(relativePath: { eq: "shutterstock_44971894.jpg" }) {
        ...menuItem
      }
      boss: file(relativePath: { eq: "shutterstock_1112366681.jpg" }) {
        ...menuBigItem
      }
      delivery: file(relativePath: { eq: "shutterstock_1771298879.jpg" }) {
        ...menuBigItem
      }
      deals: file(relativePath: { eq: "shutterstock_1612915471.jpg" }) {
        ...menuBigItem
      }
      avatar_rec_image: file(relativePath: { eq: "rec-image-1.jpeg" }) {
        ...avatarStoryItem
      }
      rec_image_1: file(relativePath: { eq: "rec-image-1.jpeg" }) {
        ...heroImageFluid
      }
      rec_image_2: file(relativePath: { eq: "rec-image-2.jpeg" }) {
        ...heroImageFluid
      }
      rec_image_3: file(relativePath: { eq: "rec-image-3.jpeg" }) {
        ...heroImageFluid
      }
      rec_image_4: file(relativePath: { eq: "rec-image-4.jpeg" }) {
        ...heroImageFluid
      }
      rec_image_5: file(relativePath: { eq: "rec-image-5.jpeg" }) {
        ...heroImageFluid
      }
      rec_image_6: file(relativePath: { eq: "rec-image-6.jpeg" }) {
        ...heroImageFluid
      }
      thank_image_1: file(relativePath: { eq: "thank-image-1.jpeg" }) {
        ...heroImageFluid
      }
      thank_image_2: file(relativePath: { eq: "thank-image-2.jpeg" }) {
        ...heroImageFluid
      }
      thank_image_3: file(relativePath: { eq: "thank-image-3.jpeg" }) {
        ...heroImageFluid
      }
      thank_image_4: file(relativePath: { eq: "thank-image-4.jpeg" }) {
        ...heroImageFluid
      }
      avatar_thank_image: file(relativePath: { eq: "thank-image-2.jpeg" }) {
        ...avatarStoryItem
      }
      love_food_image_1: file(relativePath: { eq: "love-food-image-1.jpeg" }) {
        ...heroImageFluid
      }
      love_food_image_2: file(relativePath: { eq: "love-food-image-2.jpeg" }) {
        ...heroImageFluid
      }
      love_food_image_3: file(relativePath: { eq: "love-food-image-3.jpeg" }) {
        ...heroImageFluid
      }
      love_food_image_4: file(relativePath: { eq: "love-food-image-4.jpeg" }) {
        ...heroImageFluid
      }
      love_food_image_5: file(relativePath: { eq: "love-food-image-5.jpeg" }) {
        ...heroImageFluid
      }
      avatar_love_food_image: file(relativePath: { eq: "love-food-image-3.jpeg" }) {
        ...avatarStoryItem
      }
      north: file(relativePath: { eq: "shutterstock_124230778.jpg" }) {
        ...menuItem
      }
      center: file(relativePath: { eq: "shutterstock_580204774.jpg" }) {
        ...menuItem
      }
      south: file(relativePath: { eq: "shutterstock_1039193779.jpg" }) {
        ...menuItem
      }


      sofrito: file(relativePath: { eq: "love-food-image-4.jpeg" }) {
        ...avatarStoryItem
      }
      deasert: file(relativePath: { eq: "deasert.jpg" }) {
        ...avatarStoryItem
      }
      thank_2: file(relativePath: { eq: "thank-image-1.jpeg" }) {
        ...avatarStoryItem
      }
      avatar_salat: file(relativePath: { eq: "shutterstock_614151992.jpg" }) {
        ...avatarStoryItem
      }
      shavuot: file(relativePath: { eq: "shutterstock_1049547443.jpg" }) {
        ...menuBigItem
      }
    }
  `);

  const hero = [];
  for (let i = 1; i < 4; i++) {
    hero.push({
      originalAlt: 'מאמא באהבה',
      original: data['hero' + i].childImageSharp.fluid.src,
      srcSet: data['hero' + i].childImageSharp.fluid.srcSet,
      sizes: data['hero' + i].childImageSharp.fluid.sizes,
      description: heroText(i)
    })
  }

  const hotDishes = [];
  for (let i = 1; i < 7; i++) {
    hotDishes.push({
      originalAlt: 'מנות הכי אהובות',
      original: data['rec_image_' + i].childImageSharp.fluid.src,
      srcSet: data['rec_image_' + i].childImageSharp.fluid.srcSet,
      sizes: data['rec_image_' + i].childImageSharp.fluid.sizes,
      description: "מאמא באהבה"
    })
  }

  const thanks = [];
  for (let i = 1; i < 5; i++) {
    thanks.push({
      originalAlt: 'ממליצים עלינו',
      original: data['thank_image_' + i].childImageSharp.fluid.src,
      srcSet: data['thank_image_' + i].childImageSharp.fluid.srcSet,
      sizes: data['thank_image_' + i].childImageSharp.fluid.sizes,
      description: "מאמא באהבה"
    })
  }

  const loveFood = [];
  for (let i = 1; i < 5; i++) {
    loveFood.push({
      originalAlt: 'אוכל שאנשים אוהבים',
      original: data['love_food_image_' + i].childImageSharp.fluid.src,
      srcSet: data['love_food_image_' + i].childImageSharp.fluid.srcSet,
      sizes: data['love_food_image_' + i].childImageSharp.fluid.sizes,
      description: "מאמא באהבה"
    })
  }

  return (
    <Layout>
      <SEO title="בישול ביתי של אמא עם משלוח עד הבית"
        description="מבשלת אוכל ביתי לאנשים שאוהבים לאכול. אוכל לסופי שבוע ואמצע שבוע בשליחות עד אליך" />
      <div className={isBrowser ? 'home-browser' : 'home-mobile'} style={{ height: '100%' }}>
        <style>{`
            #browser-menu {
              background: transparent;
              position: absolute;
            }
            #browser-menu .ui.text.menu .item,
            #browser-menu #cart-button-menu .item {
              color: #fff;
              text-shadow: 0 0 2px black;
            }

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

            .home-browser h1 {
              font-size: 48px;
            }

            .home-browser .image-gallery-slide .image-gallery-description {
              font-size: 30px;
            }

            h1 {
              font-size: 35px;
            }

            .image-gallery-slide .image-gallery-description {
              /*bottom: 5%;
              left: 50%;*/
              bottom: 45%;
              left: 65%;
              font-size: 20px;
              transform: translate(-50%, -30%);
              font-family: 'Heebo', sans-serif;
              font-weight: 300;
              text-shadow: 0px 0px 1px #000;
              /*background: rgba(0,0,0,0.3);*/
              background: transparent;
              color: var(--main-color);
              border-radius: 30px;
              padding: 10px;
            }

            @media (max-width: 1200px) {
              .home-browser h1 {
                font-size: 25px;
              }

              .home-browser .image-gallery-slide .image-gallery-description {
                font-size: 18px;
              }

              .image-gallery-slide .image-gallery-description {
                bottom: 50%;
              }
            }

            @media (max-height: 500px) {
              .image-gallery-slide .image-gallery-description {
                bottom: 35%;
              }
            }
          `}</style>
        <ImageGallery items={hero}
          isRTL={true}
          sizes="(min-width: 400px) 400px, 100vw"
          showThumbnails={false}
          showFullscreenButton={false}
          showPlayButton={false} />
        <Container>
          {/* <Divider hidden />
          <Title text="חג שבועות" subtext="Shavuot 2021" />
          <ImageCard to="/category/שבועות"
            className="w-h-100-p"
            data={data.shavuot.childImageSharp.fixed} text='תפריט חג שבועות' /> */}
          <Divider hidden />
          <Title text="תפריט" subtext="Menu" />
          <Divider hidden />
          <Grid className="text-center">
            <Grid.Row columns={3}>
              <ImageGridColumnCard text={'עיקריות'} to="/category/עיקריות" data={data.fish.childImageSharp.fixed} />
              <ImageGridColumnCard text={'מיוחדים'} to="/category/מיוחדים" data={data.wine.childImageSharp.fixed} />
              <ImageGridColumnCard text={'תוספות'} to="/category/תוספות" data={data.pasta.childImageSharp.fixed} />
            </Grid.Row>
            <Grid.Row columns={3}>
              <ImageGridColumnCard text={'סלטים'} to="/category/סלטים" data={data.salat.childImageSharp.fixed} />
              <ImageGridColumnCard text={'מרקים'} to="/category/מרקים" data={data.soup.childImageSharp.fixed} />
              <ImageGridColumnCard text={'קינוחים'} to="/category/אפייה" data={data.dessert.childImageSharp.fixed} />
            </Grid.Row>
          </Grid>
          <Divider hidden />
          <ImageCard to="/categories"
            className="thin pos-80"
            data={data.delivery.childImageSharp.fixed} text='להזמנת אוכל ביתי עד הבית' />
          <Divider />
          <Title text="איזורי משלוח" subtext="Delivery zones" />
          <div className="home-delivery-zones site-font text-right" dir="rtl">
            מאמא באהבה מפעילה מערך משלוחים במרכז הארץ.
            <br />
            איזורי המשלוחים שלנו הם בין ראשון לציון שהוא הגבול הדרומי שלנו לגבול הצפוני ביותר שהוא הרצליה.
            <br />
            מידי פעם גם תוכלו למצוא אותנו מגיעים גם לרחובות נתניה ואפילו למודיעין. את זה כמובן שנעדכן באינסטגרם שלנו.
            <br />
            תוכלו למצוא אותנו מגיעים בעיקר לערים:
            <ul>
              <li>פתח תקווה</li>
              <li>קריית אונו והסביבה</li>
              <li>יהוד ואור יהודה</li>
              <li>סביון</li>
              <li>הרצליה</li>
              <li>רעננה</li>
              <li>כפר סבא</li>
              <li>תל אביב</li>
              <li>רמת גן</li>
              <li>גבעתיים</li>
              <li>רמת השרון</li>
              <li>הוד השרון</li>
              <li>ראש העין</li>
              <li>יפו</li>
              <li>בת ים</li>
              <li>חולון</li>
              <li>ראשון לציון</li>
            </ul>
            <div className="clear"></div>
            <br />
            מדי פעם אנחנו מגיעים גם לרחובות ונתניה, ולפעמים גם עד אשדוד. אנחנו מנסים לענות לכל האתגרים הרחוקים האלו שאתם מבקשים באינסטגרם.
            <br />
            עקב הביקוש הרב, כרגע לא נגיע לחיפה וירושלים.
          </div>
          {/* <Grid className="text-center">
            <Grid.Row columns={3}>
              <ImageGridColumnCard text={'איזורי משלוחים - דרום'} src={data.south.childImageSharp.fixed.src} />
              <ImageGridColumnCard text={'איזורי משלוחים - מרכז'} src={data.center.childImageSharp.fixed.src} />
              <ImageGridColumnCard text={'איזורי משלוחים - צפון'} src={data.north.childImageSharp.fixed.src} />
            </Grid.Row>
          </Grid> */}
          <Divider />
          <Title text="מי אני" subtext="About me" />
          <ImageCard to="/about-me" className="w-h-100-p" data={data.boss.childImageSharp.fixed} text='מי אני' shouldHideText={true} />
          <Divider />
          <ContactForm formOnly />
          <Divider hidden />
          {/* <Title text="שאלות נפוצות" subtext="Questions" /> */}
          {/* <Divider /> */}
          {/* <ImageCard to="/category/29"
            className="thin pos-80"
            data={data.deals.childImageSharp.fixed} text='מבצעים ודילים' />
          <Divider hidden /> */}
          <Title text="הסטוריז שלנו" subtext="Our stories" />
          <Divider hidden />
          <Divider hidden />
          <div className="wrapper-stories-items">
            <div className="stories-items">
              <Link to="https://www.instagram.com/stories/highlights/17861894414026495/">
                <StoryAvatar avatar={data.sofrito.childImageSharp.fixed.src}
                  text="המנות הכי מבוקשות" />
              </Link>

              <Link to="https://www.instagram.com/stories/highlights/17864165059888652/">
                <StoryAvatar avatar={data.avatar_thank_image.childImageSharp.fixed.src}
                  text="לקוחות ממליצים עלינו" />
              </Link>

              <Link to="https://www.instagram.com/stories/highlights/17854120193158717/">
                <StoryAvatar avatar={data.deasert.childImageSharp.fixed.src}
                  text="קינוחים ועוגיות" />
              </Link>

              <Link to="https://www.instagram.com/stories/highlights/17922507544416983/">
                <StoryAvatar avatar={data.thank_2.childImageSharp.fixed.src}
                  text="עוד המלצות עלינו" />
              </Link>

              <Link to="https://www.instagram.com/stories/highlights/17883386317655211/">
                <StoryAvatar avatar={data.avatar_salat.childImageSharp.fixed.src}
                  text="ועוד קצת המלצות" />
              </Link>
            </div>
          </div>
          <Divider hidden />
        </Container>
      </div>
    </Layout>
  )
};

export default IndexPage
