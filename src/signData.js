import React,{useEffect,useState} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom'
import { useSelector,useDispatch} from "react-redux";
import { getAllSingUpData,deleteSingUpData } from "./Store/action";
import {
  CssBaseline,
  TextField,
  Button,
  Grid,
  Paper,
  Typography,
  Container,
} from "@material-ui/core";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import EditIcon from '@material-ui/icons/Edit';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import SearchIcon from '@material-ui/icons/Search';
import { ToastContainer, toast } from "react-toastify";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  mainButton:{
    justifyContent:'center',
    width:'60px',

  }
});



export default ()=> {
  const dispatch = useDispatch();
  let history = useHistory()
  const allData = useSelector(state => state.reducer.singUpData) || []
  const classes = useStyles();
  const [search, setSearch] = useState('');

  useEffect(() => {
    dispatch(getAllSingUpData())
  }, []);

  const handleEdit =(res)=>{
    history.push('/', {res})
  }

  const handleDelete =(id)=>{
    dispatch(deleteSingUpData(id,callBackConfirmation))
  }

  const callBackConfirmation = (response) => {
    if (response && response.status === 200) {
      dispatch(getAllSingUpData())
      toast.success("Succesfully Delete", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
     
    } else {
      toast.error("something go wrong!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <>

<Container component="main" maxWidth="xs" style={{marginBottom:'50px',marginTop:'10px'}}>
      <ToastContainer />
      <CssBaseline />
      <Paper elevation={3} className={classes.upperPaper}>
        <div className={classes.paper}>
          <Typography component="h1" variant="h5" style={{padding:'10px'}}>
            <SearchIcon/>Search by Name
          </Typography>
          <div className={classes.form} style={{padding:'10px'}}>
              <Grid item xs={12} s>
                <TextField
                  variant="outlined"
                  fullWidth
                  type="text"
                  id="search"
                  label="Search"
                  name="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  autoComplete="age"
                />
              </Grid>
          </div>
        </div>
      </Paper>
    </Container>
    <TableContainer component={Paper} style={{padding:'40px'}}>
      <ToastContainer />
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Age </StyledTableCell>
            <StyledTableCell align="right">Language</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">State</StyledTableCell>
            <StyledTableCell align="right">City</StyledTableCell>
            <StyledTableCell align="right">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {allData
        .filter(name=>name.name.toLowerCase().indexOf(search.toLowerCase()) >=0).map(res=>
            <StyledTableRow key={res._id}>
            <StyledTableCell component="th" scope="row">
              {res.name}
            </StyledTableCell>
            <StyledTableCell align="right">{res.age}</StyledTableCell>
            <StyledTableCell align="right">{res.language}</StyledTableCell>
            <StyledTableCell align="right">{res.email}</StyledTableCell>
            <StyledTableCell align="right">{res.stte}</StyledTableCell>
            <StyledTableCell align="right">{res.city}</StyledTableCell>
            <StyledTableCell align="right"><EditIcon onClick={()=>handleEdit(res)}/><DeleteOutlineIcon onClick={()=>handleDelete(res._id)}/></StyledTableCell>
          </StyledTableRow>
          )}    
        </TableBody>
      </Table>
    </TableContainer>
     <Button
     style={{marginTop:'50px',position:'absolute',right: '10px',width: '10rem'}}
     type="button"
     variant="contained"
     color="primary"
     className={classes.submit}
     onClick={()=>history.push('/')}
   >
     Main Page
   </Button>
   </>
  );
}