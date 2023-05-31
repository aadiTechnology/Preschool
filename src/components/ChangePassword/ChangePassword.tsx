import React, { useState, useEffect } from 'react'
import PageHeader from 'src/library/heading/pageHeader'
import { Button, Card, Container, TextField } from '@mui/material'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';
import { getChangePassword } from 'src/requests/ChangePassword/ChangePassword';
import { IChangePasswordBody } from 'src/Interface/ChangePassword';
function ChangePassword() {
    const dispatch = useDispatch();
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [erroroldPassword, setErroroldPassword] = useState('')
    const [errornewPassword, setErrornewPassword] = useState('')
    const [errorconfirmPassword, setErrorconfirmPassword] = useState('')
    const GetChangePassword: any = useSelector(
        (state: RootState) => state.ChangePassword.ChangePassword
    );



    const Submit = () => {
        let isError = false;
        if (confirmPassword === '') {
            setErrorconfirmPassword('filled is required')
            isError = true
        }
        else if (confirmPassword.length < 8) {
            setErrorconfirmPassword('Enter more than 8 characters')

        }else{
            setErrorconfirmPassword('')
        }
        if (newPassword === '') {
            setErrornewPassword('filled is required')
            isError = true
        } else {
            setErrornewPassword('')
        }
        if (oldPassword === '') {
            setErroroldPassword('filled is required')
            isError = true
        } else {
            setErroroldPassword('')
        }
        if (!isError) {
            console.log("Submit")
            const getChangePasswordBody: IChangePasswordBody =
            {
                asUserName: "rizwana.n.admin",
                asUserId: "695",
                asSchoolId: "120",
                asNewPassword: "Riz@12",
                asOldPassword: "Pass@1234"
            }
            dispatch(getChangePassword(getChangePasswordBody));

        }
    }
    return (
        <div>
            <Container>
                <PageHeader heading={'Change Password'} />
                <Card sx={{ height: "500px", padding: 3 }} >
                    <label>UserName</label>
                    <TextField fullWidth name="username" type="number"
                        variant="standard" value={14416} />

                    <TextField fullWidth label="Old Password"
                        value={oldPassword}
                        onChange={(e) => setOldPassword(e.target.value)} variant="standard" />
                    {erroroldPassword}
                    <TextField fullWidth label="New Password" value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)} variant="standard" />
                    {errornewPassword}
                    <TextField fullWidth label="Confirm Password" value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)} variant="standard" />
                    {errorconfirmPassword}
                    <Button onClick={Submit}>
                        Submit
                    </Button>
                </Card>
            </Container>


        </div>
    )
}

export default ChangePassword