import styled from 'styled-components';

export const WorkSection= styled.div `
    height: auto;
    padding: 50px 0;
    overflow: hidden;
    background: #fff    
`
export const Worktitle =styled.h2 `
font-size: 60px;
`
export const Span = styled.span `   
    font-weight: normal
`

export const Workpart = styled.div `
    margin-top: 20px;
    width: 29%;
    float: left;
    height: auto;
    padding: 100px 0;
    border: 1px solid #888;
    box-sizing: border-box;
    text-align: center;
    margin-left: 5%; 
    margin-left: ${props=>props.first === 1 ? "1" : '4%'}
   
`


export const Icon = styled.i`
    color: #888;
    margin-bottom: 20px
`

export const Parttitle =styled.h4`
    font-size: 24px;
    color: #eb5424;
    margin-bottom: 20px
`

export const Line= styled.hr `
    width: 60%;
    margin: auto;
    margin-bottom: 20px
`

export const Partdesc= styled.p ` 
    font-size: 14px;
    color: #888;
    padding: 20px
`
export const Homebtn = styled.button `
    background: #4a00d8;
    color: #fff;
    font-size: 18px;
    width: 150px;
    border: 0;
    padding: 15px;
    cursor: pointer;
    font-weight: bold
&:hover {
    background: #fff;
    color: #eb5424
}
`