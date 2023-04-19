import './components/Layout/normalize.css';
import { useState } from 'react';
import styled, { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeProvider, themes, useTheme } from './context/ThemeContext';
import { PageWrapper, Container, Row, Column } from './components/Layout';
import Header from './components/Header';
import SideNav from './components/SideNav';

const App = () => {
  const { theme } = useTheme();
  const [sidebarClosed, setSidebarClosed] = useState(false);
    const handleSidebarToggle = () => {
        setSidebarClosed(!sidebarClosed);
    }
  return (
    <StyledThemeProvider theme={themes[theme]}>
      <PageWrapper>
        <Header sidebarClosed={sidebarClosed}/>
        <Main as="main" padding="0px" className="grow">
          <Row className="full-width grow no-padding no-gap">
            <SideNav themeMode={theme} sidebarClosed={sidebarClosed} handleSidebarToggle={handleSidebarToggle} />
            <Content></Content>
          </Row>
        </Main>
      </PageWrapper>
    </StyledThemeProvider>
  );
}

const Main = styled(Container)``

const Content = styled(Column)``



export default () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
