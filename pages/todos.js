import Page from "../layouts/main";
import AddTodo from "../components/containers/AddTodo";
import VisibleTodoList from "../components/containers/VisibleTodoList";

export default () =>
  <Page>
    <div>
      <VisibleTodoList />
      <AddTodo />
      <style jsx>{`
        .cont {
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  </Page>;
