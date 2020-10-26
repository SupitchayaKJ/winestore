export const state = () => ({
  data: [],
  headers: [
    {
      text: 'Wine',
      align: 'start',
      sortable: false,
      value: 'name'
    },
    { text: 'Barnd', value: 'name' },
    { text: 'Type Wine', value: 'other' },
    { text: 'Price', value: 'bath' },
    { text: 'Alcohol', value: 'Percentage' },
    { text: 'Contry', value: 'Where' },
    { text: 'Palate', value: 'Testing' },
    { text: 'Sold', value: 'Out' }
  ]
})
export const mutations = {
  input (state, { name, other, bath, Percentage, Where, Testing, out }) {
    state.data.push({ name, other, bath, Percentage, Where, Testing, out })
  }
}
export const getters = {
  data (state) {
    return state.data
  }
}
