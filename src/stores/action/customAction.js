const SetFabric = (data, params) => {
    
    return {
        type: "SET_FABRIC",
        payload: data,
        params: params
    }
}

const SetCustomize = (data, params) => {
    return {
        type: "SET_CUSTOMIZE",
        payload: data,
        params: params
    }
}

const SetMeasurement = (data, params) => {
    
    return {
        type: "SET_MEASUREMENT",
        payload: data,
        params: params
    }
}


const ResetCustom = (data) => {
    console.log('reset custom', data)
    return {
        type: "RESET_CUSTOM",
        payload: data,
    }

}

export {
    SetFabric,
    SetCustomize,
    SetMeasurement,
    ResetCustom
}