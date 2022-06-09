import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const StyledPaper = styled(Paper)(({ theme }) => `
  padding: ${theme.spacing(2)};
  text-align: center;
  color: ${theme.palette.text.secondary};
`);

export default StyledPaper;
