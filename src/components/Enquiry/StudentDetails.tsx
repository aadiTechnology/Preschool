import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import React, { useState } from 'react'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import PageHeader from 'src/library/heading/pageHeader'
import EnquiryList from './EnquiryList'
import AddIcon from '@mui/icons-material/Add';
import HistoryIcon from '@mui/icons-material/History';
import ViewListIcon from '@mui/icons-material/ViewList';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import { useNavigate } from 'react-router'
import { Tooltip } from '@mui/material';
import FollowUpList from '../FollowUp/FollowUpList';
import AdmissionList from './AdmissionList';

const AddClass = () => {
    const [componentName,setComponentName] = useState(<EnquiryList />)
    const [pageHeader,setPageHeader] = useState('Enquiry List');
    const navigate = useNavigate();
    // const clickEnquiry = () => {
    //     navigate('/extended-sidebar/Student/AddEnquiry')
    // }
    // const enquiryList = [{ Id: 1, Name: "Enquiry List", Value: "1" },
    // { Id: 2, Name: "Follow Ups", Value: "2" },
    // { Id: 3, Name: "Admission List", Value: "3" }];
    const [toggle,setToggle] = useState('1')

    // const [toggleId, setToggleId] = useState('1');

    const clickToggle = (    event: React.MouseEvent<HTMLElement>,
        value: string,) => {
        if(value==="1"){
            setToggle(value)
            setPageHeader('Enquiry List')
            navigate('/extended-sidebar/Student/StudentDetails')
            setComponentName(<EnquiryList />)
        } else if(value==="4"){

            navigate('/extended-sidebar/Student/AddEnquiry')
        }else if(value==="2"){
            setPageHeader('Follow Ups')
            // navigate('/extended-sidebar/Student/FollowUpList')
            setToggle(value)
            setComponentName(<FollowUpList />)
        }else if(value==="3"){
            setPageHeader('Admission List')
            setComponentName(<AdmissionList />)
            setToggle(value)
        }
    };
    return (
        <>
            <Container>
                <Grid container direction="column" alignItems="center" justifyContent="center">
                    <Grid container spacing={2}>
                        <Grid item xs={12} display={'flex'} justifyContent={'center'}>
                            <PageHeader heading={pageHeader} />
                        </Grid>
                        <Grid item xs={12} sm={12} mr={2} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
                        <ToggleButtonGroup 
      color='primary'
      value={toggle}
      exclusive
      onChange={clickToggle}
      size="small"
    >
      <ToggleButton value="1">Enquiry List</ToggleButton>
      <ToggleButton value="2">Follow Ups</ToggleButton>
      <ToggleButton value="3">Admission List</ToggleButton>
      <ToggleButton value="4"> <Tooltip title="Add Enquiry"><AddIcon /></Tooltip></ToggleButton>

    </ToggleButtonGroup>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        
{componentName}
        </>

    )
}

export default AddClass

