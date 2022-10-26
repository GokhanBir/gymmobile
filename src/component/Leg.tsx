import React from 'react';
import { Box } from '@mui/material';
import data from "./TotalData";
import { Program } from './Program';

export const Leg = () => {
    return (
        <Box>
            {data.filter(item => item.head === "BACAK-KALÇA").map(items => (
                <Program head={items.head} work={items.work} key={items.head} />
            )
            )}
        </Box>
    )
}
