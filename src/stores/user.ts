import * as remx from 'remx';

const state = remx.state({name: '', surname: '', email: '', balance: 0});

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
  seBalance(balance: number) {
    state.balance = balance;
  },
});

export const getters = remx.getters({
  getName: () => state.name,
  getSurname: () => state.surname,
  getEmail: () => state.email,
  getBalance: () => state.balance,
});
