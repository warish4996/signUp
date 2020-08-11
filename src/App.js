import React, { useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import { singUpDataAction } from "./Store/action";
import RefreshIcon from "@material-ui/icons/Refresh";
import {
  CssBaseline,
  InputLabel,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Paper,
  Avatar,
  Typography,
  Container,
  Select,
  MenuItem,
  FormControl,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import ErrorIcon from "@material-ui/icons/Error";
import useStyles from './AppCss';
import { ToastContainer, toast } from "react-toastify";



export default () => {
  const classes = useStyles();
  const [language, setLanguage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [married, setMarried] = useState(false);
  const [address, setAddress] = useState({
    city: "",
    State: "",
  });
  const [errors, setError] = useState(false);

  const selectLanguage = [
    "Hindi",
    "English",
    "Arabic",
    "Bengali",
    "Portuguese",
    "Russian",
  ];

  const selectState = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttarakhand",
    "Uttar Pradesh",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry",
  ];

  const dispatch = useDispatch();

  const validateForm = () => {
    if (!firstName) {
      setError(true);
      return false;
    } else if (!lastName) {
      setError(true);
      return false;
    } else if (!email) {
      setError(true);
      return false;
    } else if (!password) {
      setError(true);
      return false;
    } else if (!age) {
      setError(true);
      return false;
    } else if (!language) {
      setError(true);
      return false;
    } else if (!address.State) {
      setError(true);
      return false;
    } else if (!address.city) {
      setError(true);
      return false;
    } else {
      return true;
    }
  };

  const handleData = () => {
    setError(false);
    if (validateForm()) {
      const paylod = {
        name: `${firstName} ${lastName}`,
        email: email,
        password: password,
        age: age,
        language: language,
        married: married,
        address: address,
      };
      dispatch(singUpDataAction(paylod, callBackConfirmation));
    }
  };

  const callBackConfirmation = (response) => {
    if (response == "done") {
      setAddress({State:'',city:''})
      setLanguage('')
      setEmail('')
      setFirstName('')
      setLastName('')
      setMarried(false)
      setPassword('')
      setAge('')
      toast.success("Sign Up Done", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
     
    } else {
      toast.error("something go wrong!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  
  const refresh = () => {
    if (window.confirm("are you sure want to refresh ?")) {
      window.location.reload();
    }
  };

  const handleAddress = (e) => {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
  };

 

  return (
    <Container component="main" maxWidth="xs">
      <ToastContainer />
      <CssBaseline />
      <Paper elevation={3} className={classes.upperPaper}>
        <RefreshIcon onClick={refresh} />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <div className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  autoFocus
                />
                {errors && firstName === "" && (
                  <div className={classes.errorMsg}>
                    <ErrorIcon /> First Name is Required
                  </div>
                )}
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  autoComplete="lname"
                />
                {errors && lastName === "" && (
                  <div className={classes.errorMsg}>
                    <ErrorIcon /> Last Name is Required
                  </div>
                )}
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="demo-simple-select-outlined-label">
                    Language
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    label="Language"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {selectLanguage.map((res, index) => (
                      <MenuItem key={index} value={res}>
                        {res}
                      </MenuItem>
                    ))}
                  </Select>
                  {errors && language === "" && (
                    <div className={classes.errorMsg}>
                      <ErrorIcon /> Language is Required
                    </div>
                  )}
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="demo-simple-select-outlined-label">
                    State
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={address.State}
                    name="State"
                    onChange={(e) => handleAddress(e)}
                    label="State"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {selectState.map((res, index) => (
                      <MenuItem key={index} value={res}>
                        {res}
                      </MenuItem>
                    ))}
                  </Select>
                  {errors && address.State === "" && (
                    <div className={classes.errorMsg}>
                      <ErrorIcon /> State is Required
                    </div>
                  )}
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="city"
                  label="City"
                  name="city"
                  value={address.city}
                  onChange={(e) => handleAddress(e)}
                  autoComplete="city"
                />
                {errors && address.city === "" && (
                  <div className={classes.errorMsg}>
                    <ErrorIcon /> City is Required
                  </div>
                )}
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  type="number"
                  id="age"
                  label="Age"
                  name="age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  autoComplete="age"
                />
                {errors && age === "" && (
                  <div className={classes.errorMsg}>
                    <ErrorIcon /> Age is Required
                  </div>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                />
                {errors && email === "" && (
                  <div className={classes.errorMsg}>
                    <ErrorIcon /> Email is Required
                  </div>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                />
                {errors && password === "" && (
                  <div className={classes.errorMsg}>
                    <ErrorIcon /> Password is Required
                  </div>
                )}
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      value="allowExtraEmails"
                      color="primary"
                      checked={married ? true :false}
                      onChange={(e) => setMarried(!married)}
                    />
                  }
                  label="Married"
                />
              </Grid>
            </Grid>
            <Button
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleData}
            >
              Sign Up
            </Button>
          </div>
        </div>
      </Paper>
    </Container>
  );
};
