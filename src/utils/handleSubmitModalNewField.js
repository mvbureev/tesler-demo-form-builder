import cleanTextToEnableId from './cleanTextToEnableId';

const handleSubmitModalNewField = (formData, prefix) => {
  const newProp = { jsonSchema: {}, uiSchema: {} };
  const newFormData = formData;

  newProp.jsonSchema.title = newFormData.title;

  if (newFormData.auto_id === true) {
    newFormData.id = `${prefix + newFormData.title.toLowerCase().replace(/ /g, '_')}_id`;
    newFormData.id = cleanTextToEnableId(newFormData.id);
  }
  newProp.jsonSchema.id = newFormData.id;
  if (typeof newFormData.description !== 'undefined') {
    newProp.uiSchema[newFormData.id] = { 'ui:help': newFormData.description };
  }

  if (newFormData.required) {
    newProp.jsonSchema.isRequired = newFormData.required;
  }

  switch (newFormData.fieldType) {
    case 'Input':
      newProp.jsonSchema.type = 'string';
      break;
    case 'Select':
      newProp.jsonSchema.type = 'string';
      newProp.jsonSchema.enum = newFormData.options;
      newProp.uiSchema[newFormData.id] = {
        ...newProp.uiSchema[newFormData.id],
        ...{ 'ui:widget': 'select' },
      };
      break;
    case 'CheckBox':
      newProp.jsonSchema.type = 'boolean';
      break;
    case 'Radio buttons':
      newProp.jsonSchema.type = 'boolean';
      newProp.uiSchema[newFormData.id] = {
        ...newProp.uiSchema[newFormData.id],
        ...{ 'ui:widget': 'radio' },
      };
      break;
    case 'File':
      newProp.jsonSchema.type = 'string';
      newProp.jsonSchema.format = 'data-url';
      newProp.uiSchema[newFormData.id] = {
        ...newProp.uiSchema[newFormData.id],
        ...{ 'ui:options': { accept: newFormData.enableFiles } },
      };
      break;
    case 'Date':
      newProp.jsonSchema.type = 'string';
      newProp.jsonSchema.format = 'date';
      break;
    default:
      break;
  }

  if (newFormData.sections) {
    newProp.jsonSchema.sections = newFormData.sections;
  }

  return newProp;
};

export default handleSubmitModalNewField;
