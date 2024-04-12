import CallIcon from '@mui/icons-material/Call'
import { Container, Grid, Button, Typography, Box } from '@mui/material'
import DynamicList from 'src/libraries/Training/DynamicList'
import PageHeader from 'src/libraries/heading/PageHeader'
import EditIcon from '@mui/icons-material/Edit';
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'src/store'
import { getEnquiryList } from 'src/requests/Enquiry/RequestEnquiryList'

const EnquiryList = () => {
  const dispatch = useDispatch()
  const enquiryList = useSelector((state: RootState) => state.Enquiry.EnquiryList)
  console.log(enquiryList)

  useEffect(() => {
    dispatch(getEnquiryList())
  }, [dispatch])

  console.log(enquiryList)

  const [pageIndex, setPageIndex] = useState(0)
  const pageSize = 10

  const handleNextPage = () => {
    setPageIndex(pageIndex + 1)
  }

  const handlePrevPage = () => {
    setPageIndex(pageIndex - 1)
  }

  const paginatedList = enquiryList.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize)

  const HeaderList = ["Name", "Class", "BirthDate", "Gender", "Phone", "Society", "Enquiry Date-Time", "Edit","Follow Up"]
  const IconList = [{ Id: 1, Icon: <EditIcon />, Action: 'Followup',Value:"1" },{ Id: 2, Icon: <CallIcon />, Action: 'Followup',Value:"2"}]

  const totalCount = enquiryList.length
  const startIndex = pageIndex * pageSize + 1
  const endIndex = Math.min((pageIndex + 1) * pageSize, totalCount)

  const clickFollow = () => {}

  return (
    <Container>
      <Grid container spacing={2} sx={{ width: '100%', overflow: 'hidden' }}>
        <Grid item xs={12}>
          <Typography variant="h3" gutterBottom>Enquiry List</Typography>
        </Grid>
        <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, position: 'relative' }}>
          <div style={{ flexGrow: 1, overflow: 'auto' }}>
            <DynamicList
              HeaderList={HeaderList}
              ItemList={paginatedList}
              IconList={IconList}
              ClickItem={clickFollow}
            />
          </div>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px' }}>
            <Typography variant="body2">Enquiry List {startIndex}-{endIndex} of {totalCount} Enquiries</Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Button onClick={handlePrevPage} variant="outlined" disabled={pageIndex === 0}  style={{color:'#878686'}}>
                Previous Page
              </Button>
              <Button onClick={handleNextPage} variant="outlined" disabled={(pageIndex + 1) * pageSize >= totalCount} style={{color:'#878686'}}>
                Next Page
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default EnquiryList