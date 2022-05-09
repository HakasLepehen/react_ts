import { ITodo } from "../types/data"

interface ITodoItem extends ITodo { };

export const TodoItem: React.FC<ITodoItem> = (props: ITodo) => {
  const { id, title, complete } = props;
  return <div id={id.toString()}>
    <input
      type="checkbox"
      checked={complete}
    />
    {title}
    <button>x</button>
  </div>
}