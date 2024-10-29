import styled from '@emotion/styled';
import { SearchOffOutlined, SearchOutlined } from '@mui/icons-material';
import { InputBase } from '@mui/material';
import React from 'react'

const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "white",
    border:"1px solid #CACACA",
    "&:hover": {
      backgroundColor: "white",
    },
    marginRight: theme.spacing(1),
    marginLeft: 0,
    width: "80%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(2),
      width: "auto",
    },
  }));
  
  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 1),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "black",
    "& .MuiInputBase-input": {
      fontFamily: "Poppins, sans-serif",
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(2.5)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "27ch",
      },
      "&::placeholder": {
      fontSize: '0.85rem',  
       },
    },
  }));

const SearchBar = () => {
  return (
    <Search>
                <SearchIconWrapper>
                  <SearchOutlined sx={{color:'#888888'}} />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search by name, email"
                  inputProps={{ "aria-label": "search" }}
                  sx={{
                    
                  }}
                />
              </Search>
  )
}

export default SearchBar