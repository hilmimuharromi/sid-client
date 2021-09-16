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


export {
    SetFabric,
    SetCustomize,
    SetMeasurement
}