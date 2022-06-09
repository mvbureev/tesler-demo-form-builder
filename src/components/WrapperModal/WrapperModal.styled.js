import { styled } from '@mui/material/styles';
import MuiDialogContent from '@mui/material/DialogContent';
import MuiDialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';

export const StyledMuiDialogTitle = styled(MuiDialogTitle)(({ theme }) => `
  margin: 0;
  padding: ${theme.spacing(2)};
`);

export const StyledIconButton = styled(IconButton)(({ theme }) => `
  /* color: ${theme.palette.grey[500]}; */
`);

export const StyledMuiDialogContent = styled(MuiDialogContent)(({ theme }) => `
  padding: ${theme.spacing(2)};
`);
