import React from "react";

import { styled } from '@mui/material/styles';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';

import placeholder from '../assets/placeholder.svg';


const Item = styled(Card)(({ theme }) => ({
    width: '100%',
    maxWidth: '300px',
    height: '100%',
    minHeight: '200px',
    borderRadius: 10,
    padding: '20px',
    backgroundColor: 'rgba(0, 0, 0, 0.15)',
    textAlign: 'center',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    '& .MuiTypography-root': {
        fontWeight: 300, 
    },
    
  }));

  const StyledCardContent = styled(CardContent)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    padding: '16px !important', 
});

const StyledChip = styled(Chip)(({ theme }) => ({
    margin: theme.spacing(0.5),
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    color: 'white',
    fontWeight: 300,
    '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
}));


function ProjectComponent({project}) {
    return (
        //bg-white/20 dark:bg-default-100/50 
        <Item>
            <StyledCardContent>
                <Typography variant="h6" component="div">
                    {project.title}
                </Typography>
                <Typography variant="body2" component="div">  
                    {project.description}
                </Typography>
                {/* <Box
                    component="img"
                    sx={{
                        // height: 233,
                        // width: 350,
                        maxHeight: { xs: 233, md: 167 },
                        // maxWidth: { xs: 350, md: 250 },
                    }}
                    alt="The house from the offer."
                    src={placeholder}
                    /> */}
                {project.tags && project.tags.length > 0 && (
                    <div style={{ marginTop: '16px' }}>
                        {project.tags.map((tag, index) => (
                            <StyledChip key={index} label={tag} size="small" />
                        ))}
                    </div>
                )}
            </StyledCardContent>
        </Item>
      );
}

export default ProjectComponent;