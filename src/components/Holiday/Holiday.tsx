import { Container } from '@mui/material'
import React, {useState} from 'react'
import Card2Text from 'src/library/Card/Card2Text'
import Card3Text from 'src/library/Card/Card3Text'
import Card4Text from 'src/library/Card/Card4Text'
import DotLegend from 'src/library/Legend/DotLegend'
import PageHeader from 'src/library/heading/pageHeader'
import ListCard from 'src/library/List/ListCard'
import List2Card from 'src/library/List/List2Card'
import List3Card from 'src/library/List/List3Card'
import Accordion1 from 'src/library/Accordian/Accordion1'
const ItemList=[{ Text1:"primary" ,Text2:"Secondary" ,Text3:"Purple" ,Text4:"Gray" } , { Text1:"Fourth" , Text2:"Holiday" ,Text3:"Black" ,Text4:"White"}]
const ItemListA=[{Header:"Accordion", Id:1 ,
itemList:[{Text1:"primary" ,Text2:"Secondary" ,Text3:"Purple" ,Text4:"Gray" } ,
 { Text1:"Fourth" , Text2:"Holiday" ,Text3:"Black" ,Text4:"White"}]},

 {Header:"Accordion2", Id:2, 
 itemList:[{Text1:"primary1" ,Text2:"Secondary1" ,Text3:"Purple1" ,Text4:"Gray1" } ,
  { Text1:"Fourth1" , Text2:"Holiday1" ,Text3:"Black1" ,Text4:"White1"}]}



]

function Holiday() {
  const [isExpanded, setIsExpanded] = useState('');
 
  const ClickAccordion=(value)=>{
    console.log(value,"value")
    setIsExpanded(isExpanded === value ? '' : value);
  }
  return (
    <Container>
      <PageHeader heading={'Holiday'}/>
      <DotLegend ItemList={[{Value:'blue', Name:'Holiday'}]}/><br></br>
  
      
  </Container>
  )
}

export default Holiday



