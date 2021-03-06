import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  ${({ theme }) => css`
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    html,
    body {
      font-size: 10px;
      font-family: ${theme.font.primary};
    }

    a,
    button {
      cursor: pointer;
    }

    a {
      text-decoration: none;
    }

    p {
      font-size: ${theme.font.sizes.xsmall};
    }
  `}
`

export default GlobalStyles
