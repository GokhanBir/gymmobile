import React from 'react'
import { useAppSelector } from './redux/hook';
import { Card } from "@mui/material";
import { Chest } from './Chest';
import { Abs } from './Abs';
import { Shoulder } from './Shoulder';
import { Rest } from './Rest';
import { Back } from './Back';
import { Leg } from './Leg';
import { Calf } from './Calf';
import { Trapez } from './Trapez';
import { Forearm } from './Forearm';
import { Biceps } from './Biceps';
import { Triceps } from './Triceps';

export const Programs = () => {
  const daynumber = useAppSelector(state => state.day.dayNo);

  return (
    <>
      <Card sx={{ margin: "10px", marginTop: "120px", marginBottom: "40px" }}>
        {daynumber === 1 && (<>
          <Chest />
          <Abs />
        </>)}
        {daynumber === 2 && (
          <>
            <Shoulder />
            <Back />
          </>
        )}
                {daynumber === 3 && (
          <>
            <Leg />
            <Calf />
          </>
        )}
                {daynumber === 4 && (
          <>
            <Trapez />
            <Forearm />
          </>
        )}
                {daynumber === 5 && (
          <>
            <Biceps />
            <Triceps />
          </>
        )}
        {daynumber > 6 && <Rest />}
        {daynumber > 7 && <Rest />}

      </Card>
    </>
  )
}

