import React from 'react';
import { Header } from 'semantic-ui-react';
import './Title.css'

const Title = ({ text, subtext }) => (
  <Header as='h2' className="title-section">
    {text}
    <span className="text">{subtext}</span>
  </Header>
);


export default Title;
