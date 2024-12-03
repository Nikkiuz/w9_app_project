import SingleComment from "./SingleComment";

const CommentList = (props) => {
    return props.comments.map((comment, i) => {
      return <SingleComment key={i} singleFeed={comment.comment} />;
    });
  }


export default CommentList;
