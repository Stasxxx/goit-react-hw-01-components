import styled from "styled-components";

export const Item = styled.li`
display: flex;
width: 250px;
justify-content: left;
background-color: blue;
margin-bottom: 10px;
padding: 10px;
border-radius:4px 
` 
export const Status = styled.span`
width: 15px;
height: 15px;
border-radius: 50%;
margin-top: 20px;
/* margin-right: 10px; */
margin-left: 20px;

background-color: ${p => {
    return p.isOnline ? "green" : "red"}};
`

export const Avatar = styled.img`
display: block;
/* margin-right: 100px; */
margin-left: 15px;
/* justify-content: left; */
width: 60px;
`
export const Name = styled.p`
/* display: block; */
margin-left: 15px;
`