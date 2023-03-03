import { createSlice } from '@reduxjs/toolkit';

const contactsFormInitialState = {
  addForm: false,
  showContacts: true,
  editContact: null,
};

const contactsFormSlice = createSlice({
  name: 'contactsForm',
  initialState: contactsFormInitialState,
  reducers: {
    addContactsForm(state, action) {
      state.addForm = action.payload;
    },
    showEditingForm(state, action) {
      state.editContact = action.payload;
    },
    showContactsList(state, action) {
      state.showContacts = action.payload;
    },
  },
});

export const { addContactsForm, showContactsList, showEditingForm } =
  contactsFormSlice.actions;
export const contactsFormReducer = contactsFormSlice.reducer;
