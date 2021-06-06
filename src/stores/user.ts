import * as remx from 'remx';

const state = remx.state({name: '', surname: '', email: ''});

export const setters = remx.setters({
  setName(name: string) {
    state.name = name;
  },
  setSurname(surname: string) {
    state.surname = surname;
  },
  setEmail(email: string) {
    state.email = email;
  },
});

export const getters = remx.getters({
  getName: () => state.name,
  getSurname: () => state.surname,
  getEmail: () => state.email,
});
