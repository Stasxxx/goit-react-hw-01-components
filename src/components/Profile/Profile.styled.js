import styled from "styled-components";

export const Card = styled.div`
padding: 0px;
width: 300px;
margin-top: 10px;
margin-left: auto;
margin-right: auto;
border-radius: 10px;

background-color: whitesmoke;
box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
`;

export const Description = styled.div`

`;

export const Avatar = styled.img`
width: 200px;
display: block;
margin-left:auto;
margin-right:auto;
`;

export const Name = styled.p`
text-align: center;
font-weight: 700;
font-size: 28px;
`;

export const Tag = styled.p`
text-align: center;
color: grey;
`

export const Location = styled.p`
text-align: center;
color: grey;
`;

export const Stats = styled.ul`
display: flex;
list-style: none;
padding: 0px;
`;

export const StatsItem = styled.li`
width: 100px;
padding: 10px;
display: flex;
flex-direction: column;
flex-wrap: wrap;
border: 10px;
`;

export const Label = styled.span`
color: grey;
margin: 0 auto;
`;

export const Quantity = styled.span`
font-weight: 500;
text-align: center;
margin: 0 auto;
`