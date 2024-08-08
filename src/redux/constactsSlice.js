import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const constactsInitialState = [
  { id: nanoid(), username: "Rosie Simpson", number: "459-12-56" },
  { id: nanoid(), username: "Eden Clements", number: "645-17-79" },
];

const contactsSlice = createSlice({
  name: "contacts",
  initialState: constactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(values) {
        return {
          payload: {
            id: nanoid(),
            username: values.username,
            number: values.number,
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.findIndex((contact) => contact.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
