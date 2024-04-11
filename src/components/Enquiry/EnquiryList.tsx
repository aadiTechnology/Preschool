import CallIcon from '@mui/icons-material/Call';
import { Container, Grid, Button, Typography, Box } from '@mui/material';
import DynamicList from 'src/libraries/Training/DynamicList';
import PageHeader from 'src/libraries/heading/PageHeader';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/store';
import { getEnquiryList } from 'src/requests/Enquiry/RequestEnquiryList';

const EnquiryList = () => {
  const dispatch = useDispatch();
  const enquiryList = useSelector((state: RootState) => state.Enquiry.EnquiryList);

  useEffect(() => {
    dispatch(getEnquiryList());
  }, [dispatch]);

  console.log(enquiryList);

  const [pageIndex, setPageIndex] = useState(0);
  const pageSize = 10;

  const handleNextPage = () => {
    setPageIndex(pageIndex + 1);
  };

  const handlePrevPage = () => {
    setPageIndex(pageIndex - 1);
  };

  const paginatedList = enquiryList.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize);

  const HeaderList = ["Name", "Class", "BirthDate", "Gender", "Phone", "Society", "Enquiry Date-Time", "Follow Up"];
  const IconList = [{ Id: 1, Icon: <CallIcon />, Action: 'Followup' }];

  const totalCount = enquiryList.length;
  const startIndex = pageIndex * pageSize + 1;
  const endIndex = Math.min((pageIndex + 1) * pageSize, totalCount);

  const clickFollow = () => {};

  return (
    <Container>
      <Grid container spacing={2} sx={{ width: '100%', overflow: 'hidden' }}>
        <Grid item xs={12}>
          <Typography variant="h3" gutterBottom>Enquiry List</Typography>
        </Grid>
        <Grid item xs={12} sx={{ height: '500px', overflow: 'auto' }}>
          <DynamicList HeaderList={HeaderList} ItemList={paginatedList} IconList={IconList} ClickItem={clickFollow} />
        </Grid>
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2 }}>
          <Typography variant="body2">Enquiry List {startIndex}-{endIndex} of {totalCount} Enquiries</Typography>
          <Box sx={{ display: 'flex', gap: 2
          }}>
            <Button
              onClick={handlePrevPage}
              variant="outlined"
              disabled={pageIndex === 0}
            >
              Previous Page
            </Button>
            <Button
              onClick={handleNextPage}
              variant="outlined"
              disabled={(pageIndex + 1) * pageSize >= totalCount}
            >
              Next Page
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default EnquiryList;