import React from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { useEffect, useState } from "react";
import { MainState } from "./store/AdmissionStore";
import { useSelector, useDispatch } from "react-redux";
import { setAdmissionGrades } from "./reducers/AdmissionReducer";
import { Link } from "react-router-dom";
import "./admission.css";
const Admission = () => {
  const grades = useSelector((state: MainState) => state.admission.value);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/`)
      .then(({ data }) => {
        dispatch(setAdmissionGrades(data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(grades);
  console.log();
  // axios.get(`http://localhost:5000/${category}`).then(()=>{}).catch(()=>{})
  return (
    <>
      <section className="school"></section>
      <h5>Grades Available!</h5>
      <ul>
        <Link to="/preprimary">
          <li>Pre-primary</li>
        </Link>

        <Link to="/primary">
          <li>Primary</li>
        </Link>
        <Link to="/secondary">
          <li>Secondary</li>
        </Link>
      </ul>
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
              {/* <p>{grade.category}</p> */}
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

export default Admission;
