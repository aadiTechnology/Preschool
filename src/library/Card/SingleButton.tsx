import { Button ,Card} from '@mui/material'
import React from 'react'



const SingleButton = ({Item,ClickItem}) => {
  const onClick=()=>{
    Item = {...Item,IsActive:Item.IsActive?Item.IsActive:!Item.IsActive}
    ClickItem(Item)}
  
    return (
    
    <div>
    
        <Card  
        onClick={onClick}  >
            {Item.Name}
            </Card>
           
            
    </div>
  )
}

export default SingleButton