import React from 'react';


const FormLogin = (props) => {
    const { username, setUsername } = props

    return (
        <div>
            <h3>Form Login</h3>
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                }}
            >
                <label for="username">Username:</label>
                <input type="text" name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </form>
        </div>
    )

}

export default FormLogin;