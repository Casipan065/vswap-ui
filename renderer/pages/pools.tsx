import React from 'react';
import VTable from '../components/Table';
import Typography from '@material-ui/core/Typography';
import Head from 'next/head';
import {Theme, makeStyles, createStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Link from '../components/Link';
import {COLOR} from '../components/constants'
import Grid from '@material-ui/core/Grid'
import { mergeClasses } from '@material-ui/styles';



const useStyles = makeStyles({

    root: {
        flexGrow: 1,
        color: 'white',
        backgroundColor: COLOR.GREY,
    },
    image: {
        width: "96px",
        height: "154px"
    },
    
});




function Index() {
    const classes = useStyles({});
    const data = [
        {"Pool Address":'1', "Assets":'50% IPX'},
        {"Pool Address":'2', "Assets":'1000% IPX'}

    ]

    return <React.Fragment>
        <Head>
            <title>POOLS</title>
        </Head>
        <div className = {classes.root}>
            <Grid container spacing = {3} justify = "center" direction = "row">  
                <Grid item xs = {3} />
                <Grid item xs = {6} container direction = "column" justify = "flex-start">
                        <Grid item xs = {1} />
                        <Grid container spacing = {3} direction = "row" justify = "center">
                            <Grid item xs = {4} />
                            <Grid item xs = {4} >
                                <Typography variant="h4" align = "center">
                                    Pools
                                </Typography>
                            </Grid>
                            <Grid item xs = {4} />
                        </Grid>                      
                        <Grid container spacing = {3} direction = "row" justify = "center" >
                            <Grid item xs = {12} />
                            <Grid item xs = {12} >
                                <Typography align = "center">
                                    A liquidity pool is a place where two asserts can be traded against one another 
                                </Typography>  
                            </Grid>
                            <Grid item xs = {12} />
                        </Grid>
                </Grid>
                <Grid item xs = {3} container direction = "column" justify = "center">
 
                    <Grid item xs = {3}>
                        <img src = {`images/astronaut.svg`}  alt = "NeedToBeChanged" className = {classes.image} />
                    </Grid> 

                </Grid>
            </Grid>
        </div>
        <div className = {classes.root}>
            <VTable data={data}/>
        </div>

    </React.Fragment>

}



export default Index;