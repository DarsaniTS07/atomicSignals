import React from 'react';
import { Avatar, Box } from '@mui/material';

// Fixed colors to use for the avatars
const colors = ['#007C32', '#4C9E29', '#F2B824', '#F2EB24', '#DE1010'];

// Component to create five letter avatars using only C, E, D, T, U
const LetterAvatars = () => {
    const letters = ['C', 'E', 'D', 'T', 'U']; // Fixed set of letters

    return (
        <Box display="flex" gap="5px">
            {letters.map((letter, index) => (
                <Avatar
                    key={index}
                    sx={{
                        bgcolor: colors[index], 
                        width: 25,
                        height: 25,
                        fontSize: '0.9rem', 
                    }}
                >
                    {letter}
                </Avatar>
            ))}
        </Box>
    );
};

export default LetterAvatars;
