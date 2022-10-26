import { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import { useAppDispatch } from './redux/hook';

import { change } from './redux/Dayslice';

export const Daytab = () => {

  const [value, setValue] = useState(0);

  const dispatch=useAppDispatch();
  
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    event.preventDefault();
    setValue(newValue);
  }
  
  dispatch(change(value+1));

  return (
    <>

        <Tabs
          sx={{backgroundColor:"white"}}
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs"
          >
          <Tab label="1.GÜN"></Tab>
          <Tab label="2.GÜN"></Tab>
          <Tab label="3.GÜN"></Tab>
          <Tab label="4.GÜN"></Tab>
          <Tab label="5.GÜN"></Tab>
          <Tab label="6.GÜN"></Tab>
          <Tab label="7.GÜN"></Tab>
        </Tabs>

    </>
  )
}

