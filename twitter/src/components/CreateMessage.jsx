const CreateMessage = ({ textInput, setTextInput, message, setMessage }) => {

    const UserInputHandler = (e) => {
        setTextInput(e.target.value)
    }

    const submitMessageHandler = (e) => {
        e.preventDefault();

        setMessage([...message, textInput])
        setTextInput('');
    }

    return ( 
        <form action="">
            <textarea value={textInput}cols="50" rows="5" onChange={UserInputHandler}></textarea>
            <button onClick={submitMessageHandler}>add</button>
        </form>
     );
}
 
export default CreateMessage;