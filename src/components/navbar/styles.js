
const styles = theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    display: 'none',
    flexGrow: 1,
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  homeIcon: {
    fontSize: "30px",
    color: "white"
  },
  icon: {
    marginLeft: "5px",
    marginRight: "5px"
  }
});

export default styles;
