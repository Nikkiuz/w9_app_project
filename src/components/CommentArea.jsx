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
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzQ4Nzk1NzA2ZmM4YzAwMTU2Yjg3MTEiLCJpYXQiOjE3MzI4MDI5MDMsImV4cCI6MTczNDAxMjUwM30.Du_pOmyK1rR2H1qWKVvnvxap02VFqbORi74hQHBhwSI",
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
