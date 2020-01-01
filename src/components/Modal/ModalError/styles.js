const styles = theme => ({
  modal: {
    top: '30%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    position: 'absolute',
    width: 400,
    backgroundColor: "white",
    boxShadow: "#000000",
    outline: 'none',
  },
  header: {
    backgroundColor: "#eb4236",
    padding: "10px 15px",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: "white",
    fontWeight: 700,
    textTransform: 'capitalize',
    fontSize: "15px"
  },
  icon: {
    cursor: 'pointer',
    fontSize: 30,
    color: "white"
  },
  content: {
    padding: "10px 15px",
  },
  name:{
    paddingTop:"5px",
    borderBottom: "0.5px solid red",
  }
});

export default styles;
