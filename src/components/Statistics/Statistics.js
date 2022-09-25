import {Section, Heading, StatList, Item, Label, Percentage} from './Statistics.styled'

export const Statistics = ({title, stats }) => {

    return (
<Section>
  {title === "Upload stats" ?
    (<Heading>{title}</Heading>) : ""}
  
  <StatList>
    {stats.map(item =>
      <Item key={item.id}>
        <Label>{item.label}</Label>
        <Percentage>{item.percentage}%</Percentage>
      </Item>)}
  </StatList>
</Section>);
    
};