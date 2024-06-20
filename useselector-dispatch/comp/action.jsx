export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const INC = 'INC'
export const DEC = 'DEC'

export const increment = () =>({
    type : INCREMENT,
   
})

export const decrement = () =>({
    type : DECREMENT,
   
})

export const inc = () =>({
    type : INC
})
export const dec = ()=>({
    type : DEC
})