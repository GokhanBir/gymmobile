import React from 'react'
import { Box } from "@mui/material";
import data from "./TotalData";
import { Program } from './Program';

export const Back = () => {
    return (
        <Box>
            {data.filter(item => item.head === "SIRT/KANAT").map(items => (
                <Program head={items.head} work={items.work} key={items.head} />
            ))}
        </Box>
    )
}
