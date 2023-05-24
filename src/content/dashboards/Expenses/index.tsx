import { Helmet } from 'react-helmet-async';
import PageHeader from './PageHeader';
import { Grid } from '@mui/material';
import Footer from 'src/components/Footer';
import PageTitleWrapper from 'src/components/PageTitleWrapper';


function DashboardExpenses() {
  return (
    <>
      <Helmet>
        <title>Expenses Dashboard</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>

      <Grid
        sx={{
          px: 4
        }}
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={4}
      >
      </Grid>
      <Footer />
    </>
  );
}

export default DashboardExpenses;
