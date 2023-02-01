
import { useState } from "react";
import { FormGroup,FormControl,InputLabel,Input, Typography,Button,styled} from "@mui/material";
import { addUser } from "../Services/api";
import { useNavigate } from "react-router-dom";
const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div{
    margin-top:20px;
  }
  `
const initialValues = {
    name:'',
    username:'',
    email:'',
    phone:''
  } 
 


const AddUser = () => {
    const onValueChange = (e) => {
        console.log(e.target.name,e.target.value);
        setUser({...user,[e.target.name]:e.target.value})
        console.log(user);
    }
    const AddUserDetail = async() => {
       await addUser(user);
       navigate("/all")
    }
    const[user,setUser]=useState(initialValues);
    const navigate = useNavigate();
    return (
         <Container>
            <Typography variant="h4">Add User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e)=> onValueChange(e)} name="name"/>
            </FormControl>
            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input onChange={(e)=> onValueChange(e)} name="username"/>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e)=> onValueChange(e)} name="email"/>
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e)=> onValueChange(e)} name="phone"/>
            </FormControl>
            <FormControl>
                <Button onClick={()=> AddUserDetail()} variant="contained">Add User</Button>
            </FormControl>
         </Container>   
    )
}
export default AddUser;