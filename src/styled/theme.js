import createTheme from 'spectacle/lib/themes/default';

export const color = {
  primary: '#fff',
  separator: '#cecece',
  white: '#fff',
  realBlack: '#1f2022',
  blue: '#03a9fc',
  bluegreen: '#4abdac',
  black: '#343434',
  lightGrey: '#cecece',
  darkGrey: '#4c4c4c',
};

export const font = {
  primary: 'Open Sans',
  secondary: 'Lato', // Title, table heading..
  opensans: 'Open Sans',
  lato: 'Lato',
  roboto: 'Roboto',
  montserrat: 'Montserrat',
  raleway: 'Raleway',
  playfair: 'Playfair Display',
  merriweather: 'Merriweather',
};

export default createTheme(
  color,
  font,
);
