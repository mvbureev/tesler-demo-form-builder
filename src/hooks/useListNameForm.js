import {
  useState,
  useCallback,
  useMemo,
} from 'react';

const useListNameForm = () => {
  const [listNameForm, setListNameForm] = useState(null);

  const transformJsonSchemaToList = useCallback((jsonSchema, uiSchema) => {
    if (uiSchema && typeof uiSchema['ui:order'] !== 'undefined') {
      const result = uiSchema['ui:order'].filter((x) => x !== '*');

      setListNameForm(result);
    } else if (Object.keys(jsonSchema?.properties).length) {
      const justNames = [];

      // eslint-disable-next-line no-unused-vars
      Object.entries(jsonSchema.properties).forEach(([_, value]) => {
        justNames.push(value.id);
      })

      setListNameForm(justNames);
    }
  }, []);

  const newList = useCallback((list) => {
    setListNameForm(list);
  }, []);

  return useMemo(() => ({
    listNameForm,
    transformJsonSchemaToList,
    newList,
  }), [listNameForm, newList, transformJsonSchemaToList]);
};

export default useListNameForm;
