const styles = theme => ({
  "@global": {
    body: {
      backgroundImage: `url(${"./images/page.jpg"})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundAttachment: "fixed"
    }
  },
  title: {
    fontSize: "30px"
  },
  paper: {
    marginTop: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  question: {
    fontSize: "14px",
    marginRight: "5px",
    marginBottom: "10px"
  }
});

export default styles;
