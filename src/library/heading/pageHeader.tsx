import { FC } from 'react';
import PropTypes from 'prop-types';
import { styled, Typography, Box, Divider, useTheme, Container } from '@mui/material';
import { HeadingStyle } from '../StyledComponents/CommonStyled';

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
      <HeadingStyle>{(heading)}</HeadingStyle>
       </RootWrapper>
    </Container>
  );
};

PageHeader.propTypes = {
  heading: PropTypes.string,
};

export default PageHeader;