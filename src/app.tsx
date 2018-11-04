import * as React from "react";
import { render } from "react-dom";
import { Board } from "./Board";
import { RestartBtn } from "./RestartBtn";
import { GameStateBar } from "./GameStateBar";
import styled, { css, createGlobalStyle } from './styled-components';

const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    * {
        box-sizing: inherit;
    }
`;

const AppContainer = styled.div`
    font-family: 'Open Sans', sans-serif;
    margin: 100px;
    width: 500px;
    margin-left: auto;
    margin-right: auto;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`;

const Description = styled<{ player: 'X' | 'O' }, 'div'>('div')`
    cursor: pointer;
    font-size: 25px;
    font-weight: bold;
    padding: 15px 0px;
    position: relative;
    display: inline-block;
    width: 200px;
    text-align: center;
    margin-top: 30px;
    margin-right: -35px;

    ${p => p.player === 'X' && css`
        margin-left: 60px;
    `}    
    ${p => p.player === 'O' && css`
        margin-right: 60px;
    `}        
`;

class App extends React.Component<{}, {}> {
    render() {
        return (
            <AppContainer>
                <GlobalStyle />
                <Board />
                <div>
                    <Description player="X"> Player(X) </Description>
                    <Description player="O"> Computer(O) </Description>
                </div>
                <RestartBtn />
                <GameStateBar />
            </AppContainer>
        )
    }
}

render(
    <App />, document.getElementById("content")
);
