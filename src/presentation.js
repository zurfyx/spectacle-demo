import React from 'react';
import styled, { css } from 'styled-components';

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

// Import Custom Spectacle
import {
  Column,
  Row,
} from './components';
import {
  theme,
} from './styled';

// Require CSS
require('normalize.css');

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['slide']}
        transitionDuration={200}
        theme={theme}
        progress="none"
        controls={false}>
        <Slide>
          <Heading size={1} fit>
            Cool presentations
          </Heading>
          <Text margin="42px 0 0" textColor="grey" size={1}>
            A Web Developer approach
          </Text>
        </Slide>
        <Slide>
          <Heading size={4}>
            Most common word
          </Heading>
          <CodePane
            lang="javascript"
            source={require('./assets/leetcode819.example')}
            margin="42px auto"
            overflow="overflow"
            theme="external"
          />
        </Slide>
        <Slide>
          <Heading size={4}>
            UTF-8 Validation
          </Heading>
          <CodePane
            lang="javascript"
            source={require('./assets/leetcode393.example')}
            margin="42px auto"
            overflow="overflow"
            theme="external"
          />
        </Slide>
        <Slide bgColor="tertiary">
          <Heading size={4} lineHeight={1} textColor="primary">
            Most common word
          </Heading>
          <CodePane
            lang="javascript"
            source={require('./assets/leetcode393.example')}
            margin="42px auto"
            overflow = "overflow"
            theme="external"
          />
        </Slide>
        <Slide bgColor="primary">
          <Row className={css`margin: 42px auto;`}>
            <Column>
              <Heading size={4} lineHeight={1} margin="42px 0" textAlign="left" textColor="secondary">
                Costs
              </Heading>
              {/* <List className={dashListStyle}>
                <ListItem className={dashListItemStyle}>Item 1</ListItem>
                <ListItem className={dashListItemStyle}>Item 2</ListItem>
                <ListItem className={dashListItemStyle}>Item 3</ListItem>
                <ListItem className={dashListItemStyle}>Item 4</ListItem>
              </List> */}
            </Column>
            <Column>
              <Image src="http://javascript-html5-tutorial.com/wp-contentgalleryfun-memes/coders-gonna-code-hell-yeah.png" />
            </Column>
          </Row>
        </Slide>
        <Magic>
          <Slide bgColor="primary">
            <Heading size={4} lineHeight={1} margin="42px 0" textColor="secondary">
                OMG Ponies
            </Heading>
            <Image src="https://s-media-cache-ak0.pinimg.com/originals/65/56/22/655622f0f143b92c764d7ddbe7f8d94e.jpg" height="400px" />
          </Slide>
          <Slide bgColor="primary">
            <Heading size={4} lineHeight={1} margin="42px 0" textColor="secondary">
                Ponies OMG
            </Heading>
            <Image src="http://quotesnhumor.com/wp-content/uploads/2015/07/Top-30-Funny-Cat-Memes-Hilarious.jpg" height="400px" />
          </Slide>
        </Magic>
        <Slide bgColor="secondary">
          <BlockQuote>
            <Quote>JavaScript is awesome</Quote>
            <Cite>Everyone</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}

// const slideStyle = css`
//   height: 700px;
// `;

// const headingStyle = css`
// `;

// const dashListStyle = css`
//   list-style-type: none;
// `;

// const dashListItemStyle = css`
//   padding-left: 1.1em;
  
//   &:before {
//     content: "–"; /* en dash */
//     position: absolute;
//     margin-left: -1.1em;
//   }
// `;