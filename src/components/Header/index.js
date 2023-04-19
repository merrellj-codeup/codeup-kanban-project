import React from 'react';
import styled from 'styled-components';
import { Container, Row, Column } from '../Layout';
import {ReactComponent as LogoSVG} from './images/logo.svg';
import {ReactComponent as EllipsesSVG } from './images/ellipses.svg';


const Header = (props) => {
    return (
        <HeaderContainer as="header" padding="0px" className="justify-center">
          <Row className="full-width grow no-padding no-gap">
            <HeaderLeft className={props.sidebarClosed ? 'closed' : ''}>
                <Logo src={LogoSVG} />
            </HeaderLeft>
            <HeaderRight>
                <Row className="full-width align-center">
                    <Column className="shrink justify-center">
                        <PageTitle>Board Title</PageTitle>
                    </Column>
                    <HeaderActions>
                        <ButtonWrapper>
                            <p>+ Add New Task</p>
                        </ButtonWrapper>
                        <BoardMenuContainer>
                            <BoardMenuToggle>
                                <Ellipses />
                            </BoardMenuToggle>
                        </BoardMenuContainer>
                    </HeaderActions>
                </Row>
            </HeaderRight>
          </Row>
        </HeaderContainer>
    );
}

const HeaderContainer = styled(Container)`
  min-height: 97px;
  background-color: ${(props) => props.theme.background};
  transition: background-color 0.2s ease-in-out;
`;

const HeaderLeft = styled(Column)`
  flex: unset;
  width: 300px;
  padding: 0 20px;
  border-right: 1px solid ${(props) => props.theme.lines};
  border-bottom: 1px solid transparent;
  justify-content: center;
  color: ${(props) => props.theme.text};
  transition: all 0.2s ease-in-out;
  &.closed {
    border-bottom: 1px solid ${(props) => props.theme.lines};
  }
`

const HeaderRight = styled(Column)`
  border-bottom: 1px solid ${(props) => props.theme.lines};
  justify-content: center;
  transition: all 0.2s ease-in-out;
`

const Logo = styled(LogoSVG)`
    max-height: 25px;
    fill: currentColor;
    transition: fill 0.2s ease-in-out;
`

const PageTitle = styled.h1`
    color: ${(props) => props.theme.text};
    transition: color 0.2s ease-in-out;
`;

const HeaderActions = styled(Column)`
    flex-direction: row;
    gap: 20px;
    justify-content: end;
`

const BoardMenuContainer = styled.div`
    display:flex;
    flex-direction: column;
`;

const BoardMenuToggle = styled.div`
    color: ${(props) => props.theme.text_dark};
    transition: color 0.2s ease-in-out;
    min-height: 20px;
    min-width: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1 0 0;
    cursor: pointer;
`;

const Ellipses = styled(EllipsesSVG)``;

const ButtonWrapper = styled.button`
    cursor: pointer;
    outline: none;
    border: none;
    transition: all ease .2s;
    background-color: ${(props) => props.theme.cta};
    color: #fff;
    font-size: 15px;
    padding: 15px 25px;
    border-radius: 999px;
    align-items: center;
    &:hover {
        background-color: ${(props) => props.theme.cta_hover};
    }
    &.disabled {
        opacity: .5;
        pointer-events: none;
    }
`

export default Header;