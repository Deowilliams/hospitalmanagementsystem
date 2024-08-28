import React, { useState } from 'react';
import {  Box,  Typography,  TextField,  InputAdornment,  Button,  Grid,  Card,  CardContent,  Table,  TableBody,  TableCell,  TableContainer,  TableHead,  TableRow,  Paper} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import PeopleIcon from '@mui/icons-material/People';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import ScheduleIcon from '@mui/icons-material/Schedule';
import {  PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend,  BarChart, Bar, XAxis, YAxis, CartesianGrid} from 'recharts';

const Dashboard = () => {
  const today = new Date().toLocaleDateString();

  const [showAllAppointments, setShowAllAppointments] = useState(false);
  const [showAllSessions, setShowAllSessions] = useState(false);

  const handleToggleAppointments = () => {
    setShowAllAppointments(prev => !prev);
  };

  const handleToggleSessions = () => {
    setShowAllSessions(prev => !prev);
  };

  const appointments = [
    { id: 1, number: 'A001', patientName: 'John Doe', doctor: 'Dr. Smith', session: 'Consultation' },
    { id: 2, number: 'A002', patientName: 'Jane Roe', doctor: 'Dr. Adams', session: 'Follow-up' },
    { id: 3, number: 'A003', patientName: 'Emily Clark', doctor: 'Dr. Wilson', session: 'Consultation' },
    { id: 4, number: 'A004', patientName: 'Michael Brown', doctor: 'Dr. Lee', session: 'Check-up' },
    { id: 5, number: 'A005', patientName: 'Laura Johnson', doctor: 'Dr. Harris', session: 'Consultation' },
    { id: 6, number: 'A006', patientName: 'Chris Lee', doctor: 'Dr. Smith', session: 'Consultation' },
    { id: 7, number: 'A007', patientName: 'Patricia Green', doctor: 'Dr. Adams', session: 'Follow-up' },
    { id: 8, number: 'A008', patientName: 'Kevin Brown', doctor: 'Dr. Wilson', session: 'Check-up' },
    { id: 9, number: 'A009', patientName: 'Jessica White', doctor: 'Dr. Lee', session: 'Consultation' },
    { id: 10, number: 'A010', patientName: 'Brian King', doctor: 'Dr. Harris', session: 'Follow-up' }
  ];

  const sessions = [
    { id: 1, session: 'Consultation', doctor: 'Dr. Smith', scheduledDateTime: '2024-08-02 10:00 AM' },
    { id: 2, session: 'Follow-up', doctor: 'Dr. Adams', scheduledDateTime: '2024-08-02 02:00 PM' },
    { id: 3, session: 'Consultation', doctor: 'Dr. Wilson', scheduledDateTime: '2024-08-03 09:00 AM' },
    { id: 4, session: 'Check-up', doctor: 'Dr. Lee', scheduledDateTime: '2024-08-03 11:00 AM' },
    { id: 5, session: 'Consultation', doctor: 'Dr. Harris', scheduledDateTime: '2024-08-04 01:00 PM' },
    { id: 6, session: 'Follow-up', doctor: 'Dr. Adams', scheduledDateTime: '2024-08-04 03:00 PM' },
    { id: 7, session: 'Consultation', doctor: 'Dr. Smith', scheduledDateTime: '2024-08-05 10:00 AM' },
    { id: 8, session: 'Check-up', doctor: 'Dr. Wilson', scheduledDateTime: '2024-08-05 01:00 PM' },
    { id: 9, session: 'Follow-up', doctor: 'Dr. Harris', scheduledDateTime: '2024-08-06 02:00 PM' },
    { id: 10, session: 'Consultation', doctor: 'Dr. Lee', scheduledDateTime: '2024-08-06 04:00 PM' }
  ];

  const pieData = [
    { name: 'Consultation', value: 50 },
    { name: 'Follow-up', value: 30 },
    { name: 'Check-up', value: 10 },
    { name: 'Others', value: 10 },
  ];

  const barData = [
    { name: 'Dr. Smith', Consultation: 15, Followup: 5, Checkup: 2 },
    { name: 'Dr. Adams', Consultation: 8, Followup: 10, Checkup: 4 },
    { name: 'Dr. Wilson', Consultation: 12, Followup: 6, Checkup: 5 },
    { name: 'Dr. Lee', Consultation: 9, Followup: 4, Checkup: 6 },
    { name: 'Dr. Harris', Consultation: 13, Followup: 8, Checkup: 3 }
  ];

  const PIE_COLORS = ['#FF6347', '#3CB371', '#FFD700', '#4682B4'];
  const BAR_COLORS = ['#FF6347', '#3CB371', '#FFD700'];


  // if (loading) return <Typography sx={{color:"black",textAlign:"center",mt:4}}>Loading...</Typography>;

  return (
    
    <Box sx={{ marginLeft: '250px', padding: '20px',backgroundColor:"white" }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', width: '60%' }}>
          <TextField   variant="outlined"  placeholder="Search Doctor name or Email"  size="small"  fullWidth  sx={{ mr: 2 }} 
          InputProps={{ startAdornment: (
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
            <Typography variant="body1" sx={{ mr: 1 }}>{today}</Typography>
            <CalendarTodayIcon />
          </Box>
        </Box>
      </Box>


      <Typography variant="h5" sx={{ mb: 3 }}>Status</Typography>




      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <LocalHospitalIcon sx={{ mr: 2 }} />
                <Typography variant="h6">Doctors</Typography>
              </Box>
              <Typography variant="h4">10</Typography>
            </CardContent>
          </Card>
        </Grid>



        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <PeopleIcon sx={{ mr: 2 }} />
                <Typography variant="h6">Patients</Typography>
              </Box>
              <Typography variant="h4">50</Typography>
            </CardContent>
          </Card>
        </Grid>


        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <EventAvailableIcon sx={{ mr: 2 }} />
                <Typography variant="h6">New Bookings</Typography>
              </Box>
              <Typography variant="h4">5</Typography>
            </CardContent>
          </Card>
        </Grid>


        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <ScheduleIcon sx={{ mr: 2 }} />
                <Typography variant="h6">Appointments</Typography>
              </Box>
              <Typography variant="h4">20</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>



      <Grid container spacing={3} sx={{ mt: 4 }}>
        <Grid item xs={12} md={6}>
          <Box>
            <Typography variant="h6" sx={{ mb: 2, color: 'blue' }}>Appointments</Typography>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Appointment Number</TableCell>
                    <TableCell>Patient Name</TableCell>
                    <TableCell>Doctor</TableCell>
                    <TableCell>Session</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {appointments.slice(0, showAllAppointments ? undefined : 5).map((appointment) => (
                    <TableRow key={appointment.id}>
                      <TableCell>{appointment.number}</TableCell>
                      <TableCell>{appointment.patientName}</TableCell>
                      <TableCell>{appointment.doctor}</TableCell>
                      <TableCell>{appointment.session}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Button variant="outlined" onClick={handleToggleAppointments} sx={{ mt: 2 }}>
              {showAllAppointments ? 'Show Less' : 'Show All Appointments'}
            </Button>
          </Box>
        </Grid>



        <Grid item xs={12} md={6}>
          <Box>
            <Typography variant="h6" sx={{ mb: 2, color: 'blue' }}>Sessions</Typography>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Session</TableCell>
                    <TableCell>Doctor</TableCell>
                    <TableCell>Scheduled Date & Time</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {sessions.slice(0, showAllSessions ? undefined : 5).map((session) => (
                    <TableRow key={session.id}>
                      <TableCell>{session.session}</TableCell>
                      <TableCell>{session.doctor}</TableCell>
                      <TableCell>{session.scheduledDateTime}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Button variant="outlined" onClick={handleToggleSessions} sx={{ mt: 2 }}>
              {showAllSessions ? 'Show Less' : 'Show All Sessions'}
            </Button>
          </Box>
        </Grid>
      </Grid>




      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>Charts</Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Box sx={{ height: 300 }}>
              <Typography variant="h6" sx={{ mb: 2 }}>Appointments Breakdown</Typography>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={pieData} dataKey="value" outerRadius={80} label>
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </Box>
          </Grid>




          <Grid item xs={12} md={6}>
            <Box sx={{ height: 300 }}>
              <Typography variant="h6" sx={{ mb: 2 }}>Doctor Appointments</Typography>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart  
                 data={barData}margin={{ top: 20, right: 30, left: 20, bottom: 5 }} >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  {['Consultation', 'Followup', 'Checkup'].map((sessionType, index) => (
                    <Bar key={sessionType} dataKey={sessionType} fill={BAR_COLORS[index % BAR_COLORS.length]} />
                  ))}
                </BarChart>
              </ResponsiveContainer>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;
