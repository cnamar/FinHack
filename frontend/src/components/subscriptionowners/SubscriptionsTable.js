import React from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    alignItems:"center"
  },
  
});

function Subscriptionstable({ state }) {
  const classes = useStyles();
  return (
    <Box  width={600} paddingTop={10}>
    <Paper elevation={3} width={600} padding={20} >
      <Table className={classes.table} >
        <TableHead>
          <TableRow>
          
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Amount</TableCell>
            
      
          </TableRow>
        </TableHead>
        <TableBody>
          {state.map((row) => (
            
            <TableRow key={state.indexOf(row)+1}>
              <TableCell component="th" scope="row" align="center">{state.indexOf(row)+1}</TableCell>
              <TableCell  align="center">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.amount}</TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </Paper>
     </Box>
  );
}

export default Subscriptionstable;
