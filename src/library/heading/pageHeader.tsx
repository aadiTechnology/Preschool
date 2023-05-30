import { FC } from 'react';
import PropTypes from 'prop-types';
import { styled, Typography, Box, Divider, useTheme, Container } from '@mui/material';

interface PageHeaderProps {
  heading: string;
}

const RootWrapper = styled(Box)(
  ({ theme }) => `
        margin-top: ${theme.spacing(2)};
        margin-bottom: ${theme.spacing(2)};
`
);

const PageHeader: FC<PageHeaderProps> = ({ heading}) => {
  const theme = useTheme();

  return (
    <Container>
      <RootWrapper display="flex" alignItems="center">
      <Typography variant="h3"
          sx={{
            fontWeight: 'bolder',
            fontSize: '32px',
            color: 'black',
            margin: 'auto',
            fontFamily: 'roboto',
            textShadow: '7px 7px 10px grey'
          }}>{(heading)}</Typography>
       </RootWrapper>
    </Container>
  );
};

PageHeader.propTypes = {
  heading: PropTypes.string,
};

export default PageHeader;