import { Button, Form, FormCheck, InputGroup } from "react-bootstrap";
import "./NewsLetter.css";
const NewsLetter = () => {
  return (
    <div className="news-letter-container">
      <div>
        <h1>Subscribe to our Newsletter </h1>
        <p>We send e-mails once a month,we never send Spam!</p>
        <div>
          <InputGroup className="mb-3 news-letter-input-group">
            <Form.Control
              placeholder="Your Email here"
              aria-label="Recipfffient's username"
              aria-describedby="basic-addon2"
              id="news-letter-input"
            />
            <Button variant="outline-secondary" id="button-addon2">
              SUBSCRIBE
            </Button>
          </InputGroup>
        </div>
      </div>
    </div>
  );
};
export default NewsLetter;
