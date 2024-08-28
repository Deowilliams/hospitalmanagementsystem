import React, { useState, useEffect } from 'react';
import {  Box,  Typography,  TextField,  InputAdornment,  Button,  Grid,  Card,  CardContent,  Table,  TableBody,  TableCell,  TableContainer,  TableHead,  TableRow,  Paper} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Doctors = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users'); 
        setDoctors(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredDoctors = doctors.filter(doctor =>
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doctor.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <Typography sx={{color:"black",textAlign:"center",mt:4}}>Loading...</Typography>;



  return (
    <Box sx={{ marginLeft: '250px', padding: '20px',backgroundColor:"white" }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Button variant="outlined"  color="primary"  
        startIcon={<ArrowBackIcon />}  onClick={() => navigate(-1)} >  Back
        </Button>


        <Box sx={{ display: 'flex', alignItems: 'center', width: '60%' }}>
          <TextField  variant="outlined" placeholder="Search Doctors" size="small" fullWidth 
          value={searchTerm}     onChange={handleSearchChange}
            sx={{ mr: 2 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />

          <Button variant="contained" color="primary" startIcon={<SearchIcon />}>
            Search
          </Button>
        </Box>




        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h6">Today's Date</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="body1" sx={{ mr: 1 }}>{new Date().toLocaleDateString()}</Typography>
            <CalendarTodayIcon />
          </Box>
        </Box>
      </Box>



      <Button variant="contained" color="primary" startIcon={<AddIcon />} sx={{ float: 'right', mb: 2 }}>
        Add New
      </Button>


      <Typography variant="h5" sx={{ mb: 2 }}>
        All Doctors ({filteredDoctors.length})
      </Typography>




      <TableContainer component={Paper} sx={{ mb: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ borderBottom: '2px solid blue', fontSize: '1rem' }}>Name</TableCell>
              <TableCell sx={{ borderBottom: '2px solid blue', fontSize: '1rem' }}>Email</TableCell>
              <TableCell sx={{ borderBottom: '2px solid blue', fontSize: '1rem' }}>Specialties</TableCell>
              <TableCell sx={{ borderBottom: '2px solid blue', fontSize: '1rem' }}>Phone</TableCell>
              <TableCell sx={{ borderBottom: '2px solid blue', fontSize: '1rem' }}>Address</TableCell>
              <TableCell sx={{ borderBottom: '2px solid blue', fontSize: '1rem' }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredDoctors.map((doctor) => (
              <TableRow key={doctor.id}>
                <TableCell>{doctor.name}</TableCell>
                <TableCell>{doctor.email}</TableCell>
                <TableCell>{doctor.company.name}</TableCell> 
                <TableCell>{doctor.phone}</TableCell>
                <TableCell>{doctor.address.street}, {doctor.address.city}</TableCell> 
                <TableCell>
                  <Button variant="outlined" color="primary" sx={{ mr: 1 }}>Edit</Button>
                  <Button variant="outlined" color="primary" sx={{ mr: 1 }}>View</Button>
                  <Button variant="outlined" color="error">Remove</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Doctors;
