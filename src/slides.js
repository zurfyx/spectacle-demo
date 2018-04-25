import React, { Component } from 'react';

import {
  Slide,
  Heading,
  Text,
  SlideSet,
} from 'spectacle';
import {
  Row,
  Column,
} from './components';
import {
  StyledHeading,
  theme,
} from './styled';

// export default class Slides extends Component {
//   render() {
//     return (
//       <SlideSet>
//         <Slide>
//           <Heading size={1} fit>
//             Interview preparation
//           </Heading>
//           <Text margin="42px 0 0" textColor="tertiary" size={1}>
//             A Web Developer approach
//           </Text>
//         </Slide>
//         <Slide>
//           dfas
//         </Slide>
//       </SlideSet>
//     );
//   }
// }

const slides = (
  <SlideSet>
  <Slide>
    <Heading size={1} fit>
      Interview preparation
    </Heading>
    <Text margin="42px 0 0" textColor="tertiary" size={1}>
      A Web Developer approach
    </Text>
  </Slide>
  <Slide>
    dfas
  </Slide>
</SlideSet>
);
export default slides;