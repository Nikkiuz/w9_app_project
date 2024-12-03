import { ListGroup } from "react-bootstrap";

const SingleComment = (props) => {
  return (
    <ListGroup variant="dark">
      <ListGroup.Item variant="dark" className="text-warning bg-dark">
        {props.singleFeed}
      </ListGroup.Item>
    </ListGroup>
  );
};

export default SingleComment;
