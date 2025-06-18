import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TextRecognition from '../text-recognize/TextRecognization'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import CircularProgress from '@mui/material/CircularProgress'
import Paper from '@mui/material/Paper'
import { selectState, addUserDetails } from '../../../slices/UserSlice'
import { useDispatch, useSelector } from 'react-redux'
const CompareDocuments = ({ data }) => {
  const [recognizedText, setRecongizedText] = useState()

  const navigate = useNavigate()
  // const disaptch = useDispatch()
  const reduxState = useSelector(selectState)

  {
    console.log('Redux state val in compare', reduxState)
  }

  const getRecoText = (val) => {
    setRecongizedText(val)
    console.log('recognized val..', val)
  }

  return (
    <>
      <Container>
        <Paper elevation={5} sx={{ p: 2, m: 3 }}>
          {/*----------------------------------------------------------------TextRecognition */}
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              {reduxState?.image ? (
                <TextRecognition
                  //  selectedImage={data?.image}
                  selectedImage={reduxState?.image}
                  getRecoText={getRecoText}
                />
              ) : (
                <h3>No image is Selected</h3>
              )}
            </Grid>
            {/*----------------------------------------------------------------Recognized text */}
            <Grid item xs={12} md={6}>
              <h2>Recognized Text:</h2>
              <p>
                {/* {recognizedText ? recognizedText : <h3>Data is Loading</h3>} */}
                {recognizedText ? (
                  recognizedText
                ) : (
                  <>
                    <h3>Data is Loading</h3>
                    <CircularProgress />
                  </>
                )}
              </p>
            </Grid>
          </Grid>
          <Grid item xs={12} textAlign="center" sx={{ pt: 2 }}>
            <Button variant="contained" onClick={() => navigate('/ocr/rrrf-search')}>
              Previous
            </Button>
          </Grid>
        </Paper>
      </Container>
    </>
  )
}

export default CompareDocuments
