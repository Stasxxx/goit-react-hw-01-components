import {Heading, StatList, Item, Label, Percentage} from './statistics.styled'

export const Statistics = ({title, stats }) => {

    return (
<section>
  {title === "Upload stats" ?
    (<Heading>{title}</Heading>) : ""}
  
  <StatList>
    {stats.map(item =>
      <Item key={item.id}>
        <Label>{item.label}</Label>
        <Percentage>{item.percentage}%</Percentage>
      </Item>)}
  </StatList>
</section>);
    
};