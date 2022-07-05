import { createGlobalStyle, css, DefaultTheme } from 'styled-components'

const GlobalStyles = createGlobalStyle<DefaultTheme>`
  ${({ theme }) => css`
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    html {
      font-size: 10px;
      font-family: ${theme.font.primary};

      scroll-behavior: smooth;
    }

    p {
      font-size: ${theme.font.sizes.xsmall};
    }
  `}

`

export default GlobalStyles
