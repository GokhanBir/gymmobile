import React from 'react';
import { Programs } from './Programs';
import {useAppSelector} from './redux/hook';


export const Content = () => {

  const daynumber=useAppSelector(state=>state.day.dayNo)
  
  return (
    <div style={{marginTop:"106px"}}><Programs/></div>
  )
}
