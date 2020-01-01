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
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  question:{
    fontSize: "14px",
    marginRight: "5px"
  }
});

export default styles;
