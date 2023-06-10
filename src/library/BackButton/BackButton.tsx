import ReplyIcon from '@mui/icons-material/Reply';
import PropTypes from 'prop-types';
import {  Button, Fab } from '@mui/material';

import { Link as RouterLink } from 'react-router-dom';

BackButton.propTypes = {
  FromRoute: PropTypes?.string
};

function BackButton({ FromRoute }) {



  
  return (
    <>
      <RouterLink to={`/${location.pathname.split('/')[1]}` + FromRoute}>
        <Fab
          sx={{
          
            position: 'absolute',
            top: '100px',
            left: '60px',
            width: '35px !important',
            height: '10px !important',
            borderRadius: '4px !important',
            boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)'
          }}
        >
          <ReplyIcon />
        </Fab>

        
      </RouterLink>
    </>
  );
}

export default BackButton;
