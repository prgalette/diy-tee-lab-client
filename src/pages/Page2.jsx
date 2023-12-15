import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Page2 = () => {
  return (
    <Container>
      <h1>Page 2</h1>
      <button>
        <Link to="/" variant="danger">
          Go to Homepage
        </Link>
      </button>
    </Container>
  );
};

export default Page2;
