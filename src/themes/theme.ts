import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

// Info: Default Theme configuration.
// https://material-ui.com/customization/default-theme/
let theme = createMuiTheme({
  typography: {
    htmlFontSize: 10,
  },
});

// To automate this setup, you can use the responsiveFontSizes() helper to make Typography font sizes in the theme responsive.
// https://material-ui.com/customization/theming/#responsivefontsizes-theme-options-theme
theme = responsiveFontSizes(theme);

export default theme;
