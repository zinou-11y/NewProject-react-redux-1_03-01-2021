import styled from 'styled-components';

export const Navbarsection = styled.div`
    padding: 3px 0;
    overflow: hidden;
    background: #fff;
    position: relative;
    border-bottom: 1px solid #000;
`

 export const Logo = styled.div`
    width: 30%;
    float: left;
`

 export const Logotext = styled.h2`
    font-size: 30px;
    font-weight: bold;
    color:#4a00d8;
`

 export const Ullist = styled.ul` 
    width: 70%;
    float: left;
    list-style: none;
    padding: 0;
`
 export const Listitem = styled.li`
    display: inline-block;
`
export const Homebtn =styled.button `
    background: #4a00d8;
    color: #fff;
    font-size: 13px;
    width: 60px;
    border: 0;
    padding: 8px;
    margin : 7px;
    font-weight: bold

        &:hover {
            background: #fff;
            color: #eb5424
    }
`


