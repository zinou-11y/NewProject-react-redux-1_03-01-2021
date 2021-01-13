import styled from "styled-components";

export const Homesection =styled.div `
    
    text-align: center;
    position: relative;
`
export const Image = styled.img `
    background-size: cover;
    width :100%;
    background-position: center;
    text-align: center;
    position: relative;
    height: 600px;
    opacity: 0.8;

`

export const Homeinformation = styled.div ` 
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%)
` 
    

export const Hometitle = styled.h2 `
    font-size: 55px;
    font-weight: bold;
    color: #fff;
    text-shadow: -2px 0px 20px black;
` 
export const Homeinfo = styled.h4 `
    font-size: 35px;
    color: #0000cc;
    margin-bottom: 15px;   
    text-shadow: 2px 2px 18px black;
` 
export const Homedesc = styled.p `
    font-size: 20px;
    line-height: 1.5;
    color: #000;
    margin-bottom: 20px
    text-shadow :0.3;
    text-shadow: 2px 2px 25px black;
` 
export const Span =styled.span `
color: #ffff00
`
export const Homebtn =styled.button `
    background: #4a00d8;
    color: #fff;
    font-size: 18px;
    width: 120px;
    height:40px;
    border: 0;
    padding: 10px;
    cursor: pointer;
    font-weight: bold

        &:hover {
            background: #fff;
            color: #eb5424
    }
`





