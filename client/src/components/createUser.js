import React, { useState, useEffect } from "react";
import { createUser } from "../api/users";
import { getUsersGroups } from "../api/users_groups";
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

export default function CreateUser() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    role: "",
    error: "",
    success: false,
  });

  const [userGroup, setUserGroup] = useState([]);

  const { username, email, password, role, error, success } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    createUser({
      username,
      email,
      password,
      role,
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
          username: "",
          email: "",
          password: "",
          role: "",
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
      Account has been created successfully!
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

  // const admin = (
  //   <span>
  //     Once Role is set to{" "}
  //     <span style={{ color: "red", fontWeight: 600 }}>ADMIN</span> you cant
  //     change or delete it!!!
  //   </span>
  // );

  useEffect(() => {
    getUsersGroups().then((result) => setUserGroup(result.data));
  }, []);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <PersonAddIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Create User
        </Typography>
        {showError()}
        {showSuccess()}
        <FormControl className={classes.form}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="username"
            label="Username"
            type="text"
            id="username"
            value={username}
            onChange={handleChange("username")}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            value={email}
            onChange={handleChange("email")}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={password}
            onChange={handleChange("password")}
          />

          <TextField
            id="outlined-select-currency"
            style={{ marginTop: 15 }}
            select
            required
            fullWidth
            variant="outlined"
            label="Role"
            value={role}
            onChange={handleChange("role")}
          >
            {userGroup.map((g) => (
              <MenuItem key={g._id} value={g._id}>
                {g.group_name}
              </MenuItem>
            ))}
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
