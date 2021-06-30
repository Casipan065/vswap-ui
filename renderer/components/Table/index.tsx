import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { COLOR } from '../constants';
import { func } from 'prop-types';



const VTable = ({data}:any) => {
    const classes = useStyles();




    return (
                

        <Table className = {classes.table} aria-label = "table">
            <TableHead>
                <TableRow>
                    {Object.keys(data?.[0]).map((row,i) =>{
                        return <TableCell key={i}>{row}</TableCell>
                    })}
                </TableRow>
            </TableHead>
            <TableBody>
            {data.map((col,i) => (
            <TableRow key={i}>
                {Object.entries(col).map(([key, val]) => {
                    return <TableCell>{val}</TableCell>
                })}

                <TableCell component="th" scope="row">
                {col.name}
                </TableCell>

            </TableRow>
          ))}
        </TableBody>
        </Table>
        
    )
}


const useStyles = makeStyles ({
    table: {
        minWidth: 650,
        // backgroundColor: COLOR.DARK_GREY,
        // color:COLOR.ORANGE
    }
});

export default VTable;