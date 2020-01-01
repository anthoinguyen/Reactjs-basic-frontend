const styles = theme => ({
  "@global": {
    body: {
      backgroundColor: "rgba(199, 220, 252, 0.9)",
      overflow: "visible",
    }
  },
  container:{
    marginTop: "70px"
  },
  card: {
    maxWidth: "100%",
    marginTop: "20px"
  },
  avatar: {
    backgroundColor: theme.palette.primary.main
  }
});

export default styles;
