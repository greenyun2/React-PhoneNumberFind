let initialState = {
  contact: [],
  keyWord: '',
}

function reducer(state = initialState, action) {
  const {type, payload} = action;
  switch(type) {
    case "ADD_CONTACT" :
      state.contact.push({
        name: payload.name,
        phone: payload.phone,
      });
      break;
    case "SEARCH_BY_USERNAME" :
      state.keyWord = payload.keyWord;
      break;
    default :
  }
  return {...state}
}

export default reducer;