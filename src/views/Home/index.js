import React, { Component } from 'react';
import { Image, Divider, Header, Grid, Container } from 'semantic-ui-react';
import ImageGallery from 'react-image-gallery';
import ImageGridColumnCard from '../../components/ImageCard/ImageGridColumnCard';
import ImageCard from '../../components/ImageCard/ImageCard';
import Title from '../../components/Title/Title';
import { dataHero, dataHotMeals, dataCustomersRecommendation } from './data';


class Home extends Component {
  render() {
    return (
      <div style={{ height: '100%' }}>
        <style>{`
          #root .pusher .nav-bar {
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
            bottom: 30%;
            left: 50%;
            background: transparent;
            font-size: 40px;
            transform: translate(-50%, -30%);
            font-family: 'Heebo', sans-serif;
            font-weight: 300;
            text-shadow: 0px 0px 1px #000;
          }
        `}</style>
        <ImageGallery items={dataHero}
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
              <ImageGridColumnCard text={'עיקריות'} src={'https://image.shutterstock.com/image-photo/raw-tilapia-fish-fillet-rosemary-600w-1748193971.jpg'} />
              <ImageGridColumnCard text={'מיוחדים'} src={'https://image.shutterstock.com/image-photo/white-roses-wine-glasses-on-600w-1175348251.jpg'} />
              <ImageGridColumnCard text={'תוספות'} src={'https://image.shutterstock.com/image-photo/italian-pasta-spaghetti-tomatoes-basil-600w-1684384675.jpg'} />
            </Grid.Row>
            <Grid.Row columns={3}>
              <ImageGridColumnCard text={'סלטים'} src={'https://image.shutterstock.com/image-photo/healthy-vegan-food-watermelon-radish-600w-614151992.jpg'} />
              <ImageGridColumnCard text={'מרקים'} src={'https://image.shutterstock.com/image-photo/cold-beet-soup-egg-cucumber-600w-275079959.jpg'} />
              <ImageGridColumnCard text={'קינוחים'} src={'https://image.shutterstock.com/image-photo/valentine-cupcake-600w-44971894.jpg'} />
            </Grid.Row>
          </Grid>
          <Divider hidden />
          <ImageCard src={'https://image.shutterstock.com/image-photo/profile-side-view-portrait-his-600w-1683485557.jpg'} text='להזמנות' />
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
          <ImageCard src={'https://image.shutterstock.com/image-vector/just-girl-boss-building-her-600w-1112366681.jpg'} text='מי אני' shouldHideText={true} />
          <Divider hidden />
          <Title text="שאלות נפוצות" subtext="Questions" />
          <Divider />
          <ImageCard src={'https://image.shutterstock.com/image-illustration/floating-colorful-shopping-bags-collection-600w-1664167723.jpg'} text='מבצעים ודילים' />
          <Divider hidden />
          <Title text="המנות הכי חמות" subtext="The hottest dishes" />
          <Divider hidden />
          <ImageGallery items={dataHotMeals}
            isRTL={true}
            sizes="(min-width: 400px) 400px, 100vw"
            showThumbnails={false}
            showFullscreenButton={false}
            showPlayButton={false} />
          <Divider hidden />
          <Title text="לקוחות ממליצים" subtext="Customers recommend" />
          <ImageGallery items={dataCustomersRecommendation}
            isRTL={true}
            sizes="(min-width: 400px) 400px, 100vw"
            showThumbnails={false}
            showFullscreenButton={false}
            showPlayButton={false} />
          <Divider />
          <Title text="עקבו אחרי באינסטגרם" subtext="שם אני מפרסמת הרבה עדכונים" />
          <div className="text-center">
            <a href="https://www.instagram.com/riki_avisror/" rel="noopener noreferrer nofollow" target="_blank">
              <Image className="img-center" src='./insta-logo.png' size='small' alt='עקבו אחרי באינסטגרם' />
              <Image className="img-center" src='./insta-text.png' size='small' alt='עקבו אחרי באינסטגרם' />
            </a>
          </div>
        </Container>
      </div>
    );
  }
}


export default Home;
