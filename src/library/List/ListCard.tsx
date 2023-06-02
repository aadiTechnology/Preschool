import React from 'react'
import Card2Text from '../Card/Card2Text'

function ListCard({ItemList}) {
  return (
    <div>
   {ItemList.map((Item,i)=>{
    return(
        <div key={i}>
     <Card2Text Text1={Item.Text1} Text2={Item.Text2} />
        </div>
    )})}
    </div>
  )
}

export default ListCard