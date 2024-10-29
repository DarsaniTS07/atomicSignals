import * as React from 'react';
import { Typography, Box, Divider, Button, TextField, MenuItem, Select } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import FiltersStyles from "./FilterStyles";
import ButtonData from "./Button.json";
import { ExpandMore } from '@mui/icons-material';

const FilterDrawer = ({ anchor, open, onClose }) => {
  const [active, setActive] = React.useState(null);
  const [activeRole, setActiveRole] = React.useState(null);
  const [selectDropDown, setSelectDropDown] = React.useState("");

  const handleSelect = (index) => {
    setActive(index);
  };
  
  const handleRoleClick = (index) => {
    setActiveRole(index);
  };

  const handleSelectChange = (event) => {
    setSelectDropDown(event.target.value);
  };

  const renderButtons = (buttons) => {
    return buttons.map((button, index) => (
      <Button
        key={index}
        variant="outlined"
        onClick={() => handleSelect(index)}
        sx={{
            textTransform:'none',
          color: "#353448",
          backgroundColor: active === index ? "#EEFBF6" : "transparent",
          border: active === index ? "2px solid #49C792" : "1px solid #EBEBEB",
          fontSize: "14px",
          height: "auto",
          minWidth: 'auto',
          padding: "6px",
          lineHeight: 'normal',
          flex: 'none',
        }}
      >
        {button}
      </Button>
    ));
  };


  return (
    <Drawer anchor={"right"} open={open} onClose={onClose}>
      <Box sx={{ width: 370, padding: 1, backgroundColor: "white" }}>
        <Box sx={FiltersStyles.rootStyle}>
          <Box sx={{ ...FiltersStyles.headerContainer, padding: '1px 0' }}>
            <Typography sx={FiltersStyles.header}>Filters</Typography>
            <Divider sx={FiltersStyles.divider} />
          </Box>
          <Box sx={FiltersStyles.container}>
            <Box sx={FiltersStyles.body}>
              <Typography sx={FiltersStyles.subHeader}>Overall Performance</Typography>
              <Box sx={{ display: 'flex', gap: '10px', maxWidth: '95%', mt: "10px" }}>
              {renderButtons(ButtonData.overAllPerformance.slice(0, 3))}
              </Box>
              <Box sx={{ display: 'flex', gap: '10px', maxWidth: '90%', marginTop: '10px' }}>
              {renderButtons(ButtonData.overAllPerformance.slice(3, 5))}
              </Box>
              <Box sx={{ display: 'flex', gap: '10px', maxWidth: '100%', marginTop: '10px' }}>
              {renderButtons(ButtonData.overAllPerformance.slice(5))}
              </Box>
            </Box>
            <Box sx={{ ml: "20px",mt:'8px',mb:'5px' }}>
              <Typography sx={FiltersStyles.subHeader}>Department</Typography>
          <Select
          value={selectDropDown}
          onChange={handleSelectChange}
          IconComponent={ExpandMore}
          displayEmpty
          sx={{ height: "38px", fontSize: "14px",paddingRight: "7.5rem" , backgroundColor:"#FFFFFF",fontWeight:"400", color:'#C2C1C7',width:'20.5rem'}}
        >
            <MenuItem value="" disabled sx={{fontSize:"13px"}}>
            Select
            </MenuItem>
        </Select>
            </Box>
            <Box sx={{ ml: "20px", mb: "10px" }}>
              <Typography sx={FiltersStyles.subHeader}>Designation</Typography>
          <Select
          value={selectDropDown}
          onChange={handleSelectChange}
          IconComponent={ExpandMore}
          displayEmpty
          sx={{ height: "38px", fontSize: "14px",paddingRight: "7.5rem" , backgroundColor:"#FFFFFF",fontWeight:"400",color:'#C2C1C7',width:'20.5rem'}}
        >
            <MenuItem value="" disabled sx={{fontSize:"13px"}}>
              Select
            </MenuItem>
        </Select>
          
            </Box>
            <Box sx={{ ml: "20px", mb: "10px" }}>
              <Typography sx={FiltersStyles.subHeader}>Reporting to</Typography>
              <TextField
                type="text"
                placeholder="Name"
                sx={FiltersStyles.textField}
              />
            </Box>
            <Box sx={{ ml: "20px", mb: "20px" }}>
              <Typography sx={FiltersStyles.subHeader}>Role</Typography>
              {ButtonData.Role.map((role, idx) => (
                <Button variant="outlined" key={idx}
                  onClick={() => handleRoleClick(idx)}
                  sx={{
                    color: "#353448",
                    backgroundColor: activeRole === idx ? "#EEFBF6" : "transparent",
                    border: activeRole === idx ? "2px solid #49C792" : "1px solid #EBEBEB",
                    fontSize: "14px",
                    height: "auto",
                    minWidth: 'auto',
                    padding: "6px",
                    lineHeight: 'normal',
                    flex: 'none',
                    gap: "10px", mr: "10px",
                    textTransform:'none'
                  }}
                >{role}</Button>
              ))}
            </Box>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-around', padding: '13px', mt: '5.9rem', gap: "10px" }}>
            <Button variant='contained' sx={{ width: "50%",textTransform:'none',color:'#FFFFFF' }}>Apply filter</Button>
            <Button variant='outlined' sx={{ width: "50%",textTransform:'none' }}>Reset</Button>
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
};

export default FilterDrawer;
