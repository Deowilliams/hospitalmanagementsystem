import React, { useState } from 'react';
import { Box, Typography, TextField, InputAdornment, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, FormControl, InputLabel, Select, MenuItem, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddIcon from '@mui/icons-material/Add';
import FilterListIcon from '@mui/icons-material/FilterList';
import { useNavigate } from 'react-router-dom';

const Patients = () => {
  const today = new Date().toLocaleDateString();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  const patients = [
    { id: 1, name: 'Alice Johnson', dob: '1985-07-20', gender: 'Female', contact: '123-456-7890', email: 'john@example.com', address: '123 Elm St', status: 'Active' },
    { id: 2, name: 'Bob Smith', dob: '1990-10-15', gender: 'Male', contact: '345-654-3210', email: 'bob@example.com', address: '456 Oak St', status: 'Inactive' },
    { id: 3, name: 'Alice', dob: '1985-07-20', gender: 'Female', contact: '345-456-7890', email: 'alice@example.com', address: '456 Elm St', status: 'Active' },
    { id: 4, name: 'Smith', dob: '1990-05-15', gender: 'Male', contact: '987-654-3210', email: 'smith@example.com', address: '123 Oak St', status: 'Inactive' },
  ];

  const filteredPatients = patients.filter(patient =>
    (patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.email.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (statusFilter === '' || patient.status === statusFilter)
  );

  const handleSearchChange = (event) => setSearchTerm(event.target.value);
  const handleStatusFilterChange = (event) => setStatusFilter(event.target.value);

  return (
    <Box sx={{ marginLeft: '250px', padding: '20px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Button variant="outlined" color="primary" 
        startIcon={<ArrowBackIcon />} 
        onClick={() => navigate(-1)} >
          Back
        </Button>

        <Typography variant="h5" sx={{ flexGrow: 1, textAlign: 'center' }}>
          Patients
        </Typography>
        <Box sx={{ width: '48px' }} />
      </Box>


      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', width: '60%' }}>
          <TextField variant="outlined"  placeholder="Search Patients"  size="small"  fullWidth    sx={{ mr: 2 }}
            value={searchTerm}
            onChange={handleSearchChange}
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


        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <FormControl variant="outlined" sx={{ minWidth: 120, mr: 2 }}>
            <InputLabel>Status</InputLabel>
            <Select
              value={statusFilter}
              onChange={handleStatusFilterChange}
              label="Status" >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="Active">Active</MenuItem>
              <MenuItem value="Inactive">Inactive</MenuItem>
            </Select>
          </FormControl>
          <IconButton color="primary">
            <FilterListIcon />
          </IconButton>
        </Box>


        <Button 
          variant="contained" 
          color="primary" 
          startIcon={<AddIcon />}
          onClick={() => navigate('/add-patient')}>
          Add New Patient
        </Button>
      </Box>


      <Box sx={{ position: 'absolute', top: '20px', right: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h6">Today's Date</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="body1" sx={{ mr: 1 }}>{today}</Typography>
            <CalendarTodayIcon />
          </Box>
        </Box>
      </Box>


      <Typography variant="h6" sx={{ mb: 2, textAlign: 'center' }}>
        All Patients ({filteredPatients.length})
      </Typography>



      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell  sx={{ borderBottom: '2px solid blue', fontSize: '1rem' }}>ID</TableCell>
              <TableCell  sx={{ borderBottom: '2px solid blue', fontSize: '1rem' }}>Name</TableCell>
              <TableCell  sx={{ borderBottom: '2px solid blue', fontSize: '1rem' }}>Date of Birth</TableCell>
              <TableCell  sx={{ borderBottom: '2px solid blue', fontSize: '1rem' }}>Gender</TableCell>
              <TableCell  sx={{ borderBottom: '2px solid blue', fontSize: '1rem' }}>Contact Number</TableCell>
              <TableCell  sx={{ borderBottom: '2px solid blue', fontSize: '1rem' }}>Email</TableCell>
              <TableCell  sx={{ borderBottom: '2px solid blue', fontSize: '1rem' }}>Address</TableCell>
              <TableCell  sx={{ borderBottom: '2px solid blue', fontSize: '1rem' }}>Status</TableCell>
              <TableCell  sx={{ borderBottom: '2px solid blue', fontSize: '1rem' }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredPatients.map((patient) => (
              <TableRow key={patient.id}>
                <TableCell>{patient.id}</TableCell>
                <TableCell>{patient.name}</TableCell>
                <TableCell>{patient.dob}</TableCell>
                <TableCell>{patient.gender}</TableCell>
                <TableCell>{patient.contact}</TableCell>
                <TableCell>{patient.email}</TableCell>
                <TableCell>{patient.address}</TableCell>
                <TableCell>{patient.status}</TableCell>
                <TableCell>
                  <Button variant="outlined" color="primary" sx={{ mr: 1 }}>Edit</Button>
                  <Button variant="outlined" color="primary" sx={{ mr: 1 }}>View</Button>
                  <Button variant="outlined" color="error">Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Patients;
``
