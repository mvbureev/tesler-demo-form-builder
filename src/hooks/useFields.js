import {
  useState,
  useCallback,
  useMemo,
} from 'react';

const useFields = (structureJsonSchemaOfModalFields) => {
  const [formFields, setFields] = useState(structureJsonSchemaOfModalFields);

  const analizeChangeStructureModalFields = useCallback((result) => {
    const newFields = { ...formFields };

    if (result?.enumKeys?.length > 0) {
      setFields({
        ...newFields,
        properties: {
          ...newFields.properties,
          sections: {
            type: 'string',
            title: 'Раздел, где будет это поле',
            enum: ['root', ...result.enumKeys],
            enumNames: ['Основной раздел', ...result.enumNameKeys],
          },
        },
      });
    } else if (newFields?.properties?.sections) {
      delete newFields.properties.sections;
      setFields({
        ...newFields,
        properties: {
          ...newFields.properties,
          sections: {
            type: 'string',
            title: 'Раздел, где будет это поле',
            enum: ['root', ...result.enumKeys],
            enumNames: ['Основной раздел', ...result.enumNameKeys],
          },
        },
      });
    }
  }, [formFields]);

  return useMemo(() => ({
    formFields,
    analizeChangeStructureModalFields,
  }), [analizeChangeStructureModalFields, formFields]);
};

export default useFields;
