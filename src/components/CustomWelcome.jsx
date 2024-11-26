import Alert from "react-bootstrap/Alert";

const CustomWelcome = () => {
  return (
    <Alert variant="warning">
      <Alert.Heading className="fs-1">Welcome to Epic Library!</Alert.Heading>
      <h4>Leggere è un avventura. Trovare i libri, una passeggiata.</h4>
      <hr />
      <p className="mb-0">
        Sei a un click dal tuo prossimo libro - Sfoglia le nostre sezioni!
      </p>
    </Alert>
  );
};

export default CustomWelcome;
