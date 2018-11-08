import React from "react";
import { CellValue } from "./constants";
import styled, { css, keyframes } from './styled-components';

type PosName = 'top' | 'bottom' | 'left' | 'right';

const CellContainer = styled.div<{ posName: PosName[] }>`
    float: left;
    width: 33.3333%;
    height: 33.3333%;
    line-height: 166.67px;
    color: black;
    font-size: 90pt;
    text-align: center;
    border-color: orangered;
    border-width: 3px;

    ${p => p.posName.includes('top') && css`
        border-bottom-style: solid;
    `}
    ${p => p.posName.includes('bottom') && css`
        border-top-style: solid;
    `}
    ${p => p.posName.includes('left') && css`
        border-right-style: solid;
    `}    
    ${p => p.posName.includes('right') && css`
        border-left-style: solid;
    `}    
`;

const appear = keyframes`
    from {
        font-size: 90pt;
        opacity: 0;
    }
    to {
        font-size: 100pt;
        opacity: 1;
    }
`;

const CellInner = styled.div<{ val: CellValue }>`
    ${p => p.val === 'X' && css`
        animation-name: ${appear};
        animation-duration: .3s;
    `}    
    ${p => p.val === 'O' && css`
        animation-name: ${appear};
        animation-duration: .3s;
        animation-delay: .3s;
        animation-fill-mode: forwards;
        opacity: 0;
    `}        
`;

interface CellProps extends React.Props<any> {
    pos: number;
    val: CellValue;
    handleMove: () => void;
}

export class Cell extends React.Component<CellProps, {}> {

    private posToName(pos: number): PosName[] {
        let p: PosName[] = [];
        switch (Math.floor(pos / 3)) {
            case 0:
                p.push('top');
                break;
            case 2:
                p.push('bottom');
                break;
            default: break;
        }
        switch (pos % 3) {
            case 0:
                p.push('left');
                break;
            case 2:
                p.push('right');
                break;
            default:
                break;
        }
        return p;
    }

    private handleClick(e: React.MouseEvent<HTMLDivElement>) {
        this.props.handleMove();
    }

    render() {
        let name = this.props.val;
        if (this.props.val === "") {
            name = "";
        }
        return (
            <CellContainer posName={this.posToName(this.props.pos)} onClick={e => this.handleClick(e)}>
                <CellInner val={name}> {this.props.val} </CellInner>
            </CellContainer>
        );
    }
}
