import { useEffect } from "react";
import { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
function Dialogbox(props) {
  const [eventname, setEventName] = useState("");
  const [date, setdate] = useState("");
  const [duration, setduration] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(eventname + date + duration);

    props.callBack({ name: eventname, date: date, duration: duration });
  };

  const useStyles = makeStyles((theme) => ({
    paper: {
      display: "flex",
      width: "400px",

      padding: "20px",

      paddingBottom: "20px",
      elevation: "0px",
      flexDirection: "column",
      alignItems: "center",
    },

    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
      height: 40,
    },
    textField: {
      height: "50px",
    },
  }));

  const classes = useStyles();
  return (
    <Container className={classes.paper}>
      <h2></h2>
      <form
        className={classes.form}
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <TextField
          className={classes.textField}
          // variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Event Name"
          name="eventname"
          value={eventname}
          onChange={(e) => setEventName(e.target.value)}
          autoComplete="Eventname"
          autoFocus
        />
        <TextField
          className={classes.textField}
          // variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Payment Date"
          name="paymentdate"
          value={date}
          onChange={(e) => setdate(e.target.value)}
          autoComplete="paymentdate"
          autoFocus
        />
        <TextField
          className={classes.textField}
          // variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Duration"
          onChange={(e) => setduration(e.target.value)}
          name="duration"
          value={duration}
          autoComplete="Duration"
          autoFocus
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Confirm
        </Button>
      </form>
    </Container>
  );
}
export default Dialogbox;
