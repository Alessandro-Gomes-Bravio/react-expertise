const CreateToDoItem = ({ textInput, setTextInput, todo, settodo }) => {

    const UserInputHandler = (e) => {
        setTextInput(e.target.value)
    }

    const submitMessageHandler = (e) => {
        e.preventDefault();

        settodo([...todo, textInput])
        setTextInput('');
    }

    return ( 
        <form action="">
            <textarea value={textInput}cols="50" rows="5" onChange={UserInputHandler}></textarea>
            <button onClick={submitMessageHandler}>add</button>
        </form>
     );
}
 
export default CreateToDoItem;