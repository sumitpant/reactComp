import React from 'react'
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';


const Shimmer = () => {
    const arr = [1, 2, 3, 4, 5];
    return (
        <div style={{display:'flex',gap:'0.5em',flexWrap:'wrap'}}>
            {arr.map(() => <Stack spacing={1}>
                <Skeleton variant="rectangular" width={300} height={150} />
            </Stack>
            )}
        </div>
    )
}

export default Shimmer