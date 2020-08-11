import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    upperPaper: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: 10,
    },
    paper: {
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
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    formControl: {
      minWidth: "100%",
    },
    errorMsg: {
      margin: "10px 0px",
      color: "red",
    },
  }));