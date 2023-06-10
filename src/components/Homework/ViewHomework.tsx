import React, { useState, useEffect } from 'react'
import BackButton from 'src/library/BackButton/BackButton'
import PageHeader from 'src/library/heading/pageHeader'

function ViewHomework() {
  return (
    <div>
      <PageHeader heading={'View Homework'} />
      <BackButton  FromRoute={'/Student/Homework'}/>
    </div>
  )
}
export default ViewHomework