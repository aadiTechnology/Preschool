import CallIcon from '@mui/icons-material/Call'
import { Container, Grid, Button, Typography, Box, IconButton, Tooltip, TextField } from '@mui/material'
import DynamicList from 'src/libraries/Training/DynamicList'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'src/store'
import { getClass, getEnquiryList } from 'src/requests/Enquiry/RequestEnquiryList'
import { useNavigate } from 'react-router';
import { DeleteAdmissionDetails, getAdmissionList, resetDeleteAdmissionMsg } from 'src/requests/Admission/RequestAdmission';
import { toast } from 'react-toastify';
import Dropdown from "src/libraries/Training/Dropdown";
import { getClassNameList } from "src/requests/Teacher/RequestAddHomeWork";

const AdmissionList = () =>{

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const AdmissionList = useSelector((state: RootState) => state.Admission.AdmissionList);
    const DeleteAdmissionMsg = useSelector((state: RootState) => state.Admission.DeleteAdmissionMsg);
    console.log(AdmissionList)
  
    useEffect(() => {
      dispatch(getAdmissionList())
    }, [dispatch])

    useEffect(() =>{
      if(DeleteAdmissionMsg!=''){
        toast.success(DeleteAdmissionMsg)
        dispatch(resetDeleteAdmissionMsg())
        dispatch(getAdmissionList())
      }
    },[DeleteAdmissionMsg])
    
    const [pageIndex, setPageIndex] = useState(0)
    const pageSize = 10
    const clickClass = (value) => {
      setClassID(value);
  }
  
    const handleNextPage = () => {
      setPageIndex(pageIndex + 1)
    }
  
    const handlePrevPage = () => {
      setPageIndex(pageIndex - 1)
    }
    
useEffect(() => {
  dispatch(getClassNameList({Id:0}));
}, []);
    const getClassName = () => {
      let returnVal = ""
      Class.map((item) => {
        if(item.Value==ClassID)
          returnVal=item.Name
      })
      return returnVal
    }
    const [ClassID, setClassID] = useState('0')
    const Class = useSelector((state: RootState) => state.AddHomeWork.ClassNameList);

  const [searchName, setSearchName] = useState('')
  const [searchSociety, setSearchSociety] = useState('')
  const paginatedList = AdmissionList
  .filter((item)=>{return ((searchName === '' || 
    item.Text1.toLowerCase().includes(searchName.toLowerCase())) &&
    (searchSociety==='' || item.Text4.toLowerCase().includes(searchSociety.toLowerCase())) &&
    (ClassID==='0' || item.Text2.toLowerCase().includes(getClassName().toLowerCase()))
  )
  })
  .slice(pageIndex * pageSize, (pageIndex + 1) * pageSize)
  
    const HeaderList = ["Name", "Class","Phone", "Society", "Admission Date", "Edit", "Delete"]
    const IconList = [{
      Id: 1, Icon: <Tooltip title="Edit Details"><IconButton><EditIcon  sx={{ color: '#ffc107' }} />
      </IconButton></Tooltip>, Action: 'Edit', Value: "1"
    },
    { Id: 2, Icon: <Tooltip title="Remove Admission"><IconButton><DeleteIcon  sx={{ color: '#ff1943' }}  />
    </IconButton></Tooltip>, Action: 'Remove', Value: "2" }
]
  
    const totalCount = AdmissionList.length
    const startIndex = pageIndex * pageSize + 1
    const endIndex = Math.min((pageIndex + 1) * pageSize, totalCount)
  
    const clickItem = (value) => {
      if (value.Action === "Edit") {
        navigate("../AdmissionForm/" + value.Id)
      } else if (value.Action === "Remove") {
        if (window.confirm("Are you sure you want to delete this Admission Detail?")) {
        dispatch(DeleteAdmissionDetails({ID:value.Id}))
         }
      }
    }

    return(
        <Container>
        <Grid container spacing={2} sx={{ width: '100%', overflow: 'hidden' }} >
        <Grid item xs={4}>
          <TextField label="Search Name" value={searchName} onChange={(e) => setSearchName(e.target.value)}></TextField>
          </Grid><Grid item xs={4}>
          <Dropdown
                ItemList={Class}
                Label=""
                DefaultValue={ClassID}
                ClickItem={clickClass}
                Placeholder="Select Class"
            />
            </Grid><Grid item xs={4}>
          <TextField label="Search Society" value={searchSociety} onChange={(e) => setSearchSociety(e.target.value)}></TextField>
          
        </Grid>
          <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, position: 'relative' }}>
            <div style={{ flexGrow: 1, overflow: 'auto' }}>
              <DynamicList
                HeaderList={HeaderList}
                ItemList={paginatedList}
                IconList={IconList}
                ClickItem={clickItem}
              />
            </div>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px' }}>
              <Typography variant="body2">Admission List {startIndex}-{endIndex} of {totalCount} Admissions</Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Button onClick={handlePrevPage} variant="outlined" disabled={pageIndex === 0} style={{ color: '#878686', minWidth: '120px' }}>
                  Previous Page
                </Button>
                <Button onClick={handleNextPage} variant="outlined" disabled={(pageIndex + 1) * pageSize >= totalCount} style={{ color: '#878686' }}>
                  Next Page
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    );

}
export default AdmissionList;