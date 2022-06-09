import React, {
  useCallback,
  useState,
} from 'react';
import PropTypes from 'prop-types';
import { MuiForm5 as Form } from '@rjsf/material-ui';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import PlaylistAddRoundedIcon from '@mui/icons-material/PlaylistAddRounded';
import newSection from '../schemasJson/newSection.json';
import WrapperModal from './WrapperModal';

import uuid from '../utils/uuid';
import handleSubmitModalNewSection from '../utils/handleSubmitModalNewSection';

export default function ModalNewSection({
  addItemForm,
  prefix,
}) {
  const [formId, setFormId] = useState(uuid());

  const onSubmit = useCallback(({ formData }) => {
    const newProp = handleSubmitModalNewSection(formData, prefix);
    addItemForm(newProp);
  }, [addItemForm, prefix]);

  const onReset = useCallback(() => {
    setFormId(uuid());
  }, []);

  return (
    <WrapperModal txtBtn={<PlaylistAddRoundedIcon />} txtTitle="">
      <Form
        key={formId}
        schema={newSection}
        onSubmit={onSubmit}
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          gap={3}
        >
          <Button
            variant="contained"
            color="primary"
            type="submit"
          >
            Сохранить
          </Button>
          <Button
            variant="outlined"
            color="primary"
            type="reset"
            onClick={onReset}
          >
            Сбросить
          </Button>
        </Grid>
      </Form>
    </WrapperModal>
  );
}

ModalNewSection.propTypes = {
  addItemForm: PropTypes.func,
  prefix: PropTypes.string,
}

ModalNewSection.defaultProps = {
  addItemForm: () => {},
  prefix: '',
}
