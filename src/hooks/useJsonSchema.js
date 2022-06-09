import {
  useState,
  useCallback,
  useMemo,
} from 'react';
import defaultSeed from '../schemasJson/rootSchema.json';

const useJsonSchema = (
  rootSchema = JSON.parse(JSON.stringify(defaultSeed)),
) => {
  const [jsonSchema, setJsonSchema] = useState(rootSchema);

  const addJsonSchema = useCallback((item) => {
    const newJsonSchema = { ...jsonSchema };

    if (item.sections && item.sections !== 'root') {
      if (newJsonSchema.properties[item.sections].items) {
        // array
        if (!newJsonSchema.definitions) {
          newJsonSchema.definitions = {};
          newJsonSchema.properties[item.sections].items = {
            $ref: `#/definitions/${item.sections}`,
          };
        }
        if (!newJsonSchema.definitions[item.sections]) {
          newJsonSchema.definitions[item.sections] = {
            type: 'object',
            properties: {},
          };
        }
        newJsonSchema.definitions[item.sections].properties[item.id] = item;
        if (item.isRequired) {
          if (!newJsonSchema.definitions[item.sections].required) {
            newJsonSchema.definitions[item.sections].required = [];
          }
          newJsonSchema.definitions[item.sections].required.push(item.id);
        }
      } else {
        // object
        newJsonSchema.properties[item.sections].properties[item.id] = item;

        if (item.isRequired) {
          if (!newJsonSchema.properties[item.sections].required) {
            newJsonSchema.properties[item.sections].required = [];
          }
          newJsonSchema.properties[item.sections].required.push(item.id);
        }
      }
    } else {
      newJsonSchema.properties[item.id] = item;

      if (item.isRequired) {
        if (!newJsonSchema.required) {
          newJsonSchema.required = [];
        }
        newJsonSchema.required.push(item.id);
      }
    }
    setJsonSchema(newJsonSchema);
  }, [jsonSchema]);

  const deleteSchemas = useCallback((idesThatContinue) => {
    const allIds = [];

    // eslint-disable-next-line no-unused-vars
    Object.entries(jsonSchema.properties).forEach(([_, value]) => {
      allIds.push(value.id);
    })

    const idsToDelete = allIds.filter((x) => idesThatContinue.indexOf(x) === -1);

    const newJsonSchema = { ...jsonSchema };
    idsToDelete.forEach((prop) => {
      delete newJsonSchema.properties[prop];
    });

    if (typeof newJsonSchema.required !== 'undefined') {
      newJsonSchema.required = newJsonSchema.required.filter(
        (x) => !idsToDelete.includes(x),
      );

      if (newJsonSchema.required.length === 0) {
        delete newJsonSchema.required;
      }
    }

    setJsonSchema(newJsonSchema);
  }, [jsonSchema]);

  const analizeFieldsObjects = useCallback(() => {
    const enumNameKeys = [];
    const enumKeys = [];

    // eslint-disable-next-line no-unused-vars
    Object.entries(jsonSchema?.properties).forEach(([key, value]) => {
      if (value?.properties || value?.items) {
        enumKeys.push(key);
        enumNameKeys.push(value.title);
      }
    })

    return { enumKeys, enumNameKeys };
  }, [jsonSchema?.properties]);

  return useMemo(() => ({
    jsonSchema,
    addJsonSchema,
    deleteSchemas,
    analizeFieldsObjects,
  }), [jsonSchema, addJsonSchema, deleteSchemas, analizeFieldsObjects])
};

export default useJsonSchema;
