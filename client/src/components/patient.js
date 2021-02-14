import React, { useState } from "react";
import "date-fns";
import { createPatient } from "../api/patients";

import { makeStyles } from "@material-ui/core/styles";
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

export default function CreatePatient() {
  const [values, setValues] = useState({
    first_name: "",
    last_name: "",
    dob: "",
    age_at_registration: "",
    gender: "",
    error: "",
    success: false,
  });

  const {
    first_name,
    last_name,
    dob,
    age_at_registration,
    gender,
    error,
    success,
  } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    createPatient({
      first_name,
      last_name,
      dob,
      age_at_registration,
      gender,
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
          first_name: "",
          last_name: "",
          dob: "",
          age_at_registration: "",
          gender: "",
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
      Patient has been created successfully!
    </Alert>
  );

  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
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

  // const admin = (
  //   <span>
  //     Once Role is set to{" "}
  //     <span style={{ color: "red", fontWeight: 600 }}>ADMIN</span> you cant
  //     change or delete it!!!
  //   </span>
  // );

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <PersonAddIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Create Patient
        </Typography>
        {showError()}
        {showSuccess()}
        <FormControl className={classes.form}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="first_name"
            label="FirstName"
            type="text"
            id="first_name"
            value={first_name}
            onChange={handleChange("first_name")}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            type="text"
            id="last_name"
            label="LastName"
            name="last_name"
            value={last_name}
            onChange={handleChange("last_name")}
          />
          <TextField
            margin="normal"
            id="date"
            type="date"
            label="Date-of-birth"
            variant="outlined"
            defaultValue="2017-05-24"
            value={dob}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleChange("dob")}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="age_at_registration"
            label="Age at registration"
            type="number"
            id="age_at_registration"
            value={age_at_registration}
            onChange={handleChange("age_at_registration")}
          />

          <TextField
            id="outlined-select-currency"
            margin="normal"
            select
            required
            fullWidth
            variant="outlined"
            label="Gender"
            value={gender}
            onChange={handleChange("gender")}
          >
            <MenuItem value={"male"}>Male</MenuItem>
            <MenuItem value={"female"}>Female</MenuItem>
          </TextField>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={clickSubmit}
            className={classes.submit}
          >
            <Typography component="h1">Create User</Typography>
          </Button>
        </FormControl>
      </div>
    </Container>
  );
}
