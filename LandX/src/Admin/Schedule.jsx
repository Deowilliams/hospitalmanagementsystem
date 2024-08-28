import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField, InputAdornment, Button, Grid, Card, CardContent, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, FormControl, InputLabel, Select, MenuItem, IconButton, Modal } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import FilterListIcon from '@mui/icons-material/FilterList';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';

const Schedule = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [sessions, setSessions] = useState([]);
  const [filteredSessions, setFilteredSessions] = useState([]);
  const [viewSession, setViewSession] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const navigate = useNavigate();

  const today = new Date();
  const formattedToday = today.toLocaleDateString('en-CA');


  useEffect(() => {
    const fetchSessions = async () => {
      try {
        const response = await fetch('http://localhost:5001/schedules');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setSessions(data);
        setFilteredSessions(data);
      } catch (error) {
        console.error('Error fetching sessions:', error);
      }
    };

    fetchSessions();
  }, []);


  useEffect(() => {
    const filterSessions = () => {
      const filtered = sessions.filter(session => {
        const matchDate = selectedDate ? session.scheduledDateTime.includes(selectedDate) : true;
        const matchDoctor = selectedDoctor ? session.doctor === selectedDoctor : true;
        const matchStatus = selectedStatus ? session.status === selectedStatus : true;
        return matchDate && matchDoctor && matchStatus;
      });
      setFilteredSessions(filtered);
    };

    filterSessions();
  }, [selectedDate, selectedDoctor, selectedStatus, sessions]);


  const handleViewSession = (session) => {
    setViewSession(session);
  };

  const handleCloseViewSession = () => {
    setViewSession(null);
  };

  const handleDeleteSession = (sessionId) => {
    setDeleteId(sessionId);
  };

  const handleConfirmDelete = async () => {
    try {
      await fetch(`http://localhost:5001/schedules/${deleteId}`, {
        method: 'DELETE',
      });
      setSessions(sessions.filter((session) => session.id !== deleteId));
      setFilteredSessions(filteredSessions.filter((session) => session.id !== deleteId));
      setDeleteId(null);
    } catch (error) {
      console.error('Error deleting session:', error);
    }
  };

  const handleCancelDelete = () => {
    setDeleteId(null);
  };


  const uniqueDoctors = [...new Set(sessions.map(session => session.doctor))];


  return (

    <Box sx={{ padding: '20px', marginLeft: '240px' ,backgroundColor:"white"}}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Button variant="outlined" color="primary" startIcon={<ArrowBackIcon />} onClick={() => navigate(-1)}>
          Back
        </Button>
        <Typography variant="h5">Schedule Manager</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h6">Today's Date</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="body1" sx={{ mr: 1 }}>
              {today.toLocaleDateString()}
            </Typography>
            <CalendarTodayIcon />
          </Box>
        </Box>
      </Box>


      <Box sx={{ mb: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6" sx={{ color: 'black', fontSize: '1.25rem' }}>
            All Sessions ({filteredSessions.length})
          </Typography>
          <Button variant="contained" color="primary" startIcon={<AddIcon />}>
            Add Session
          </Button>
        </Box>


        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <FormControl variant="outlined" sx={{ mr: 2, minWidth: 120 }}>
            <InputLabel>Date</InputLabel>
            <Select
              onChange={(e) => setSelectedDate(e.target.value)}
              value={selectedDate}
              label="Date">
              <MenuItem value={formattedToday}>{today.toLocaleDateString()}</MenuItem>
            </Select>
          </FormControl>


          <FormControl variant="outlined" sx={{ mr: 2, minWidth: 180 }}>
            <InputLabel>Doctor</InputLabel>
            <Select
              value={selectedDoctor}
              onChange={(e) => setSelectedDoctor(e.target.value)}
              label="Doctor" >
              <MenuItem value="">All</MenuItem>
              {uniqueDoctors.map((doctor) => (
                <MenuItem key={doctor} value={doctor}>
                  {doctor}
                </MenuItem>
              ))}
            </Select>
          </FormControl>


          <FormControl variant="outlined" sx={{ mr: 2, minWidth: 120 }}>
            <InputLabel>Status</InputLabel>
            <Select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              label="Status" >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="Available">Available</MenuItem>
              <MenuItem value="Full">Full</MenuItem>
              <MenuItem value="Cancelled">Cancelled</MenuItem>
            </Select>
          </FormControl>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton color="primary" sx={{ ml: 2 }}>
              <FilterListIcon />
            </IconButton>
            <Typography variant="body1" sx={{ ml: 1 }}>
              Filter
            </Typography>
          </Box>
        </Box>
      </Box>



      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ borderBottom: '2px solid blue', fontSize: '1rem' }}>
                Session Title
              </TableCell>
              <TableCell sx={{ borderBottom: '2px solid blue', fontSize: '1rem' }}>Doctor</TableCell>
              <TableCell sx={{ borderBottom: '2px solid blue', fontSize: '1rem' }}>
                Scheduled & Time
              </TableCell>
              <TableCell sx={{ borderBottom: '2px solid blue', fontSize: '1rem' }}>
                Max Bookings
              </TableCell>
              <TableCell sx={{ borderBottom: '2px solid blue', fontSize: '1rem' }}>Events</TableCell>
              <TableCell sx={{ borderBottom: '2px solid blue', fontSize: '1rem' }}>Status</TableCell>
              <TableCell sx={{ borderBottom: '2px solid blue', fontSize: '1rem' }}>Location</TableCell>
              <TableCell sx={{ borderBottom: '2px solid blue', fontSize: '1rem' }}>Duration</TableCell>
              <TableCell sx={{ borderBottom: '2px solid blue', fontSize: '1rem' }}>
                Special Notes
              </TableCell>
              <TableCell sx={{ borderBottom: '2px solid blue', fontSize: '1rem' }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredSessions.length === 0 ? (
              <TableRow>
                <TableCell colSpan={10} align="center">
                  No sessions available
                </TableCell>
              </TableRow>
            ) : (
              filteredSessions.map((session) => (
                <TableRow key={session.id}>
                  <TableCell>{session.title}</TableCell>
                  <TableCell>{session.doctor}</TableCell>
                  <TableCell>{session.scheduledDateTime}</TableCell>
                  <TableCell>{session.maxBookings}</TableCell>
                  <TableCell>{session.events}</TableCell>
                  <TableCell>{session.status}</TableCell>
                  <TableCell>{session.location}</TableCell>
                  <TableCell>{session.duration}</TableCell>
                  <TableCell>{session.specialNotes}</TableCell>
                  <TableCell>
                    <IconButton color="primary" onClick={() => handleViewSession(session)}>
                      <VisibilityIcon />
                    </IconButton>
                    <IconButton color="error" onClick={() => handleDeleteSession(session.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>



      <Modal open={Boolean(viewSession)} onClose={handleCloseViewSession}>
        <Box sx={{ padding: 2, maxWidth: 600, margin: 'auto', backgroundColor: 'white', borderRadius: 1 }}>
          {viewSession && (
            <>
              <Typography variant="h6">{viewSession.title}</Typography>
              <Typography variant="body1">Doctor: {viewSession.doctor}</Typography>
              <Typography variant="body1">Scheduled Date & Time: {viewSession.scheduledDateTime}</Typography>
              <Typography variant="body1">Max Bookings: {viewSession.maxBookings}</Typography>
              <Typography variant="body1">Events: {viewSession.events}</Typography>
              <Typography variant="body1">Status: {viewSession.status}</Typography>
              <Typography variant="body1">Location: {viewSession.location}</Typography>
              <Typography variant="body1">Duration: {viewSession.duration}</Typography>
              <Typography variant="body1">Special Notes: {viewSession.specialNotes}</Typography>
              <Button variant="outlined" color="primary" onClick={handleCloseViewSession}>
                Close
              </Button>
            </>
          )}
        </Box>
      </Modal>



      <Modal open={Boolean(deleteId)} onClose={handleCancelDelete}>
        <Box sx={{ padding: 2, maxWidth: 400, margin: 'auto', backgroundColor: 'white', borderRadius: 1 }}>
          <Typography variant="h6">Confirm Delete</Typography>
          <Typography variant="body1">Are you sure you want to delete this session?</Typography>
          <Box sx={{ mt: 2 }}>
            <Button variant="contained" color="error" onClick={handleConfirmDelete}>
              Confirm
            </Button>
            <Button variant="outlined" color="primary" onClick={handleCancelDelete} sx={{ ml: 2 }}>
              Cancel
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default Schedule;
