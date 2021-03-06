import React, { useState, useContext } from 'react';
import StudentContext from '../../Context/Student/StudentContext';

import { useRowStyles } from '../../Hooks/StylesHook';
import {
  TableCell,
  Box,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableHead,
  TableRow,
  Typography,
  TextField,
  Checkbox,
  FormControlLabel,
} from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

export default function StudentRow(props) {
  const {
    email,
    firstName,
    lastName,
    regNumber,
    creditCount,
    selectedTracks,
    selectedUnits,
  } = props;
  const studentContext = useContext(StudentContext);
  const [checkedStudentBox, setCheckedStudentBox] = useState({
    studentEmail: '',
    checked: false,
  });
  const [open, setOpen] = useState(false);
  const classes = useRowStyles();

  const handleBoxCheck = (e) => {
    setCheckedStudentBox({ studentEmail: e.target.name, checked: !checkedStudentBox.checked });
    if(!checkedStudentBox.checked){
      studentContext.checkStudent(e.target.name)
    }
    else {
      studentContext.uncheckStudent(e.target.name)
    }
  };
  console.log(studentContext);
  return (
    <>
      <TableRow className={classes.root}>
        <TableCell>
          <FormControlLabel
            control={
              <Checkbox
                checked={checkedStudentBox.checked}
                onChange={handleBoxCheck}
                name={email}
                color='primary'
              />
            }
          />
        </TableCell>
        <TableCell>
          <IconButton
            type='button'
            aria-label='expand row'
            size='small'
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component='th' scope='row'>
          {email}
        </TableCell>
        <TableCell component='th' scope='row'>
          {firstName}
        </TableCell>
        <TableCell component='th' scope='row'>
          {lastName}
        </TableCell>
        <TableCell>{regNumber}</TableCell>
        <TableCell>
          <TextField
            id='outlined-basic'
            variant='outlined'
            defaultValue={creditCount}
          />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <Box margin={1}>
              <Typography variant='h6' gutterBottom component='div'>
                Selections
              </Typography>
              <Table size='small' aria-label='purchases'>
                <TableHead>
                  <TableRow>
                    <TableCell>Selected Tracks</TableCell>
                    <TableCell>Selected Units</TableCell>
                  </TableRow>
                </TableHead>
                {selectedTracks && (
                  <TableBody>
                    <TableCell component='tr'>
                      <TableCell component='td' style={{ border: 'none' }}>
                        {selectedTracks.map((track) => (
                          <div key={track}>{track}</div>
                        ))}
                      </TableCell>
                    </TableCell>
                    <TableCell component='tr'>
                      <TableCell component='td' style={{ border: 'none' }}>
                        {selectedUnits.map((unit) => (
                          <div key={unit}>{unit}</div>
                        ))}
                      </TableCell>
                    </TableCell>
                  </TableBody>
                )}
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}
