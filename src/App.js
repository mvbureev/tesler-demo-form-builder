import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';

import Preview from './components/Preview';
import Editor from './components/Editor';

import useJsonSchema from './hooks/useJsonSchema'
import useUiSchema from './hooks/useUiSchema'

import defaultSeed from './schemasJson/rootSchema.json';

import { StyledRoot } from './App.styled';
import './App.css';

function App({
  getJsonSchemaForm,
  rootSchema,
  rootSchemaUi,
  prefix,
  customWidgets,
}) {
  const {
    jsonSchema,
    addJsonSchema,
    deleteSchemas,
    analizeFieldsObjects,
  } = useJsonSchema(rootSchema);

  const {
    uiSchema,
    addUiSchema,
    updateUiSchema,
    addOrder,
  } = useUiSchema(rootSchemaUi);

  const widgets = useMemo(() => ({ ...customWidgets }), [customWidgets]);

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

  return (
    <StyledRoot>
      <Preview
        jsonSchema={jsonSchema}
        uiSchema={uiSchema}
        widgets={widgets}
      />

      <Editor
        getJsonSchemaForm={getJsonSchemaForm}
        prefix={prefix}
        addJsonSchema={addJsonSchema}
        analizeFieldsObjects={analizeFieldsObjects}
        addUiSchema={addUiSchema}
        addOrder={addOrder}
        deleteSchemas={deleteSchemas}
        updateUiSchema={updateUiSchema}
        jsonSchema={jsonSchema}
        uiSchema={uiSchema}
      />
    </StyledRoot>
  );
}

App.propTypes = {
  getJsonSchemaForm: PropTypes.func,
  rootSchema: PropTypes.objectOf(Object),
  rootSchemaUi: PropTypes.objectOf(Object),
  prefix: PropTypes.string,
  customWidgets: PropTypes.objectOf(Object),
}

App.defaultProps = {
  getJsonSchemaForm: () => {},
  rootSchema: JSON.parse(JSON.stringify(defaultSeed)),
  rootSchemaUi: null,
  prefix: '',
  customWidgets: null,
}

export default App;
