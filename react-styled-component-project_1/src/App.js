import { ThemeProvider } from "styled-components";
import appTheme from "./theme/appTheme";
import { Container } from "./components/styles/Container.styled";
import Header from "./components/Header";
function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <>
        <Header></Header>
        <Container>
          <h1>Hello World!</h1>
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
