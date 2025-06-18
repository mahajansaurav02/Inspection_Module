import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import FormControl from '@mui/material/FormControl'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import Paper from '@mui/material/Paper'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import { useDispatch, useSelector } from 'react-redux'
import { selectState, addUserDetails } from '../../../slices/UserSlice'

const RegistrationForm = ({ getData }) => {
  // const [user, setUser] = useState({
  //   firstName: '',
  //   lastName: '',
  //   grNo: '',
  //   district: '',
  //   taluka: '',
  //   village: '',
  //   gender: 'male',
  //   image: '',
  // })

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const reduxState = useSelector(selectState)
  const handleChange = (e) => {
    const { name, value } = e.target
    if (name == 'file') {
      const image = e.target.files[0]
      // setUser({ ...user, image: URL.createObjectURL(image) })
      dispatch(
        addUserDetails({
          ...reduxState,
          image: URL.createObjectURL(image),
        }),
      )
    } else {
      // setUser({ ...user, [name]: value })
      dispatch(
        addUserDetails({
          ...reduxState,
          [name]: value,
        }),
      )
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log('FormData...', user)
    console.log('FormData...Redux..', reduxState)
    // setUser({ firstName: '', lastName: '', grNo: '' })
    // getData(user)
    navigate('/ocr/rrrf-search')
  }
  return (
    <>
      <Container>
        <Paper elevation={5} sx={{ p: 3, mt: 3 }}>
          <h2 style={{ textAlign: 'center' }}>GR Information</h2>
          <Grid container justifyContent="center" alignItems="center" spacing={3}>
            {/*-----------------------------------------------------------grTitle Grid*/}
            <Grid item xs={12} md={6}>
              <TextField
                label="GR Title"
                name="grTitle"
                type="text"
                size="medium"
                id="outlined-basic"
                variant="standard"
                value={reduxState?.grTitle}
                onChange={handleChange}
                fullWidth
              />
            </Grid>

            {/*-----------------------------------------------------------grInfoRemark Grid*/}
            <Grid item xs={12} md={6}>
              <TextField
                label="GR-info/remark"
                name="grInfoRemark"
                value={reduxState?.grInfoRemark}
                onChange={handleChange}
                variant="standard"
                fullWidth
              />
            </Grid>

            {/*-----------------------------------------------------------GR Date Grid*/}
            <Grid item xs={12} md={6}>
              <TextField
                label="GR Date"
                name="grDate"
                type="date"
                size="medium"
                id="outlined-basic"
                value={reduxState?.grDate}
                onChange={handleChange}
                variant="standard"
                fullWidth
                InputLabelProps={{ shrink: true }}
              />
            </Grid>

            {/*-----------------------------------------------------------Depatement Grid*/}
            <Grid item xs={12} md={6}>
              <FormControl variant="standard" fullWidth>
                <InputLabel id="department">Department</InputLabel>
                <Select
                  labelId="department"
                  id="demo-simple-select"
                  name="department"
                  value={reduxState?.department}
                  label="department"
                  onChange={handleChange}
                >
                  <MenuItem value="landRevenue">Land Revenue</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {/*------------------------------------------------------------District Grid*/}
            <Grid item xs={12} md={6}>
              <FormControl variant="standard" fullWidth>
                <InputLabel id="district">District</InputLabel>
                <Select
                  labelId="district"
                  id="demo-simple-select-outlined"
                  value={reduxState?.district}
                  defaultValue={30}
                  label="District"
                  name="district"
                  onChange={handleChange}
                >
                  {/* <MenuItem value="raigad">Raigad</MenuItem> */}
                  <MenuItem value="raigad">Raigad</MenuItem>
                  <MenuItem value="jalna">Jalna</MenuItem>
                  <MenuItem value="nagpur">Nagpur</MenuItem>
                  <MenuItem value="jalagon">Jalgaon</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {/*--------------------------------------------------------------Taluka Grid*/}
            <Grid item xs={12} md={6}>
              <FormControl variant="standard" fullWidth>
                <InputLabel id="taluka">Taluka</InputLabel>
                <Select
                  labelId="taluka"
                  id="demo-simple-select"
                  // value={user?.taluka}
                  value={reduxState?.taluka}
                  label="Taluka"
                  name="taluka"
                  onChange={handleChange}
                >
                  <MenuItem value="raver">Raver</MenuItem>
                  <MenuItem value="akola">Akola</MenuItem>
                  <MenuItem value="parola">Parola</MenuItem>
                  <MenuItem value="amravti">Amravti</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {/*--------------------------------------------------------------Village Grid*/}
            <Grid item xs={12} md={6}>
              <FormControl variant="standard" fullWidth>
                <InputLabel id="village">Village</InputLabel>
                <Select
                  labelId="village"
                  id="demo-simple-select"
                  name="village"
                  // value={user?.village}
                  value={reduxState?.village}
                  label="Village"
                  onChange={handleChange}
                >
                  <MenuItem value="shegaon">Shegaon</MenuItem>
                  <MenuItem value="khamgaon">Khamgaon</MenuItem>
                  <MenuItem value="wardha">Wardha</MenuItem>
                  <MenuItem value="nashik">Nashik</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {/*----------------------------------------------------------Upload File Grid*/}
            <Grid item xs={12} md={6} textAlign="center">
              <input type="file" name="file" accept="image/*" onChange={(e) => handleChange(e)} />
            </Grid>

            {/*---------------------------------------------------------Submit Button Grid*/}
            <Grid item xs={12} textAlign="center">
              <Button onClick={handleSubmit} variant="contained">
                Submit & Next
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  )
}

export default RegistrationForm
