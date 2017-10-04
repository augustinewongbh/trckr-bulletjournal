import { Button } from "semantic-ui-react";

const ShowTodo = props =>
  <div className="displaytodo">
    {props.todos.length > 0 &&
      props.todos.map((res, idx) =>
        <div key={res.key}>
          <h1 onClick={() => props.toggleTodo(res.key)}>
            {res.task}
          </h1>
          <p>
            {res.completed ? "completed" : "not completed"}
          </p>
          <Button onClick={() => props.handleRemove(res.key)}>TrashIcon</Button>
        </div>
      )}
    <style jsx>{`
      .displaytodo {
        width: 85%;
        height: 85%;
        background-color: whitesmoke;
        border: 1px solid black;
        padding: 5px 10px;
        display: flex;
        flex-direction: column;

        box-shadow: 0px 10px 5px -4px dimgrey;
        overflow: hidden;
        text-align: center;
      }
      .displaytodo div h1 {
        cursor: pointer;
      }
    `}</style>
  </div>;

export default ShowTodo;
