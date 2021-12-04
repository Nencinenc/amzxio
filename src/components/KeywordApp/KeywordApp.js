import React from 'react';
import axios from "axios";

function Form() {

    const registerUser = async event => {
        event.preventDefault()

        let inputKeyword = '';
        inputKeyword = event.target['name'].value;
        inputKeyword = inputKeyword.trim();

        if(inputKeyword !== undefined && inputKeyword !== null) {

            const response =
                await axios.get("http://localhost:8082/api/v1/keywords/estimate",
                    { params: {keyword: inputKeyword}})

            console.log(response.data);
        }
    }
    return (
        <form onSubmit={registerUser}>
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" autoComplete="name" required />
            <button type="submit">Register</button>
        </form>
    )
}


const KeywordApp = () => {
    return (
        <>
            <Form />
        </>
    );
}

export default KeywordApp;