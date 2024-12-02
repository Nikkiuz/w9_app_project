import { Component } from "react";
import CommentsList from "./CommentsList";

class CommentArea extends Component {
  state = {
    comments: [],
  };

  getComments = () => {
    fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" + this.props.id,
      {
        headers: {
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzQ4NmYwNTA2ZmM4YzAwMTU2Yjg2ZmIiLCJpYXQiOjE3MzI4MDAyNjIsImV4cCI6MTczNDAwOTg2Mn0.LBzHQxm8Ovl76SSc6dJv3F12CSJnOAhnNlzvhQB2oec",
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nel recupero dei file");
        }
      })
      .then((arrayOfComments) => {
        console.log("Commenti esistenti", arrayOfComments);
        this.setState({
          comments: arrayOfComments,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) {
      this.getComments();
    }
  }

  componentDidMount() {
    this.getComments();
  }

  render() {
    return (
      <>
        <h5 className="text-warning text-center mb-3">
          Recensioni degli utenti
        </h5>
        <CommentsList comments={this.state.comments} />
      </>
    );
  }
}

export default CommentArea;
