/*
receives props from goals container to process the add goals
*/
import { Form, Button, Header } from "semantic-ui-react";
const AddGoals = props =>
  <div>
    <Form onSubmit={props.handleSubmit}>
      <input
        name="title"
        placeholder="What are your goals?"
        value={props.title}
        onChange={props.onChange}
        required
      />
      <Button type="submit">SendIcon</Button>
    </Form>
    <style jsx>{``}</style>
  </div>;

export default AddGoals;
