import styled from "styled-components";

export const Section = styled.section`
max-width: 350px;
margin: 15px auto;
border-radius: 6px;
background-color: whitesmoke;

box-shadow: 5px 5px 10px -5px rgba(34, 60, 80, 0.6) inset;
`

export const Heading = styled.h2`
text-align: center;
padding-top: 10px;

`;

export const StatList = styled.ul`
display: flex;
list-style: none;
    padding: 20px;
    margin-top: 0px;
    margin-bottom: 0px;
    gap: 15px;
`;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Item = styled.li`
/* display: flex, */
/* border: 1px solid black; */
border-radius: 6px;
width: 50px;
gap: 5px;

box-shadow: 16px 17px 16px -10px rgba(0, 5, 9, 0.72);
background-color: ${getRandomHexColor()};
  &:nth-child(1) {
  background-color: ${getRandomHexColor()};
    };

    &:nth-child(2) {
  background-color: ${getRandomHexColor()};
    };

    &:nth-child(3) {
  background-color: ${getRandomHexColor()};
    };
    
    &:nth-child(4) {
  background-color: ${getRandomHexColor()};
    };
`;

export const Label = styled.span`
display: block;
padding: 10px;
`
export const Percentage = styled.span`
display: block;
padding: 10px;
`