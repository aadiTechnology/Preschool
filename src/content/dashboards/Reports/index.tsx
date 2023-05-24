import PageHeader from './PageHeader';
import Footer from 'src/components/Footer';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Helmet } from 'react-helmet-async';
import { Grid } from '@mui/material';
import Block6 from './Block6';

function DashboardReports() {
  return (
    <>
      <Helmet>
        <title>Reports Dashboard</title>
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
        <Grid item xs={12}>
     
        </Grid>
        <Grid item md={7} xs={12}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="stretch"
            spacing={4}
          >
          </Grid>
        </Grid>
        <Grid item md={6} xs={12}>
          <Block6 />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default DashboardReports;

