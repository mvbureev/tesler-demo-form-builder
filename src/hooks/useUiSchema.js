import {
  useState,
  useCallback,
  useMemo,
} from 'react';

const useUiSchema = (rootSchemaUi = {}) => {
  const [uiSchema, setUiSchema] = useState(rootSchemaUi);

  const addUiSchema = useCallback((item) => {
    if (item && Object.keys(item).length) {
      setUiSchema((beforeState) => ({ ...beforeState, ...item }));
    }
  }, []);

  const addOrder = useCallback((id) => {
    if (uiSchema['ui:order']) {
      const newUiSchema = { ...uiSchema };
      newUiSchema['ui:order'] = newUiSchema['ui:order'].filter((x) => x !== '*');
      newUiSchema['ui:order'].push(id);
      newUiSchema['ui:order'].push('*');
      setUiSchema((beforeState) => ({ ...beforeState, ...newUiSchema }));
    }
  }, [uiSchema]);

  const deleteUiSchemas = useCallback((idesThatContinue) => {
    const allIds = [];

    Object.entries(uiSchema).forEach(([key]) => {
      allIds.push(uiSchema[key]);
    })

    const idsToDelete = allIds.filter((x) => idesThatContinue.indexOf(x) === -1);

    const newJsonSchema = { ...uiSchema };

    idsToDelete.forEach((prop) => {
      delete newJsonSchema[prop];
    });

    return newJsonSchema;
  }, [uiSchema]);

  const updateUiSchema = useCallback((idesThatContinue) => {
    const filteredUisSchema = deleteUiSchemas(idesThatContinue);

    idesThatContinue.push('*');

    const newUiSchema = { ...filteredUisSchema };

    newUiSchema['ui:order'] = idesThatContinue;

    setUiSchema(newUiSchema);
  }, [deleteUiSchemas]);

  return useMemo(() => ({
    uiSchema,
    addUiSchema,
    updateUiSchema,
    addOrder,
  }), [addOrder, addUiSchema, uiSchema, updateUiSchema]);
};

export default useUiSchema;
