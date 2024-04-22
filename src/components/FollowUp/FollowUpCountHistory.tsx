import React, { useEffect } from 'react';
import { Container, Grid } from '@mui/material';
import PageHeader from 'src/libraries/heading/PageHeader';
import DynamicList from 'src/libraries/Training/DynamicList';
import CallIcon from '@mui/icons-material/Call';
import { useDispatch, useSelector } from 'react-redux';
import { GetFollowUpHistoryList } from 'src/requests/FollowUp/RequestFollowUpList';
import { RootState } from 'src/store';
import { useParams } from 'react-router-dom';

const FollowUpCountHistory = () => {
    const { Id } = useParams();
    const dispatch = useDispatch();
    const HeaderList = ["CountNo", "Status", "Reminder", "Comment",  "Followup date-Time"];
  

    // Get follow-up history list from Redux store
    const historyList = useSelector((state: RootState) => state.FollowUp.FollowUpHistory);

    useEffect(() => {
        // Fetch follow-up history list when component mounts
        dispatch(GetFollowUpHistoryList({ StudentId: Number(Id)}));
    }, [dispatch]);

    // Function to handle click on list item
    const clickList = () => {
        // Implement your logic here
    };

    // Calculate the length of history list
    const historyLength = historyList.length;
console.log(historyList)
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    {/* Display follow-up count */}
                    <PageHeader heading={`FollowUp Count : ${historyLength}`} subheading={''} />
                </Grid>
                <Grid item xs={12}>
                    {/* Render dynamic list with follow-up history */}
                    <DynamicList
                        HeaderList={HeaderList}
                        ItemList={historyList}
               
                        ClickItem={clickList}
                    />
                </Grid>
            </Grid>
        </Container>
     );
};

export default FollowUpCountHistory;
