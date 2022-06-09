import cleanTextToEnableId from './cleanTextToEnableId';

const handleSubmitModalNewSection = (formData, prefix = '') => {
  const newProp = { jsonSchema: {} };
  const newFormData = formData;

  newProp.jsonSchema.title = newFormData.title;
  newProp.jsonSchema.description = newFormData.description;

  if (newFormData.auto_id === true) {
    newFormData.id = `${prefix + newFormData.title.toLowerCase().replace(/ /g, '_')}_id`;
    newFormData.id = cleanTextToEnableId(newFormData.id);
  }
  newProp.jsonSchema.id = newFormData.id;

  if (newFormData.isArray === true) {
    newProp.jsonSchema.type = 'array';
    newProp.jsonSchema.items = {};
  } else {
    newProp.jsonSchema.type = 'object';
    newProp.jsonSchema.properties = {};
  }
  return newProp;
};

export default handleSubmitModalNewSection;
