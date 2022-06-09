import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import SaveRoundedIcon from '@mui/icons-material/SaveRounded';

import ModalNewField from '../ModalNewField';
import ModalSetOrder from '../ModalSetOrder';
import ModalNewSection from '../ModalNewSection';
import Paper from '../Paper';

import useFields from '../../hooks/useFields'

import newFields from '../../schemasJson/newFields.json';
import newFieldsUI from '../../schemasJson/newFieldsUI.json';

function Editor({
  getJsonSchemaForm,
  prefix,
  addJsonSchema,
  analizeFieldsObjects,
  addUiSchema,
  addOrder,
  deleteSchemas,
  updateUiSchema,
  jsonSchema,
  uiSchema,
}) {
  const {
    formFields,
    analizeChangeStructureModalFields,
  } = useFields(newFields);

  const validateParams = useCallback((getJsonSchemaFormValidator, prefixLavidator) => {
    if (typeof getJsonSchemaFormValidator !== 'function') {
      // eslint-disable-next-line no-param-reassign
      getJsonSchemaFormValidator = (item) => { console.log(item) };
    }
    if (typeof prefixLavidator !== 'string') {
      prefixLavidator = ''; // eslint-disable-line no-param-reassign
    }
  }, []);

  validateParams(getJsonSchemaForm, prefix);

  const addItemForm = useCallback((item) => {
    addJsonSchema(item.jsonSchema)
    const result = analizeFieldsObjects();
    analizeChangeStructureModalFields(result)
    addUiSchema(item.uiSchema);
    addOrder(item.jsonSchema.id)
  }, [
    addJsonSchema,
    analizeFieldsObjects,
    analizeChangeStructureModalFields,
    addUiSchema,
    addOrder,
  ]);

  const updateUi = useCallback((items) => {
    deleteSchemas(items);
    updateUiSchema(items);
  }, [deleteSchemas, updateUiSchema]);

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={10}>
        <Paper>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={1}>
              <ModalNewField
                formBuilder={formFields}
                uiSchema={newFieldsUI}
                addItemForm={addItemForm}
                updateUi={updateUi}
                prefix={prefix}
              />
            </Grid>
            <Grid item xs={1}>
              <ModalNewSection
                addItemForm={addItemForm}
                prefix={prefix}
              />
            </Grid>
            <Grid item xs={1}>
              <ModalSetOrder
                jsonSchema={jsonSchema}
                uiSchema={uiSchema}
                updateUi={updateUi}
              />
            </Grid>
            <Grid item xs={1}>
              <Button
                onClick={() => getJsonSchemaForm({ jsonSchema, uiSchema })}
                variant="contained"
                color="primary"
              >
                <SaveRoundedIcon />
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}

Editor.propTypes = {
  getJsonSchemaForm: PropTypes.func,
  prefix: PropTypes.string,
  addJsonSchema: PropTypes.func,
  analizeFieldsObjects: PropTypes.func,
  addUiSchema: PropTypes.func,
  addOrder: PropTypes.func,
  deleteSchemas: PropTypes.func,
  updateUiSchema: PropTypes.func,
  jsonSchema: PropTypes.objectOf(Object),
  uiSchema: PropTypes.objectOf(Object),
}

Editor.defaultProps = {
  getJsonSchemaForm: () => {},
  prefix: '',
  addJsonSchema: () => {},
  analizeFieldsObjects: () => {},
  addUiSchema: () => {},
  addOrder: () => {},
  deleteSchemas: () => {},
  updateUiSchema: () => {},
  jsonSchema: null,
  uiSchema: null,
}

export default Editor;
