import React from 'react';
import styled from 'styled-components';
import { Column } from '../Layout';
import { ReactComponent as DarkSVG } from './images/dark-mode.svg';
import { ReactComponent as LightSVG } from './images/light-mode.svg';
import { ReactComponent as SidebarToggleIconSVG } from './images/eye.svg';
import { useTheme } from '../../context/ThemeContext';


const SideNav = (props) => {
    const { theme, toggleTheme } = useTheme();
    
    return (
        <Wrapper className={props.sidebarClosed ? 'closed' : ''}>
            <InnerWrapper>
                <Boards>

                </Boards>
                <NavActions>
                    <DarkModeWrapper onClick={toggleTheme}>
                        <LightModeIcon />
                        <ModeToggleWrapper>
                            <ModeToggleCircle mode={props.themeMode}></ModeToggleCircle>
                        </ModeToggleWrapper>
                        <DarkModeIcon />
                    </DarkModeWrapper>
                    <SidebarToggle onClick={props.handleSidebarToggle}>
                        <SidebarToggleIcon />
                        <p>Hide Sidebar</p>
                    </SidebarToggle>
                </NavActions>
            </InnerWrapper>
        </Wrapper>
    );
}

const Wrapper = styled(Column)`
  background-color: ${(props) => props.theme.background};
  flex: unset;
  width: 300px;
  transition: all 0.2s ease-in-out;
  position: relative;
  &.closed {
    width: 0px;
  }
`

const InnerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 300px;
    border-right: 1px solid ${(props) => props.theme.lines};
    transition: all 0.2s ease-in-out;
    position: absolute;
    top:0;
    right:0;
`;

const Boards = styled.div`
    flex: 1 0 0;
    display: flex;
    flex-direction: column;
`;

const NavActions = styled.div`
    flex: 0 1 auto;
    display: flex;
    flex-direction: column;
    padding: 20px 20px 100px 20px;
`;

const DarkModeWrapper = styled.div`
    border-radius: 6px;
    background-color: ${(props) => props.theme.background_dark};
    min-height: 50px;
    display:flex;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.theme.text_dark};
    transition: all ease .2s;
    gap: 20px;
    cursor: pointer;
    &:hover {
        color: ${(props) => props.theme.text};
    }
`;

const DarkModeIcon = styled(DarkSVG)`
    transition: all ease .2s;
`

const LightModeIcon = styled(LightSVG)`
    transition: all ease .2s;
`
const ModeToggleWrapper = styled.div`
    border-radius: 999px;
    height: 20px;
    width: 40px;
    position: relative;
    background-color: ${(props) => props.theme.cta};
`

const ModeToggleCircle = styled.div`
    height: 14px;
    width: 14px;
    border-radius: 999px;
    background-color: #fff;
    position: absolute;
    top: 3px;
    transition: left ease .2s;
    left: ${(props) => {
        if (props.mode === 'light') {
            return '3px';
        } else {
            return '23px';
        }
    }};
`
const SidebarToggle = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    left: 0;
    bottom: 20px;
    height: 50px;
    width: 270px;
    color: ${(props) => props.theme.text_dark};
    transition: all ease .2s;
    padding-left: 25px;
    border-radius: 0px 999px 999px 0px;
    gap: 20px;
    cursor: pointer;
    & p {
        opacity: 1;
        white-space: nowrap;
        transition: opacity ease .2s;
    }
    &:hover {
        color: ${(props) => props.theme.text};
    }
    .closed & {
        width: 60px;
        background-color: ${(props) => props.theme.cta};
        color: #fff;
        & p {
            opacity: 0;
            pointer-events: none;
        }
    }
`;

const SidebarToggleIcon = styled(SidebarToggleIconSVG)`
    width: 16px;
    flex: 0 0 auto;
`;

export default SideNav;