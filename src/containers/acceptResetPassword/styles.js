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
    marginTop: theme.spacing(20),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1)
  },
  submit: {
    marginTop: "20px",
    marginRight: "30px",
    marginLeft: "40px",
    width: "100px"
  },
  question: {
    fontSize: "14px",
    marginRight: "5px"
  }
});

export default styles;
