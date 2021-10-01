import { ThemeProvider } from "styled-components";
import appTheme from "./theme/appTheme";
import { Container } from "./components/styles/Container.styled";
import Header from "./components/Header";
import GlobalStyle from "./components/styles/Global";
function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <>
        <GlobalStyle />
        <Header></Header>
        <Container>
          <h1>Hello World!</h1>
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
