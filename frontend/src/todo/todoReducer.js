const INITIAL_STATE = {
  description: 'Ler livro',
  list: [{
      _id: 1, 
      description: 'Pagar fatura do cartão',
      done: true
    },
      {
      _id: 2, 
      description: 'Reunião equipe',
      done: true
    },
    {
      _id: 3, 
      description: 'Consulta médica',
      done: true
  }]
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'DESCRIPTION_CHANGED':
      return { ...state, description: action.payload}
    default:
      return state
  }
}

