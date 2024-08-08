import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const constactsInitialState = {
  items: [
    { id: nanoid(), username: "Rosie Simpson", number: "459-12-56" },
    { id: nanoid(), username: "Eden Clements", number: "645-17-79" },
  ],
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: constactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
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
      const index = state.items.findIndex(
        (contact) => contact.id === action.payload
      );
      state.items.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
