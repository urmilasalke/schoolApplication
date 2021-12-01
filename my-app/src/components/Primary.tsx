import React from "react";
import { useEffect } from "react";
import { MainState } from "./store/AdmissionStore";
import { useSelector, useDispatch } from "react-redux";
import { setAdmissionGrades } from "./reducers/AdmissionReducer";
import axios from "axios";
import { Table } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import "./primary.css";
const Primary = () => {
  const grades = useSelector((state: MainState) => state.admission.value);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(`http://localhost:4000/primary`)
      .then(({ data }) => {
        dispatch(setAdmissionGrades(data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div>
        <section className="primaryimg"></section>
        <Breadcrumb className="breadcrumb">
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/admission">Admission</Breadcrumb.Item>
          <Breadcrumb.Item active>Primary</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-2"></div>
          <div className="col-sm-8">
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
                          <td>{option.grade}</td>
                          <td>{option.fees}</td>
                          <td>{option.seats}</td>
                        </tr>
                      </>
                    ))}
                  </>
                ))}
              </tbody>
            </Table>
          </div>
          <div className="col-sm-2"></div>
        </div>
      </div>
    </>
  );
};

export default Primary;
