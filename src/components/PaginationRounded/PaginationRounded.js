import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import useStyles from './PaginationRoundedStyle';

export default function PaginationRounded({count,page,onChange}) {
const classes = useStyles();
  return (
    <Stack spacing={2}>
      <Pagination count={count} variant="outlined" page={page} shape="rounded" className={classes.pagination} onChange={onChange} />
    </Stack>
  );
}