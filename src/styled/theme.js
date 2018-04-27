import createTheme from 'spectacle/lib/themes/default';

export const color = {
  primary: '#fff',
  white: '#fff',
  realBlack: '#1f2022',
  blue: '#03A9FC',
  black: '#343434',
  lightGrey: '#CECECE',
  darkGrey: '#4c4c4c',
};

export const font = {
  primary: 'Open Sans',
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
