import { useEffect } from "react";
import { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
function Dialogboxowners(props) {
  const [subscriptionname, setSubscriptionName] = useState(props.name);
  const [Amount, setAmount] = useState(props.date);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(subscriptionname + Amount);

    props.callBack({ name: subscriptionname, Amount: Amount });
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
          label="Subscription Name"
          name="subscriptionname"
          value={subscriptionname}
          onChange={(e) => setSubscriptionName(e.target.value)}
          autoComplete="subscriptionname"
          autoFocus
        />
        <TextField
          className={classes.textField}
          // variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Subscription Amount"
          name="Amount"
          value={Amount}
          onChange={(e) => setAmount(e.target.value)}
          autoComplete="Amount"
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
export default Dialogboxowners;
