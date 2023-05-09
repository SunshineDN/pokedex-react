const handleChangeID = (id) => {
  id = id.toString();
  if (id.length === 1) {
    return `00${id}`;
  } else if (id.length === 2) {
    return `0${id}`;
  } else {
    return id;
  }
};

export default handleChangeID;