import React, { useState, useEffect } from "react";
import "date-fns";
import { createAssessmentType } from "../api/assessments_type";

import { makeStyles } from "@material-ui/core/styles";
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
    assessment_type_description: "",
    success: false,
  });

  const { assessment_type_description, error, success } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    createAssessmentType({
      assessment_type_description,
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
          assessment_type_description: "",
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
      Assessment Type has been created successfully!
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
  }));

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <PersonAddIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Create An Assessment Type
        </Typography>
        {showError()}
        {showSuccess()}
        <FormControl className={classes.form}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="assessment_type_description"
            label="Assessment Type"
            type="text"
            id="assessment_type_description"
            value={assessment_type_description}
            onChange={handleChange("assessment_type_description")}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={clickSubmit}
            className={classes.submit}
          >
            <Typography component="h1">Create An Assessment Type</Typography>
          </Button>
        </FormControl>
      </div>
    </Container>
  );
}
