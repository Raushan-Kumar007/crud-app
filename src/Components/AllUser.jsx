import { useEffect,useState} from 'react';
import {Table,TableHead,TableBody,TableRow,TableCell,Button,styled} from '@mui/material';
import { getUsers,deleteUser } from '../Services/api';
import {Link} from 'react-router-dom';
 
const StyledTable = styled(Table)`
width:90%;
margin:50px auto 0 auto;
`;

const Thead = styled(TableRow)`
background:#000;
& > th {
  color: #fff;
  font-size:20px;
}
`;

const TBody = styled(TableRow)`
& > td {
  font-size:20px;
}
`  

const AllUser = () => {
    const [user,setUsers] = useState([]);
    useEffect(()=>{
       getUsersDetails();
    },[])

    const getUsersDetails = async()=>{
        let response = await getUsers();
        console.log(response);
        setUsers(response.data);
    }
    const deleteUserData = async(id)=>{
        await deleteUser(id)
        getUsersDetails();
    }
    return (
        <div>
       <StyledTable>
        <TableHead>
            <Thead>
                <TableCell>Id</TableCell>
                <TableCell>Home</TableCell>
                <TableCell>Username</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell></TableCell>
            </Thead>
        </TableHead>
        <TableBody>
            {
                 user.map(users =>(
                 <TBody>
                    <TableCell>{users.id}</TableCell>
                    <TableCell>{users.name}</TableCell>
                    <TableCell>{users.username}</TableCell>
                    <TableCell>{users.email}</TableCell>
                    <TableCell>{users.phone}</TableCell>
                    <TableCell>
                     <Button variant='contained' style={{marginRight:10}} component={Link} to={`/edit/${users.id}`}>Edit</Button>
                     <Button variant='contained' color='secondary' onClick={()=>deleteUserData(users.id)}>Delete</Button>
                    </TableCell>
                </TBody>))
            }
        </TableBody>
       </StyledTable>
       </div>
    )
}
export default AllUser;