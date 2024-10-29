import {
  Badge,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import SearchBar from "../../atoms/SearchBar";
import FilterIcon from "../../assets/FilterIcon";
import ImportIcon from "../../assets/ImportIcon";
import TableContent from "../Table/TableContent"; // Update import to TableContent
import AddMemberDrawer from "../AddMemberDrawer/AddMemberDrawer";
import { Close } from "@mui/icons-material";
import FilterDrawer from "../FilterDrawer/FilterDrawer";

const Team = () => {
  const [checked, setChecked] = useState(false);
  const [addMemberDrawerOpen, setAddMemberDrawerOpen] = useState(false);
  const [filterDrawerOpen, setFilterDrawerOpen] = useState(false);
  const [members, setMembers] = useState([]);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  const handleAddMember = (newMember) => {
    setMembers((prevMembers) => [...prevMembers, newMember]);
    console.log(newMember); // Log the newly added member
  };

  const toggleAddMemberDrawer = () => {
    setAddMemberDrawerOpen((prevOpen) => !prevOpen);
  };

  const toggleFilterDrawer = () => {
    setFilterDrawerOpen(!filterDrawerOpen);
  };

  return (
    <Box sx={{ backgroundColor: "#F0F0F0", height: "100vh" }}>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        sx={{ paddingTop: "15px" }}
      >
        <Typography sx={{ marginLeft: "3rem", fontSize: "20px" }}>
          Team Members
        </Typography>
        <FormControlLabel
          sx={{ marginLeft: "20.5rem" }}
          control={
            <Checkbox
              checked={checked}
              onChange={handleCheckboxChange}
              color="primary"
              sx={{
                "&.Mui-checked": {
                  color: "primary.main",
                },
                "&.MuiCheckbox-root": {
                  // border: `1px solid ${checked ? "red" : "white"}`,
                  backgroundColor: "transparent",
                },
              }}
            />
          }
          label={
            <Typography sx={{ fontSize: "14px", marginLeft: "-6px" }}>
              Show only my reporters
            </Typography>
          }
        />
        <SearchBar />
        <IconButton onClick={toggleFilterDrawer} sx={{ marginLeft: "10px" }}>
          <Box
            sx={{
              border: "1px solid #49C792",
              backgroundColor: "#49C792",
              padding: "4px 7px",
              borderRadius: "3px",
              display: "flex",
              alignItems: "center",
              height: "26px",
            }}
          >
            <FilterIcon />
          </Box>
        </IconButton>
        <Button
          variant="outlined"
          sx={{ textTransform: "none", height: "35px", marginLeft: "25px" }}
        >
          <ImportIcon />
          Import
        </Button>
        <Button
          variant="contained"
          onClick={toggleAddMemberDrawer}
          sx={{
            textTransform: "none",
            height: "35px",
            color: "#FFFFFF",
            marginLeft: "25px",
          }}
        >
          Add Member
        </Button>
      </Box>
      <Box
        sx={{
          backgroundColor: "#FFFFFF",
          height: "81vh",
          width: "87rem",
          marginInline: "36px",
          marginTop: "26px",
          borderRadius: "7px",
          boxShadow: "none",
        }}
      >
        {/* Pass members state to TableContent */}
        <TableContent rows={members} />
      </Box>
      {addMemberDrawerOpen && (
        <IconButton
          onClick={toggleAddMemberDrawer}
          sx={{
            position: 'absolute',
            top: 10,
            left: 1095,
            zIndex: 2000,
            backgroundColor: '#fff',
            borderRadius: '50%',
            '&:hover': {
              backgroundColor: 'transparent',
            },
          }}
        >
          <Close />
        </IconButton>
      )}
      {filterDrawerOpen && (
        <IconButton
          onClick={toggleFilterDrawer}
          sx={{
            position: 'absolute',
            top: 10,
            left: 1085,
            zIndex: 2000,
            backgroundColor: '#fff',
            borderRadius: '50%',
            '&:hover': {
              backgroundColor: 'transparent',
            },
          }}
        >
          <Close />
        </IconButton>
      )}
      <AddMemberDrawer anchor="right" open={addMemberDrawerOpen} onClose={toggleAddMemberDrawer} onAddMember={handleAddMember} />
      <FilterDrawer anchor="left" open={filterDrawerOpen} onClose={toggleFilterDrawer} />
    </Box>
  );
};

export default Team;
