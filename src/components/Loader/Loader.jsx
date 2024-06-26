import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
const Loader=()=>{
  return (
    <div className='loader flex flex-c'>
      <CircularProgress color='secondary' disableShrink />
    </div>
  )
}

export default Loader