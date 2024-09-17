import React from 'react';
import portfolioArray from '../content/portoflio.json';
import ProjectComponent from '../components/ProjectComponent';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const FixedSizeContainer = styled('div')({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -40%)',
    width: '100%', 
    height: '80vh',
    overflow: 'hidden', 
    display: 'flex',
    flexDirection: 'column',
});

const ScrollableContent = styled('div')({
    overflowY: 'auto',
    flex: 1,
    padding: '0px',
    alignItems: 'center', 
    textAlign: 'center',
    '&::-webkit-scrollbar': {
        display: 'none'
    },
    '-ms-overflow-style': 'none',  
    'scrollbarWidth': 'none',  
});

function Portfolio() {
    return (
        <FixedSizeContainer>
            <ScrollableContent>
                <Typography variant="h5" component="div" sx={{ fontWeight: 300, marginBottom: '40px', color: 'white' }}>
                    Programming Projects
                </Typography>
                <Box sx={{ flexGrow: 1, marginBottom: '40px' }}>
                    <Grid container spacing={6} justifyContent="center">
                        {portfolioArray
                            .filter(portfolio => portfolio.type === "Code")
                            .map((portfolio, index) => (
                                <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                                    <ProjectComponent project={portfolio} />
                                </Grid>
                            ))
                        }
                    </Grid>
                </Box>
                <Typography variant="h5" component="div" sx={{ fontWeight: 300, marginBottom: '40px', color: 'white' }}>
                    Others 
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 300, color: 'white' }}>
                    Coming Soon!
                </Typography>
            </ScrollableContent>
        </FixedSizeContainer>
    );
}

export default Portfolio;