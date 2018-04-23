/* eslint import/no-webpack-loader-syntax: off */

// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  CodePane,
  Image,
  Magic,
} from 'spectacle';
import styled, { css } from 'react-emotion';

// Import Custom Spectacle tags
import {
  Row,
  Column,
} from './components';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

// Require assets
const leetcode819 = require('./assets/leetcode819.example');
console.info(leetcode819);

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quartenary: '#CECECE',
  },
  {
    primary: 'Roboto',
    secondary: 'Playfair Display',
  }
);

const logo = css`
  position: absolute;
  top: 0;
  left: 0;
  padding: 15px;
`;

const slideStyle = css`
  height: 700px;
`;

const dashListStyle = css`
  list-style-type: none;
`;

const dashListItemStyle = css`
  padding-left: 1.1em;
  
  &:before {
    content: "–"; /* en dash */
    position: absolute;
    margin-left: -1.1em;
  }
`;

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
        progress="none"
        controls={false}
      >
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit lineHeight={1} textFont="primary" textColor="secondary">
            Interview preparation
          </Heading>
          <Text margin="42px 0 0" textColor="tertiary" size={1}>
            A Web Developer approach
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={4} lineHeight={1} textFont="primary" textColor="secondary">
            Most common word
          </Heading>
          <CodePane
            lang="javascript"
            source={leetcode819}
            margin="42px auto"
            overflow = "overflow"
            theme="external"
          />
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={4} lineHeight={1} textColor="primary">
            Most common word
          </Heading>
          <CodePane
            lang="javascript"
            source={leetcode819}
            margin="42px auto"
            overflow = "overflow"
            theme="external"
          />
        </Slide>
        <Slide className={slideStyle} transition={['fade']} bgColor="primary">
          <Row className={css`margin: 42px auto;`}>
            <Column>
              <Heading size={4} lineHeight={1} margin="42px 0" textAlign="left" textColor="secondary">
                Costs
              </Heading>
              <List className={dashListStyle}>
                <ListItem className={dashListItemStyle}>Item 1</ListItem>
                <ListItem className={dashListItemStyle}>Item 2</ListItem>
                <ListItem className={dashListItemStyle}>Item 3</ListItem>
                <ListItem className={dashListItemStyle}>Item 4</ListItem>
              </List>
            </Column>
            <Column>
              <Image src="http://javascript-html5-tutorial.com/wp-contentgalleryfun-memes/coders-gonna-code-hell-yeah.png" />
            </Column>
          </Row>
        </Slide>
        <Magic>
          <Slide className={slideStyle} bgColor="primary">
            <Heading size={4} lineHeight={1} margin="42px 0" textColor="secondary">
                OMG Ponies
            </Heading>
            <Image src="https://s-media-cache-ak0.pinimg.com/originals/65/56/22/655622f0f143b92c764d7ddbe7f8d94e.jpg" height="400px" />
          </Slide>
          <Slide className={slideStyle} bgColor="primary">
            <Heading size={4} lineHeight={1} margin="42px 0" textColor="secondary">
                Ponies OMG
            </Heading>
            <Image src="http://quotesnhumor.com/wp-content/uploads/2015/07/Top-30-Funny-Cat-Memes-Hilarious.jpg" height="400px" />
          </Slide>
        </Magic>
        <Slide className={slideStyle} transition={['fade']} bgColor="secondary">
          <BlockQuote>
            <Quote>JavaScript is awesome</Quote>
            <Cite>Everyone</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
