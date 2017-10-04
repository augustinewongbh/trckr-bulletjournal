import Page from "../layouts/main";
import AddTodo from "../components/AddTodo";
import ShowTodos from "../components/ShowTodos";

export default () => (
  <Page>
    <div>
      <ShowTodos />
      <AddTodo />
      <style jsx>{`
        .cont {
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  </Page>
);
