import { createSelector } from '@reduxjs/toolkit';

export const selectUsers = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilter = state => state.filter;

export const selectFilteredContacts = createSelector(
  [selectUsers, selectFilter],
  (users, query) => {
    return users.filter(user => user.name.toLowerCase().includes(query));
  }
);
