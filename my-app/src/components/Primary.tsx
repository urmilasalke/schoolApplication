import React from "react";
import { useEffect, useState } from "react";
import { MainState } from "./store/AdmissionStore";
import { useSelector, useDispatch } from "react-redux";
import { setAdmissionGrades } from "./reducers/AdmissionReducer";
import axios from "axios";
import { Table } from "react-bootstrap";
const Primary = () => {
  const grades = useSelector((state: MainState) => state.admission.value);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/primary`)
      .then(({ data }) => {
        dispatch(setAdmissionGrades(data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Grade</th>
            <th>Fees</th>
            <th>Seats</th>
          </tr>
        </thead>
        <tbody>
          {grades.map((grade) => (
            <>
              {grade.options.map((option) => (
                <>
                  <tr>
                    <td>{option.fees}</td>
                    <td>{option.grade}</td>
                    <td>{option.seats}</td>
                  </tr>
                </>
              ))}
            </>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Primary;
