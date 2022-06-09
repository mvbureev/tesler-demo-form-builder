import React, {
  useState,
  useEffect,
  useCallback,
} from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import {
  StyledMuiDialogContent,
  StyledIconButton,
  StyledMuiDialogTitle,
} from './WrapperModal.styled';

function DialogTitle({
  children,
  onClose,
  ...props
}) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <StyledMuiDialogTitle {...props}>
      <Typography>{children}</Typography>
      {onClose ? (
        <StyledIconButton
          aria-label="close"
          onClick={onClose}
        >
          <CloseIcon />
        </StyledIconButton>
      ) : null}
    </StyledMuiDialogTitle>
  )
}

DialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func,
}

DialogTitle.defaultProps = {
  children: null,
  onClose: () => {},
}

export default function WrapperModal({
  close = null,
  onEntered = null,
  txtBtn,
  children,
  // txtTitle
  // ...props
}) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  useEffect(() => {
    if (close !== null) {
      handleClose();
    }
  }, [close, handleClose]);

  return (
    <div style={{ display: 'contents' }}>
      <Button
        id="btmopen_form"
        variant="contained"
        color="primary"
        onClick={handleClickOpen}
      >
        {txtBtn}
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        TransitionProps={{ onEntered }}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {/* txtTitle */}
        </DialogTitle>
        <StyledMuiDialogContent>{children}</StyledMuiDialogContent>
      </Dialog>
    </div>
  );
}

WrapperModal.propTypes = {
  close: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf([null]),
  ]),
  onEntered: PropTypes.func,
  txtBtn: PropTypes.node,
  children: PropTypes.node,
}

WrapperModal.defaultProps = {
  close: null,
  onEntered: null,
  txtBtn: null,
  children: null,
}
