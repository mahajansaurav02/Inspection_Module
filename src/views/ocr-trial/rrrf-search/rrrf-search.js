import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'

const RRRFSearch = () => {
  const [data, setData] = useState([])
  const [query, setQuery] = useState('')

  const navigate = useNavigate()

  const fetchData = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users')
    // .then((res) => res.json())
    // .then((d) => setData(d));
    const value = await data.json()
    setData(value)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const search_parameters = Object.keys(Object.assign({}, ...data))

  function search(data) {
    return data.filter((data) =>
      search_parameters.some((parameter) =>
        data[parameter].toString().toLowerCase().includes(query),
      ),
    )
  }
  return (
    <>
      {/* <h3>RRRF Search</h3> */}
      <Container>
        <Paper sx={{ p: 2 }} elevation={5}>
          <Grid container justifyContent="center">
            <Grid item xs={8}>
              <TextField
                label="Search"
                name="search-form"
                type="search"
                className="search-input"
                id="search-form"
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search user"
                variant="outlined"
                fullWidth
              />
            </Grid>
          </Grid>

          <Grid item xs={12}>
            {query.length > 0 &&
              search(data).map((dataObj, i) => {
                return (
                  <div
                    style={{ display: 'flex', justifyContent: 'center' }}
                    key={dataObj.username + i}
                  >
                    <div style={{ fontSize: '20px' }}>UserName: @{dataObj.username} </div>
                    &nbsp; &nbsp;
                    <div style={{ fontSize: '20px' }}>Name: {dataObj.name}</div>
                    &nbsp; &nbsp;
                    <div style={{ fontSize: '20px' }}>Email:{dataObj.email}</div>
                  </div>
                )
              })}
          </Grid>
          <Grid
            item
            xs={12}
            style={{
              display: 'flex',
              justifyContent: 'space-evenly',
              marginTop: 20,
            }}
          >
            <Button variant="contained" onClick={() => navigate('/ocr/gr-information')}>
              Previous
            </Button>
            <Button variant="contained" onClick={() => navigate('/ocr/compare-documents')}>
              Next
            </Button>
          </Grid>
        </Paper>
      </Container>
    </>
  )
}

export default RRRFSearch
