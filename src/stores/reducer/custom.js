const initialState = {
    data: [],
}

const CustomReducer = (state = initialState, action)  => {

    if(action.type === "SET_FABRIC") {
        const {product} = action.params
        let newData = []
        if(state.data.length === 0){
            newData.push({
                product: product,
		        fabric: action.payload,
            })
        } else {
            const found = state.data.find((item) => item.product === product)

            if(!found) {
                newData = state.data
                newData.push({
                    product: product,
                    fabric: action.payload,
                })
            } else {
                newData = state.data.map((item) => {
                    if(item.product === product) {
                        item.fabric = action.payload
                    } 
                    return item
                })

            }
        }
        console.log(newData, 'new dataaa')
        return {
            ...state,
            data: newData
        }
    } else if (action.type === "SET_CUSTOMIZE"){
        const {product} = action.params
        let newStateData = []
        
        if(state.data.length === 0){
            newStateData.push({
                product: product,
		        customize: [action.payload],
            })
        } else {
            const found = state.data.find((item) => item.product === product)
            if(!found) {
                newStateData = state.data
                newStateData.push({
                    product: product,
                    customize: [action.payload],
                })
            } else {
                newStateData = state.data.map((p) => {
                    if(p.product === product) {
                        if(p.customize.length === 0) {
                            p.customize = [action.payload]
                        } else {
                            const foundCustomize = p.customize.find((c) => c.name === action.payload.name)
                            let newCustomize = p.customize
                            if(!foundCustomize) {
                                newCustomize.push(action.payload)
                            } else {
                                newCustomize = p.customize.map((c) => {
                                    if(c.name === action.payload.name) {
                                        c.option = action.payload.option
                                        c.image = action.payload.image
                                    } else {
                                        
                                    }
                                    return c
                                })
                            }

                            p.customize = newCustomize

                        }
                        return p   
                    } else {
                        return p
                    }
                })
                
            }
        }

        console.log('customize ===>', newStateData)


        return {
            ...state,
            data: newStateData
        }

    }

    return state
}

export default CustomReducer