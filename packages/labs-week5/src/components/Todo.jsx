import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

function Todo({ id, name, completed, onToggleCompletion, onDelete }) {
  return (
    <li className="todo stack-small flex items-center space-x-6">
      <div className="c-cb flex items-center">
        <input
          id={id}
          type="checkbox"
          checked={completed}
          onChange={() => onToggleCompletion(id)}
          className="mr-2"
        />
        <label className="todo-label" htmlFor={id}>
          {name}
        </label>
      </div>
      <div className="btn-group">
        <button onClick={() => onDelete(id)}>
          <FontAwesomeIcon icon={faTrashCan} className="mr-2 text-gray-500" />
        </button>
      </div>
    </li>
  );
}

export default Todo;
