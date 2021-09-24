const SetUser = (data) => {
    return {
        type: "SET_USER",
        payload: data
    }
}

const SetDelivery = (data) => {
    return {
        type: "SET_DELIVERY",
        payload: data
    }
}

export {
    SetUser,
    SetDelivery
}