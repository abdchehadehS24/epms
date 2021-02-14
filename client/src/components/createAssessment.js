import React, { useState, useEffect } from "react";
import "date-fns";
import { createAssessment } from "../api/assessments";
import { getAssessmentTypes } from "../api/assessments_type";
import { getPatients } from "../api/patients";
import { getUsers } from "../api/users";

import { makeStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Alert from "@material-ui/lab/Alert";
import FormControl from "@material-ui/core/FormControl";

export default function CreateAssessment() {
  const [values, setValues] = useState({
    is_IDP: "true",
    is_refugee: "true",
    is_patient_registrar: "true",
    assessment_typeId: "",
    registrarId: "",
    email: "",
    cell_number: "",
    occupation: "",
    patientId: "",
    error: "",
    success: false,
  });

  const {
    assessment_typeId,
    is_IDP,
    is_refugee,
    is_patient_registrar,
    registrarId,
    email,
    cell_number,
    occupation,
    patientId,
    error,
    success,
  } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    createAssessment({
      assessment_typeId,
      is_IDP,
      is_refugee,
      is_patient_registrar,
      registrarId,
      email,
      cell_number,
      occupation,
      patientId,
    }).then((data) => {
      if (data.errors) {
        setValues({
          ...values,
          error: data.errors.message,
          success: false,
        });
      } else {
        setValues({
          ...values,
          assessment_typeId: "",
          is_IDP: "",
          is_refugee: "",
          is_patient_registrar: "",
          registrarId: "",
          email: "",
          cell_number: "",
          occupation: "",
          patientId: "",
          error: "",
          success: true,
        });
      }
    });
  };

  const showError = () => (
    <Alert
      variant="filled"
      severity="error"
      style={{ marginTop: "15px", display: error ? "" : "none" }}
    >
      {error}
    </Alert>
  );

  const showSuccess = () => (
    <Alert
      variant="filled"
      severity="success"
      style={{ display: success ? "" : "none" }}
    >
      Assessment has been created successfully!
    </Alert>
  );

  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(2),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: "100%", // Fix IE 11 issue.
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    textField: {
      marginTop: theme.spacing(2),
    },
  }));

  const classes = useStyles();

  const [assessmentTypes, setAssessmentTypes] = useState([]);
  const [patients, setPatients] = useState([]);
  const [users, setUsers] = useState([]);
  const [checked, setChecked] = useState(false);

  const handleCheckChange = (event) => {
    setChecked(event.target.checked);
  };

  const isChecked = checked === true;

  useEffect(() => {
    getAssessmentTypes().then((result) => setAssessmentTypes(result.data));
    getPatients().then((result) => setPatients(result.data));
    getUsers().then((result) => setUsers(result.data));
    return () => {};
  }, []);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <PersonAddIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Create Assessment
        </Typography>
        {showError()}
        {showSuccess()}
        <FormControl className={classes.form}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="email"
            label="Email"
            type="email"
            id="email"
            value={email}
            onChange={handleChange("email")}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="cell_number"
            label="cell_number "
            type="tel"
            id="cell_number"
            value={cell_number}
            onChange={handleChange("cell_number")}
          />
          <TextField
            id="outlined-select-currency"
            margin="normal"
            select
            required
            fullWidth
            variant="outlined"
            label="Patient"
            onChange={handleChange("patientId")}
          >
            {patients.map((p) => (
              <MenuItem key={p._id} value={p._id}>
                {p.first_name} {p.last_name}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="occupation"
            label="Occupation"
            type="text"
            id="occupation"
            value={occupation}
            onChange={handleChange("occupation")}
          />
          <TextField
            id="outlined-select-currency"
            margin="normal"
            select
            required
            fullWidth
            variant="outlined"
            label="Assessment Type"
            onChange={handleChange("assessment_typeId")}
          >
            {assessmentTypes.map((t) => (
              <MenuItem key={t._id} value={t._id}>
                {t.assessment_type_description}
              </MenuItem>
            ))}
          </TextField>
          <FormControlLabel
            control={
              <Checkbox
                margin="normal"
                defaultChecked={false}
                onChange={handleChange("is_IDP")}
                name="is_IDP"
                color="primary"
              />
            }
            label="Is_IDP"
          />
          <FormControlLabel
            control={
              <Checkbox
                margin="normal"
                defaultChecked={false}
                onChange={handleChange("is_refugee")}
                name="is_refugee"
                color="primary"
              />
            }
            label="Is_refugee"
          />
          <FormControlLabel
            control={
              <Checkbox
                margin="normal"
                checked={checked}
                onChange={handleCheckChange}
                name="checkedB"
                color="primary"
              />
            }
            label="Is Patient Registrar"
          />
          {isChecked && (
            <TextField
              id="outlined-select-currency"
              margin="normal"
              select
              required
              fullWidth
              variant="outlined"
              label="Registrar Username"
              onChange={handleChange("registrarId")}
            >
              {users.map((u) => (
                <MenuItem key={u._id} value={u._id}>
                  {u.username}
                </MenuItem>
              ))}
            </TextField>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={clickSubmit}
            className={classes.submit}
          >
            <Typography component="h1">Create Assessment</Typography>
          </Button>
        </FormControl>
      </div>
    </Container>
  );
}
