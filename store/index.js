export const state = () => ({
  data: [],
  headers: [
    {
      text: 'Wine',
      align: 'start',
      sortable: false,
      value: 'name'
    },
    { text: 'name', value: 'name' },
    { text: 'lastname', value: 'lastname' },
    { text: 'E-mail', value: 'manu' },
    { text: 'Password', value: 'Password' }

  ]
})
export const mutations = {
  input (state, { name, lastname, manu, Password }) {
    state.data.push({ name, lastname, manu, Password })
  }
}
export const getters = {
  data (state) {
    return state.data
  }
}
