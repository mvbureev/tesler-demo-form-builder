import React, {
  useState,
  useCallback,
  useEffect,
} from 'react';
import PropTypes from 'prop-types';
import { MuiForm5 as Form } from '@rjsf/material-ui';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import WrapperModal from './WrapperModal';

import uuid from '../utils/uuid';
import handleSubmitModalNewField from '../utils/handleSubmitModalNewField';

export default function ModalNewField({
  formBuilder,
  uiSchema,
  addItemForm,
  prefix = '',
}) {
  const [formId, setFormId] = useState(uuid());
  // FIXME: не сохраняет
  const [savedFormData, setSavedFormData] = useState(JSON.parse(localStorage.getItem('savedFormData')));

  useEffect(() => {
    setSavedFormData(JSON.parse(localStorage.getItem('savedFormData')))
  }, []);

  const onSubmit = useCallback(({ formData, ...restFormData }) => {
    localStorage.removeItem('savedFormData');
    console.log({ formData, ...restFormData })
    const newProp = handleSubmitModalNewField(formData, prefix);
    addItemForm(newProp);
  }, [addItemForm, prefix]);

  const onReset = useCallback(() => {
    localStorage.removeItem('savedFormData');
    setFormId(uuid());
  }, []);

  const onChange = useCallback(({ formData }) => {
    localStorage.setItem('savedFormData', JSON.stringify(formData));
  }, []);

  return (
    <WrapperModal txtBtn={<AddRoundedIcon />} txtTitle="">
      <Form
        key={formId}
        formData={savedFormData || undefined}
        schema={formBuilder}
        uiSchema={uiSchema}
        onSubmit={onSubmit}
        onChange={onChange}
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
            onClick={onReset}
          >
            Сбросить
          </Button>
        </Grid>
      </Form>
    </WrapperModal>
  );
}

ModalNewField.propTypes = {
  formBuilder: PropTypes.objectOf(Object),
  uiSchema: PropTypes.objectOf(Object),
  addItemForm: PropTypes.func,
  prefix: PropTypes.string,
}

ModalNewField.defaultProps = {
  formBuilder: null,
  uiSchema: null,
  addItemForm: () => {},
  prefix: '',
}
