import styled from "styled-components";

export const Transactions = styled.table`
width: 500px;
margin: 15px auto;
text-align: center;

table-layout: fixed;
border-radius: 4px;

/* border-collapse: collapse; */
`

export const Thead = styled.thead`
height: 30px;
background-color: #28E2EF;
border-radius: 4px;
    /* &th:nth-child(1){
width: 20%;
    } */
`;

export const Th = styled.th`
height: 30px;
`;

export const Tr = styled.tr`

    &:nth-child(odd) {
  background-color: #C9CFD0;
    };

    &:nth-child(even) {
  background-color: #E0F2F3;
}
`;

export const Td = styled.td`
height: 30px;
`