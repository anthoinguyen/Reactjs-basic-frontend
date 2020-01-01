const styles = theme => ({
  root: {
    backgroundColor: "#F2F3F5",
    marginTop: "10px"
  },
  container:{
    paddingRight:"5px",
    paddingLeft:"5px"
  },
  title: {
    marginLeft: "20px",
    fontSize: "18px",
    color: "green",
    marginTop: "10px",
    fontWeight: "bold"
  },
  paper: {
    margin: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  submit: {
    marginTop: theme.spacing(2)
  }
});

export default styles;
