// //importo i libri dal file json
// import { Col, Container, Row } from "react-bootstrap";
// import libri from "../data/fantasy.json";

// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";

// const AllTheBooks = () => {
//   return (
//     <Container className="text-start">
//       <h3 className="text-warning mt-2">Fantasy</h3>
//       <Row className="g-3 mt-2 justify-content-center">
//         {libri.map((libro) => {
//           return (
//             <Col sm="6" md="4">
//               <Card key={libro.asin} className="bg-dark border-warning h-100">
//                 <Card.Img
//                   className="img-fluid border-bottom border-warning"
//                   variant="top"
//                   src={libro.img}
//                   alt={libro.title + " cover"}
//                 />
//                 <Card.Body className="text-warning flex-grow-1">
//                   <Card.Title className="text-truncate">
//                     {libro.title}
//                   </Card.Title>
//                   <Card.Text>{libro.price} €</Card.Text>
//                   <Button variant="warning">Aggiungi al carrello</Button>
//                 </Card.Body>
//               </Card>
//             </Col>
//           );
//         })}
//       </Row>
//     </Container>
//   );
// };

// export default AllTheBooks;
