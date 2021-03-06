import React, { useReducer } from 'react';
import StudentContext from './StudentContext';
import StudentReducer from './StudentReducer';
import {
  ADD_STUDENT,
  DELETE_STUDENT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_STUDENT,
  FILTER_STUDENTS,
  CLEAR_FILTER,
  CHECK_STUDENT,
  UNCHECK_STUDENT
} from '../Types';

const StudentState = (props) => {
  const initialState = {
    students: [
      {
        email: 'adel@gmail.com',
        firstName: 'Adel',
        lastName: 'Batal',
        regNumber: '1',
        password: '123',
        selectedTracks: [
          'business infromatics',
          'general',
          'internet computing',
        ],
        selectedUnits: ['mobile computing', 'e-commerce', 'operating systems'],
        creditCount: 30,
      },
      {
        email: 'john@gmail.com',
        firstName: 'john',
        lastName: 'Doe',
        regNumber: '2',
        password: '123',
        selectedTracks: [
          'general',
          'internet computing',
          'business infromatics',
        ],
        selectedUnits: ['operating systems', 'mobile computing', 'e-commerce'],
        creditCount: 70,
      },
      {
        email: 'jane@gmail.com',
        firstName: 'jane',
        lastName: 'Smith',
        regNumber: '3',
        password: '123',
        selectedTracks: [
          'internet computing',
          'general',
          'business infromatics',
        ],
        selectedUnits: ['e-commerce', 'operating systems', 'mobile computing'],
        creditCount: 100,
      },
    ],
    checkedStudents: []
  };

  const [state, dispatch] = useReducer(StudentReducer, initialState);

  // add student
  const addStudent = student => {
    dispatch({type: ADD_STUDENT, payload: student})
  }

  // delete student

  // set current student

  // clear current student

  // update student

  // filter students

  // clear filter

  // check student
  const checkStudent = checkedStudent => {
    dispatch({type: CHECK_STUDENT, payload: checkedStudent})
  }

  const uncheckStudent = uncheckedStudent => {
    dispatch({type: UNCHECK_STUDENT, payload: uncheckedStudent})
  }

  return (
    <StudentContext.Provider
      value={{
        students: state.students,
        checkedStudents: state.checkedStudents,
        addStudent,
        checkStudent,
        uncheckStudent
      }}
    >
      {props.children}
    </StudentContext.Provider>
  );
};

export default StudentState;
