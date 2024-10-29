import * as React from 'react';
import { Typography, Box, Divider, Button, TextField, MenuItem, Select } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import { ExpandMore } from '@mui/icons-material';
import AddMemberStyles from './AddMemberStyles';

const AddMemberDrawer = ({ open, onClose, onAddMember }) => {
  const [memberData, setMemberData] = React.useState({
    name: '',
    email: '',
    dateOfJoining: '',
    department: '',
    designation: '',
    role: '',
    reportingTo: '',
    status: 'Active', 
  });

  // State to hold all added members
  const [addedMembers, setAddedMembers] = React.useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMemberData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(value);
  };

  const handleAddMember = () => {
    if (onAddMember) {
      // Add the new member to the array
      const newMember = { ...memberData };
      const updatedMembers = [...addedMembers, newMember]; // Create a new array with the added member

      setAddedMembers(updatedMembers); // Update the added members state

      // Log the updated array of added members
      console.log(updatedMembers);

      onAddMember(newMember);
      setMemberData({ name: '', email: '', dateOfJoining: '', department: '', designation: '', role: '', reportingTo: '', status: 'Active' });
      onClose();
    }
  };

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box sx={{ width: 370, backgroundColor: "white" }}>
        <Box sx={AddMemberStyles.rootStyle}>
          <Box sx={{ ...AddMemberStyles.headerContainer, padding: '1px 0' }}>
            <Typography sx={AddMemberStyles.header}>Add Member</Typography>
            <Divider sx={AddMemberStyles.divider} />
          </Box>
          <Box sx={AddMemberStyles.container}>
            <Box sx={AddMemberStyles.body}>
              <Box sx={{ ml: "20px", mt: "8px", mb: "5px" }}>
                <Typography sx={AddMemberStyles.subHeader}>Name</Typography>
                <TextField
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={memberData.name}
                  onChange={handleInputChange}
                  sx={AddMemberStyles.textField}
                  fullWidth
                />
              </Box>

              <Box sx={{ ml: "20px", mt: "8px", mb: "5px" }}>
                <Typography sx={AddMemberStyles.subHeader}>Email</Typography>
                <TextField
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={memberData.email}
                  onChange={handleInputChange}
                  sx={AddMemberStyles.textField}
                  fullWidth
                />
              </Box>

              <Box sx={{ ml: "20px", mt: "8px", mb: "5px" }}>
                <Typography sx={AddMemberStyles.subHeader}>Date of Joining</Typography>
                <TextField
                  type="date"
                  name="dateOfJoining"
                  value={memberData.dateOfJoining}
                  onChange={handleInputChange}
                  sx={AddMemberStyles.textField}
                  InputLabelProps={{ shrink: true }}
                  fullWidth
                />
              </Box>

              <Box sx={{ ml: "20px", mt: "8px", mb: "5px" }}>
                <Typography sx={AddMemberStyles.subHeader}>Department</Typography>
                <TextField
                  type="text"
                  name="department"
                  placeholder="Department"
                  value={memberData.department}
                  onChange={handleInputChange}
                  sx={AddMemberStyles.textField}
                  fullWidth
                />
              </Box>

              <Box sx={{ ml: "20px", mt: "8px", mb: "5px" }}>
                <Typography sx={AddMemberStyles.subHeader}>Designation</Typography>
                <Select
                  name="designation"
                  value={memberData.designation}
                  onChange={handleInputChange}
                  IconComponent={ExpandMore}
                  displayEmpty
                  sx={{ height: "38px", fontSize: "14px", backgroundColor: "#FFFFFF", width: '100%' }}
                >
                  <MenuItem value="" disabled>Select</MenuItem>
                  <MenuItem value="Visual Designer">Visual Designer</MenuItem>
                  <MenuItem value="Full Stack Developer">Full Stack Developer</MenuItem>
                  <MenuItem value="Digital Marketer">Digital Marketer</MenuItem>
                </Select>
              </Box>

              <Box sx={{ ml: "20px", mt: "8px", mb: "5px" }}>
                <Typography sx={AddMemberStyles.subHeader}>Role</Typography>
                <Select
                  name="role"
                  value={memberData.role}
                  onChange={handleInputChange}
                  IconComponent={ExpandMore}
                  displayEmpty
                  sx={{ height: "38px", fontSize: "14px", backgroundColor: "#FFFFFF", width: '100%' }}
                >
                  <MenuItem value="" disabled>Select</MenuItem>
                  <MenuItem value="Manager">Manager</MenuItem>
                  <MenuItem value="Employee">Employee</MenuItem>
                  <MenuItem value="Admin">Admin</MenuItem>
                </Select>
              </Box>

              <Box sx={{ ml: "20px", mt: "8px", mb: "5px" }}>
                <Typography sx={AddMemberStyles.subHeader}>Reporting to</Typography>
                <Select
                  name="reportingTo"
                  value={memberData.reportingTo}
                  onChange={handleInputChange}
                  IconComponent={ExpandMore}
                  displayEmpty
                  sx={{ height: "38px", fontSize: "14px", backgroundColor: "#FFFFFF", width: '100%' }}
                >
                  <MenuItem value="" disabled>Select</MenuItem>
                  <MenuItem value="Steven">Steven</MenuItem>
                  <MenuItem value="Alicia Dsouza">Alicia Dsouza</MenuItem>
                  <MenuItem value="Cheng Shan">Cheng Shan</MenuItem>
                </Select>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-around', padding: '17px', gap: "10px" ,marginTop:'rem'}}>
              <Button variant="contained" onClick={handleAddMember} sx={{ width: "50%", color: '#FFFFFF' }}>Add Member</Button>
              <Button variant="outlined" onClick={onClose} sx={{ width: "50%" }}>Cancel</Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
};

export default AddMemberDrawer;
