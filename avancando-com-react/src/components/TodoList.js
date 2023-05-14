import React from "react";
import TodoListItem from "./TodoListItem";

//Componente de apresentacao -> "stateless" -> nao manipula estados e apenas insere html

//1a forma:
// export default class TodoList extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//         <ul>

//         </ul>
//     );
//   }
// }

//2a forma (deixa mais claro que eh STATELESS)
export const TodoList = (props) => {
  return (
    <ul className="list-group">
      {props.items.map((item, index) => (
        <TodoListItem
          key={index}
          item={item}
          index={index}
          removeFromItems={props.removeFromItems}
        ></TodoListItem>
      ))}
    </ul>
  );
};
