// src/styles/GlobalStyles.tsx
import { createGlobalStyle } from 'styled-components'
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyles = createGlobalStyle`
body {
  -webkit-tap-highlight-color: ${theme`colors.background.main`};
  ${tw`antialiased`};
  
}
`

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
)

export default GlobalStyles