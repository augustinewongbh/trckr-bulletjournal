import Page from "../layouts/main";
import AddTodo from "../components/AddTodo";
import ShowTodos from "../components/ShowTodos";
import DateCont from "../components/DateContainer";
export default () => (
  <Page>
    <div className="cont">
      <DateCont />

      <div className="showtodo">
        <ShowTodos />
      </div>
      <div className="addtodo">
        <AddTodo />
      </div>
      <style jsx>{`
        .cont {
          width: 100%;
          height: 500px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .showtodo {
          margin: auto;
          margin-top: 2em;
        }
        .addtodo {
          margin: auto;
          margin-bottom: 2em;
        }
      `}</style>
    </div>
  </Page>
);
