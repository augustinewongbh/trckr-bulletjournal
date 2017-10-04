import { Modal, Button, Header, Container } from "semantic-ui-react";
import GoalsEdit from "./GoalsEdit";
const ShowGoals = props =>
  <div>
    {props.goals.length > 0 &&
      props.goals.map((res, idx) =>
        <div key={res.key}>
          <GoalsModal
            idx={idx}
            res={res}
            handleFormSubmit={props.handleFormSubmit}
            handleDelete={props.handleDelete}
          />
        </div>
      )}
    <style jsx>{``}</style>
  </div>;
//Move GoalsModal to seperate component. Launch when edit button is pressed.
//The ShowGoal component should show full description when clicked. Use Acordion? or Modal? or Cards? Test it out
const GoalsModal = props =>
  <Modal
    trigger={
      <h1>
        {props.res.title}
      </h1>
    }
  >
    <Modal.Header
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around"
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h1>
          {props.res.title}
        </h1>
        <p>
          {props.res.description}
        </p>
      </div>

      <GoalsEdit
        handleFormSubmit={props.handleFormSubmit}
        idx={props.idx}
        res={props.res}
      />
      <Button onClick={() => props.handleDelete(props.res.key)}>Delete</Button>
      {
        //button goes here pass :
        //props.handleFormSubmit
        //props.idx
        //props.res
      }
    </Modal.Header>
    <Modal.Content>
      <Container>
        <ul>
          {props.res.tasks.length > 0 &&
            props.res.tasks.map(
              data =>
                data.length > 0 &&
                <li key={data + Date.now()}>
                  {data}
                </li>
            )}
        </ul>
      </Container>
    </Modal.Content>
  </Modal>;
//Convert the container to a card. then the goalsedit on top corner
export default ShowGoals;
