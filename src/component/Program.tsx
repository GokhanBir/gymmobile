import React from 'react';
import { CardContent, CardMedia, Typography, Divider, Grid } from "@mui/material";

interface dataType {

    head: string,
    work: {
        tittle: string,
        equip: string,
        set: string,
        reps: string,
        foto: string
    }[],

}
export const Program = (props: dataType) => {

    return (
        <>
            <Grid container key={props.head} >
                <Grid item xs={12} >
                    <CardContent sx={{ display: "grid", justifyItems: "center" }}>
                        <Typography sx={{ fontFamily: "monospace" }} variant='h4' >{props.head}</Typography>
                    </CardContent>
                </Grid>
            </Grid>
            <Divider />
            {props.work.map(item =>
                <>
                    <Grid container key={item.tittle} >
                        <Grid item xs={12} >
                            <CardContent sx={{ display: "grid", justifyItems: "center" }}>
                                <Typography variant='h6' sx={{ fontFamily: "monospace" }}>{item.tittle}</Typography>
                            </CardContent>
                        </Grid>
                        <Grid item xs={12} key={item.equip}>
                            <CardContent sx={{ display: "grid", justifyItems: "center", margin: "0px", padding: "0px" }}>
                                <Typography variant="subtitle2" sx={{ fontFamily: "monospace" }}>Ekipman: {item.equip}</Typography>
                            </CardContent>
                        </Grid>
                    </Grid>
                    <Divider />
                    <Grid container rowSpacing={1} key={item.set}>
                        <Grid item>
                            <CardMedia
                                component="img"
                                sx={{ width: "150" }}
                                image={item.foto}
                            />
                        </Grid>
                    </Grid>
                    <Divider />
                    <Grid container columnSpacing={2} key={item.reps}>
                        <Grid item xs={3} >
                            <Typography sx={{ display: "grid", justifyItems: "center", fontFamily: "monospace" }}>{item.set} SET</Typography>
                        </Grid>
                        <Grid item  >
                            <Divider orientation='vertical' />
                        </Grid>
                        <Grid item xs={6} >
                            <Typography sx={{ fontFamily: "monospace", fontSize: "15px" }}>TEKRAR {item.reps} </Typography>
                        </Grid>
                    </Grid>
                    <Divider />
                </>
            )}
        </>
    )
}
