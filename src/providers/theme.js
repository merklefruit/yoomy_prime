// This provider is responsible for the styled-components theme data.
// Find the actual theme object in "styles/theme".

import { ThemeProvider } from "styled-components";
import theme from "styles/theme";

const WithTheme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default WithTheme;
