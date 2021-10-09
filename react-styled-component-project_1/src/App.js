import { ThemeProvider } from "styled-components";
import appTheme from "./theme/appTheme";
import Header from "./components/Header";
import Content from "./components/Content";
import GlobalStyle from "./components/styles/Global";
import cardsMock from "./mockData/cards";
function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <>
        <GlobalStyle />
        <Header></Header>
        <Content cardsList={cardsMock}></Content>
      </>
    </ThemeProvider>
  );
}

export default App;
