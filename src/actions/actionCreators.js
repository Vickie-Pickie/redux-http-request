import {
  ADD_SERVICE,
  CLEAR_FORM_FIELDS,
  REMOVE_SERVICE,
  CHANGE_FORM_FIELD,
  UPDATE_SERVICE,
  SET_FORM_FIELDS,
  SET_FILTER,
} from "./actionTypes";

export function addService(name, price) {
  return {
    type: ADD_SERVICE,
    payload: { name, price },
  }
}

export function removeService(id) {
  return {
    type: REMOVE_SERVICE,
    payload: { id },
  }
}

export function changeServiceField(name, value) {
  return {
    type: CHANGE_FORM_FIELD,
    payload: { name, value },
  }
}

export function cancelChangeServiceField() {
  return {
    type: CLEAR_FORM_FIELDS,
  }
}

export function updateService(id, name, price) {
  return {
    type: UPDATE_SERVICE,
    payload: { id, name, price },
  }
}

export function setFormFields(id, name, price) {
  return {
    type: SET_FORM_FIELDS,
    payload: { id, name, price },
  }
}

export function setFilter(value) {
  return {
    type: SET_FILTER,
    payload: { value },
  }
}
