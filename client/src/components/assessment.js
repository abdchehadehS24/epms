import React, { useEffect, useState } from "react";

import {
  getAssessments,
  deleteAssessment,
  updateAssessment,
} from "../api/assessments";

import { getAssessmentTypes } from "../api/assessments_type";
import { getPatients } from "../api/patients";
import { getUsers } from "../api/users";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import MaterialTable from "material-table";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import CallMadeIcon from "@material-ui/icons/CallMade";
import Button from "@material-ui/core/Button";
import CreateAssessment from "./createAssessment";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: "25%",
  },
}));

export default function AssessmentsTable() {
  const [assessments, setAssessments] = useState([]);

  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    getAssessments().then((result) => setAssessments(result.data));
    getAssessmentTypes().then((result) => setAssessmentTypes(result.data));
    getPatients().then((result) => setPatients(result.data));
    getUsers().then((result) => setUsers(result.data));
  }, []);

  const [assessmentTypes, setAssessmentTypes] = useState([]);
  const [patients, setPatients] = useState([]);
  const [users, setUsers] = useState([]);

  return (
    <Container className="mt-5">
      <div className="mt-5">
        <div>
          <Button
            style={{ marginBottom: 5, fontWeight: 900 }}
            variant="contained"
            color="primary"
            onClick={handleOpen}
          >
            Add Assessment
          </Button>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <div className={classes.paper}>
                <CreateAssessment />
              </div>
            </Fade>
          </Modal>
        </div>
        <MaterialTable
          title="Users Table"
          columns={[
            { title: "Id", field: "_id", editable: "never" },
            { title: "Is_IDP", field: "is_IDP" },
            { title: "Is_Refugee", field: "is_refugee" },
            { title: "Email", field: "is_patient_registrar" },
            { title: "Phone Number", field: "cell_number" },
            {
              title: "Role",
              field: "role",
              lookup: { Admin: "Admin", User: "User" },
            },
          ]}
          data={assessments}
          editable={{
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  const dataUpdate = [...assessments];
                  const index = oldData.tableData.id;
                  dataUpdate[index] = newData;
                  setAssessments([...dataUpdate]);

                  resolve(updateAssessment(newData));
                }, 100);
              }),
            onRowDelete: (oldData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  const dataDelete = [...assessments];
                  const index = oldData.tableData.id;
                  dataDelete.splice(index, 1);
                  setAssessments([...dataDelete]);

                  resolve(deleteAssessment(oldData));
                }, 500);
              }),
          }}
          actions={[
            (assessments) => ({
              icon: () => (
                <Link to="/profile/patients">
                  <CallMadeIcon />
                </Link>
              ),
              tooltip: `Go to (${assessments.firstName})`,
            }),
          ]}
          options={{
            actionsColumnIndex: -1,
          }}
        />
      </div>
    </Container>
  );
}
