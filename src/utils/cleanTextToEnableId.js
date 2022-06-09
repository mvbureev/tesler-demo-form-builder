const from = 'ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç¿?';
const to = 'AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc__';
const mapping = {};

[...from].forEach((ch, index) => {
  mapping[from.charAt(index)] = to.charAt(index)
})

const cleanTextToEnableId = (str) => {
  const ret = [];

  [...str].forEach((ch, index) => {
    const c = str.charAt(index);

    const haveOwn = Object.prototype.hasOwnProperty.call(mapping, str.charAt(index));
    if (haveOwn) {
      ret.push(mapping[c]);
    } else {
      ret.push(c);
    }
  })

  return ret.join('');
};

export default cleanTextToEnableId;
