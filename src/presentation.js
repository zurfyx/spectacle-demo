import React from 'react';
import { css } from 'react-emotion';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Quote,
  Slide,
  CodePane,
  Image,
  Appear,
  Magic,
} from 'spectacle';

// Import Custom Spectacle
import {
  Column,
  Row,
} from './components';
import {
  StyledHeading,
  StyledList,
  StyledListItem,
  StyledParagraph,
  theme,
} from './styled';

// Require CSS
require('normalize.css');

const titleSlideClass = css`
`;

const contentSlideClass = css`
  height: 700px;
  border: 1px solid red;
`;

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['slide']}
        transitionDuration={200}
        theme={theme}
        progress="none"
        controls={false}>
        <Slide className={titleSlideClass}>
          <StyledHeading size={1} textColor="tertiary" fit>
            Cool presentations
          </StyledHeading>
          <StyledParagraph>
            A Web Developer approach
          </StyledParagraph>
        </Slide>
        <Slide className={contentSlideClass}>
          <StyledHeading size={4}>
            Most common word
          </StyledHeading>
          <CodePane
            lang="javascript"
            source={require('./assets/leetcode819.example')}
            margin="42px auto"
            overflow="overflow"
            theme="external"
          />
        </Slide>
        <Slide className={contentSlideClass}>
          <Appear startValue={{ marginTop: '0px' }} endValue={{ marginTop: '-150px' }}>
            <div>
              <StyledHeading size={4}>
                UTF-8 Validation
              </StyledHeading>
              <CodePane
                lang="javascript"
                source={require('./assets/leetcode393.example')}
                margin="42px auto"
                height="400px"
              />
            </div>
          </Appear>
        </Slide>
        <Slide className={contentSlideClass}>
          <Row className={css`margin: 42px auto;`}>
            <Column>
              <StyledHeading size={4} margin="42px 0" textAlign="left" textColor="secondary">
                Costs
              </StyledHeading>
              <StyledList>
                <StyledListItem>Item 1</StyledListItem>
                <StyledListItem>Item 2</StyledListItem>
                <StyledListItem>Item 3</StyledListItem>
                <StyledListItem>Item 4</StyledListItem>
              </StyledList>
            </Column>
            <Column>
              <Image src="http://javascript-html5-tutorial.com/wp-contentgalleryfun-memes/coders-gonna-code-hell-yeah.png" />
            </Column>
          </Row>
        </Slide>
        <Magic>
          <Slide className={contentSlideClass}>
            <StyledHeading size={4} lineHeight={1} margin="42px 0" textColor="secondary">
                OMG Ponies
            </StyledHeading>
            <Image src="https://s-media-cache-ak0.pinimg.com/originals/65/56/22/655622f0f143b92c764d7ddbe7f8d94e.jpg" height="400px" />
          </Slide>
          <Slide className={contentSlideClass}>
            <StyledHeading size={4} lineHeight={1} margin="42px 0" textColor="secondary">
                Ponies OMG
            </StyledHeading>
            <Image src="http://quotesnhumor.com/wp-content/uploads/2015/07/Top-30-Funny-Cat-Memes-Hilarious.jpg" height="400px" />
          </Slide>
        </Magic>
        <Slide className={contentSlideClass} bgColor="secondary">
          <BlockQuote>
            <Quote>JavaScript is awesome</Quote>
            <Cite>Everyone</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
