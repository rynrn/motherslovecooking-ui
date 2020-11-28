import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Divider, Grid, Container } from 'semantic-ui-react';
import ImageGallery from 'react-image-gallery';
import ImageGridColumnCard from '../components/ImageCard/ImageGridColumnCard';
import Story from '../components/Story/Story';
import StoryAvatar from '../components/StoryAvatar/StoryAvatar';
import ImageCard from '../components/ImageCard/ImageCard';
import Title from '../components/Title/Title';
import Layout from "../components/Layout/Layout"
import '../utils/image-util';
// import SEO from "../components/seo"

const IndexPage = () => {
  const [currentStory, setCurrentStory] = useState('');
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
        ...menuItem
      }
      delivery: file(relativePath: { eq: "shutterstock_1771298879.jpg" }) {
        ...menuItem
      }
      deals: file(relativePath: { eq: "shutterstock_1612915471.jpg" }) {
        ...menuItem
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
    }
  `);

  const hero = [];
  for (let i = 1; i < 4; i++) {
    hero.push({
      original: data['hero' + i].childImageSharp.fluid.src,
      srcSet: data['hero' + i].childImageSharp.fluid.srcSet,
      sizes: data['hero' + i].childImageSharp.fluid.sizes,
      description: "מאמא באהבה"
    })
  }

  const hotDishes = [];
  for (let i = 1; i < 7; i++) {
    hotDishes.push({
      original: data['rec_image_' + i].childImageSharp.fluid.src,
      srcSet: data['rec_image_' + i].childImageSharp.fluid.srcSet,
      sizes: data['rec_image_' + i].childImageSharp.fluid.sizes,
      description: "מאמא באהבה"
    })
  }

  const thanks = [];
  for (let i = 1; i < 5; i++) {
    thanks.push({
      original: data['thank_image_' + i].childImageSharp.fluid.src,
      srcSet: data['thank_image_' + i].childImageSharp.fluid.srcSet,
      sizes: data['thank_image_' + i].childImageSharp.fluid.sizes,
      description: "מאמא באהבה"
    })
  }

  const loveFood = [];
  for (let i = 1; i < 5; i++) {
    loveFood.push({
      original: data['love_food_image_' + i].childImageSharp.fluid.src,
      srcSet: data['love_food_image_' + i].childImageSharp.fluid.srcSet,
      sizes: data['love_food_image_' + i].childImageSharp.fluid.sizes,
      description: "מאמא באהבה"
    })
  }

  return (
    <Layout>
      {/* <SEO title="Home" /> */}
      <div style={{ height: '100%' }}>
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

            .image-gallery-slide .image-gallery-description {
              bottom: 5%;
              left: 50%;
              background: transparent;
              font-size: 40px;
              transform: translate(-50%, -30%);
              font-family: 'Heebo', sans-serif;
              font-weight: 300;
              text-shadow: 0px 0px 1px #000;
              background: rgba(0,0,0,0.3);
              border-radius: 30px;
              padding: 10px;
            }
          `}</style>
        <ImageGallery items={hero}
          isRTL={true}
          sizes="(min-width: 400px) 400px, 100vw"
          showThumbnails={false}
          showFullscreenButton={false}
          showPlayButton={false} />
        <Container>
          <Divider hidden />
          <Title text="תפריט" subtext="Menu" />
          <Divider hidden />
          <Grid className="text-center">
            <Grid.Row columns={3}>
              <ImageGridColumnCard text={'עיקריות'} to="/category/21" data={data.fish.childImageSharp.fixed} />
              <ImageGridColumnCard text={'מיוחדים'} to="/category/15" data={data.wine.childImageSharp.fixed} />
              <ImageGridColumnCard text={'תוספות'} to="/category/17" data={data.pasta.childImageSharp.fixed} />
            </Grid.Row>
            <Grid.Row columns={3}>
              <ImageGridColumnCard text={'סלטים'} to="/category/27" data={data.salat.childImageSharp.fixed} />
              <ImageGridColumnCard text={'מרקים'} to="/category/23" data={data.soup.childImageSharp.fixed} />
              <ImageGridColumnCard text={'קינוחים'} to="/category/28" data={data.dessert.childImageSharp.fixed} />
            </Grid.Row>
          </Grid>
          <Divider hidden />
          <ImageCard to="/products" data={data.delivery.childImageSharp.fixed} text='להזמנות' />
          <Divider />
          <Title text="איזורי משלוח" subtext="Delivery zones" />
          <Grid className="text-center">
            <Grid.Row columns={3}>
              <ImageGridColumnCard text={'דרום'} src={'https://image.shutterstock.com/image-photo/pink-rocks-desert-against-beautiful-600w-1039193779.jpg'} />
              <ImageGridColumnCard text={'מרכז'} src={'https://image.shutterstock.com/image-photo/apartment-building-flowers-on-balconies-600w-654568261.jpg'} />
              <ImageGridColumnCard text={'צפון'} src={'https://image.shutterstock.com/image-photo/fantastic-swing-on-tree-pink-600w-124230778.jpg'} />
            </Grid.Row>
          </Grid>
          <Divider />
          <Title text="מי אני" subtext="About me" />
          <ImageCard data={data.boss.childImageSharp.fixed} text='מי אני' shouldHideText={true} />
          <Divider hidden />
          <Title text="שאלות נפוצות" subtext="Questions" />
          <Divider />
          <ImageCard to="/category/29" data={data.deals.childImageSharp.fixed} text='מבצעים ודילים' />
          <Divider hidden />
          <Title text="הסטוריז שלנו" subtext="Our stories" />
          <Divider hidden />
          <Divider hidden />
          <div className="wrapper-stories-items">
            <div className="stories-items">
              <StoryAvatar oepn={() => setCurrentStory('hotDishes')}
                stories={hotDishes}
                avatar={data.avatar_rec_image.childImageSharp.fixed}
                text="המנות הכי מבוקשות" />
              <StoryAvatar oepn={() => setCurrentStory('thanks')}
                stories={thanks}
                avatar={data.avatar_thank_image.childImageSharp.fixed}
                text="לקוחות ממליצים עלינו" />
              <StoryAvatar oepn={() => setCurrentStory('loveFood')}
                stories={loveFood}
                avatar={data.avatar_love_food_image.childImageSharp.fixed}
                text="לאנשים שמבינים באוכל" />
            </div>
          </div>
          {currentStory === 'hotDishes' && <Story close={() => setCurrentStory('')} stories={hotDishes} />}
          {currentStory === 'thanks' && <Story close={() => setCurrentStory('')} stories={hotDishes} />}
          {currentStory === 'loveFood' && <Story close={() => setCurrentStory('')} stories={hotDishes} />}
          <Divider hidden />
        </Container>
      </div>
    </Layout>
  )
};

export default IndexPage
