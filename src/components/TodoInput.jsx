import { useState } from "react";
import { FaPlusCircle } from "react-icons/fa"

const TodoInput = (props) => {
  const [input, setInput] = useState("");
  const onChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim) {
      props.addTodoProps(input);
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add Todo..."
        value={input}
        onChange={onChange}
      />
      <button type="submit" className="input-submit"><FaPlusCircle /></button>
    </form>
  );
};
export default TodoInput;
