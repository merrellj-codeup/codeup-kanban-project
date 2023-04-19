import styled from 'styled-components';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100vw;
  min-height: 100vh;
  height: 100vh;
  position:relative;
  background-color: ${(props) => props.theme.background_dark};
  color: #000;
  transition: background-color 0.2s ease-in-out;
  &.login {
    justify-content: center;
  }
`
const Container = styled.div.attrs({
    'data-container': ''
  })`
    display: flex;
    flex-direction: column;
    align-items:center;
    flex: 0 0 auto;
    width:100%;
    padding: ${props => props.padding ? props.padding : '20px'} 0;
    &.justify-center {
        justify-content: center;
    }
    &.grow {
      flex: 1 0 0;
    }
`
const Row = styled.div.attrs({
    'data-row': ''
  })`
    display: flex;
    width: 100%;
    max-width: 1100px;
    padding: 0 20px;
    column-gap: 20px;
    flex:  ${props => props.flex || ''};
    &.full-width {
        max-width: unset;
    }
    &.space-between {
        justify-content: space-between;
    }
    &.no-padding {
        padding: 0;
    }
    &.grow {
      flex: 1 0 0;
    }
    &.no-gap {
      gap: unset;
    }
    &.align-center {
      align-items: center;
    }
`
const Column = styled.div.attrs({
    'data-column': ''
  })`
    display:flex;
    flex-direction: column;
    flex:  ${(props) => {
        if (props.width) {
          return 'none';
        } else {
          return props.flex || '1 0 auto';
        }
      }
    };
    min-width: 0px;
    justify-content: ${props => props.justify || 'flex-start'};
    align-items: ${props => props.align || 'stretch'};
    position:  ${props => props.position || ''};
    row-gap:  ${props => props.gap || ''};
    width: ${props => props.width ? props.width : ''};
    &.shrink {
        flex: 0 1 auto;
    }
    &.align-right {
        align-items: flex-end;
    }
`


export { PageWrapper, Container, Row, Column };