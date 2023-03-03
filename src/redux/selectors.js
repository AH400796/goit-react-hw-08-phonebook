export const selectFilter = state => state.filter;

export const selectAddForm = state => state.contactsForm.addForm;

export const selectEditContact = state => state.contactsForm.editContact;

export const selectShowContacts = state => state.contactsForm.showContacts;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUser = state => state.auth.user;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectToken = state => state.auth.token;
