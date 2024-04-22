import CallIcon from '@mui/icons-material/Call';
import LinkIcon from '@mui/icons-material/Link';
import DeleteIcon from '@mui/icons-material/Delete';
import { Container, Grid, Button, Typography, Box, Card, IconButton, Tooltip  } from '@mui/material';
import DynamicList from 'src/libraries/Training/DynamicList';

import PageHeader from 'src/libraries/heading/PageHeader';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/store';
import { DeleteFollowUpDetails, getFollowUpList, resetDeleteFollowUpMsg } from 'src/requests/FollowUp/RequestFollowUpList'; 
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const FollowUpList = () => {
  const navigate = useNavigate();
    const dispatch = useDispatch();
    const followUpList = useSelector((state: RootState) => state.FollowUp.FollowUpList);
    const followUpDeleteMsg = useSelector((state: RootState) => state.FollowUp.DeleteFollowUpMsg);
    useEffect(() => {
        dispatch(getFollowUpList());
    }, [dispatch]);

    useEffect(() => {
      if (followUpDeleteMsg !== '') {
      toast.success(followUpDeleteMsg)
      dispatch(resetDeleteFollowUpMsg())
      dispatch(getFollowUpList());
    }
  },[followUpDeleteMsg]);


    const [pageIndex, setPageIndex] = useState(0);
    const pageSize = 10;

    
    const handleNextPage = () => {
        setPageIndex(pageIndex + 1);
    };

   
    const handlePrevPage = () => {
        setPageIndex(pageIndex - 1);
    };


    const paginatedList = followUpList.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize);

    const HeaderList = ["Name", "FollowUp Count", "Status", "Reminder", "Comment", "Society", "FollowUp Date-Time", "Follow Up","Admission Link","Remove"];
    const IconList = [
        { Id: 1, Icon:<Tooltip title="Take FollowUp"><IconButton> <CallIcon sx={{ color: "green" }} /></IconButton></Tooltip>, Action: 'FollowUp' },
        { Id: 1, Icon: <Tooltip title="Admission Form"><IconButton><LinkIcon /></IconButton></Tooltip>, Action: 'Admission_Link' },
        { Id: 1, Icon: <Tooltip title="Remove FollowUp"><IconButton><DeleteIcon  sx={{ color: '#ff1943' }}  /></IconButton></Tooltip>, Action: 'Remove' }
    ];

    const totalCount = followUpList.length;
    const startIndex = pageIndex * pageSize + 1;
    const endIndex = Math.min((pageIndex + 1) * pageSize, totalCount);
console.log(followUpList);
const clickItem = (value) => {
  if (value.Action === "Admission_Link") {
    navigate("../AdmissionForm/" + value.Id)
  }else if (value.Action === "FollowUp") {
  navigate("../FollowUpForm/" + value.Id)
}else  if (value.Action === "Remove") {
  if (window.confirm("Are you sure you want to delete this FollowUp Detail?")) {
dispatch(DeleteFollowUpDetails({StudentId:value.Id}))
  }
}
}
    return (
        <Container>
            
        <Grid container spacing={2}  sx={{ width: '100%', overflow: 'hidden' }} >
        <Grid item xs={12}>
          {/* <Typography variant="h3" gutterBottom>Enquiry List</Typography> */}
        </Grid>

          <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, position: 'relative' }}>

            <div style={{ flexGrow: 1, overflow: 'auto' }}>
              <DynamicList
                HeaderList={HeaderList}
                ItemList={followUpList }
                IconList={IconList}
                ClickItem={clickItem}
              />
            </div>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px' }}>
              <Typography variant="body2">FollowUp List {startIndex}-{endIndex} of {totalCount} FollowUps</Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Button onClick={handlePrevPage} variant="outlined" disabled={pageIndex === 0}  style={{color:'#878686', minWidth: '120px'}}>
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
    );

    
}
export default FollowUpList;



