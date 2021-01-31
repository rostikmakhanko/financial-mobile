import * as remx from 'remx';

const state = remx.state({name: '', surname: ''});

export const setters = remx.setters({
  setName(name: string) {
    state.name = name;
  },
  setSurname(surname: string) {
    state.surname = surname;
  },
});

export const getters = remx.getters({
  getName: () => state.name,
  getSurname: () => state.surname,
});
