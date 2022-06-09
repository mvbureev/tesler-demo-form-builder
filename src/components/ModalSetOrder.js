import React, { useEffect, useState, useCallback } from 'react';
import { MuiForm5 as Form } from '@rjsf/material-ui';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import orderSchema from '../schemasJson/order.json';
import useListNameForm from '../hooks/useListNameForm';
import WrapperModal from './WrapperModal';

import uuid from '../utils/uuid';

function ModalSetOrder({
  jsonSchema,
  uiSchema,
  updateUi,
}) {
  const [formId, setFormId] = useState(uuid());

  const {
    listNameForm,
    transformJsonSchemaToList,
    newList,
  } = useListNameForm();
  const [close, setClose] = useState(null);

  const disabledInputs = useCallback(() => {
    try {
      let index = 0;

      Object.entries(jsonSchema?.properties).forEach(() => {
        document.getElementById(`root_${index}`).disabled = true;
        index += 1;
      });
    } catch (error) {
      console.log('errbClose={cbClose} or', error);
    }
  }, [jsonSchema?.properties]);

  useEffect(() => {
    transformJsonSchemaToList(jsonSchema, uiSchema);
  }, [jsonSchema, transformJsonSchemaToList, uiSchema]);

  const onSubmit = useCallback(() => {
    updateUi(listNameForm);
    setClose(true);
    const timerClose = setTimeout(() => setClose(null), 1000);

    return () => {
      clearTimeout(timerClose);
    };
  }, [listNameForm, updateUi]);

  const onReset = useCallback(() => {
    setFormId(uuid());
  }, []);

  return (
    <WrapperModal
      close={close}
      txtBtn={<ImportExportIcon />}
      txtTitle=""
      onEntered={disabledInputs}
    >
      <div id="orderForm">
        <Form
          key={formId}
          schema={orderSchema}
          onSubmit={onSubmit}
          formData={listNameForm}
          onChange={(e) => newList(e.formData)}
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
      </div>
    </WrapperModal>
  );
}

ModalSetOrder.propTypes = {
  jsonSchema: PropTypes.objectOf(Object),
  uiSchema: PropTypes.objectOf(Object),
  updateUi: PropTypes.func,
}

ModalSetOrder.defaultProps = {
  jsonSchema: null,
  uiSchema: null,
  updateUi: () => {},
}

export default ModalSetOrder;
