import styled from "styled-components";


export const Item = styled.li`
display: flex;
width: 300px;
justify-content: left;
background-color: whitesmoke;
margin-bottom: 10px;
padding: 10px;
border-radius:4px;

box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
`;

export const Status = styled.span`
width: 15px;
height: 15px;
border-radius: 50%;
margin-top: 28px;
margin-left: 20px;

background-color: ${p => {
    return p.isOnline ? "green" : "red"}};
`

export const Avatar = styled.img`
display: block;
margin-left: 15px;
width: 60px;
`
export const Name = styled.p`
font-size: 22px;
font-weight: 500;
margin-left: 15px;
`