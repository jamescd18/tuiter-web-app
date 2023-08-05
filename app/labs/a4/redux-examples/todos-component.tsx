import { useSelector } from "react-redux";
import H3 from "@blocks/h3";
import { cn } from "@/lib/utils";

const Todos = () => {
  const todos: any[] = useSelector((state: any) => state.todos);

  return (
    <>
      <H3>Todos</H3>
      <ul className={cn("border rounded-lg m-2")}>
        {todos.map((todo, idx, arr) => (
          <li
            key={idx}
            className={cn("py-2 px-4", idx != arr.length - 1 ? "border-b" : "")}
          >
            {todo.do}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Todos;
