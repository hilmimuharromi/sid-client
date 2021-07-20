import React from 'react';


const ButtonUsers = (props) => {
    const { user, login, removeUser } = props
    return (
        <>
            {
                !user ?
                    <button
                        style={{ backgroundColor: 'blue', margin: '10px', height: '30px' }}
                        onClick={login}
                    >Login</button> :
                    <button
                        style={{ backgroundColor: 'red', height: '30px' }}
                        onClick={removeUser}
                    >Logout</button>
            }

        </>
    )
}

export default ButtonUsers