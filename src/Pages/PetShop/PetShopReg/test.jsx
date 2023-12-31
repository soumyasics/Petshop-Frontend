import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import axios from "axios";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

function TestComponent() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  function myFun() {
    const formData = {
      ownername: "John Doe",
      shopname: "Doe's Electronics",
      email: "johfddfn.doe@example.com",
      password: "hashedPassword123",
      street: "123 Main Street",
      city: "Cityville",
      mobile: 1234567890,
      img: {
        url: "https://example.com/shop-image.jpg",
        alt: "Shop Image",
      },
      district: "Districtville",
      licenceno: "ABC123456",
      regno: "XYZ789012",
      description: "We sell the latest electronics and gadgets.",
      openingtime: "09:00 AM",
      closingtime: "07:00 PM",
      rating: 4.5,
    };

    axios
      .post(
        "http://localhost:4000/petshop_api/shop/shopRegistration",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        console.log("response", res);
        if (res.status === 200) {
          alert("Registration successful");
          setTimeout(() => {
          }, 1500);
        }
      })
      .catch((err) => {
        console.log("error", err);
        alert("Registration Failed");
      });
  }

  return (
    <>
 
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            defaultValue="Mark"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            defaultValue="Otto"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <InputGroup as={Col} md="4">
          <InputGroup hasValidation>
            <Form.Control type="text" placeholder="Username" required />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </InputGroup>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="City" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>State</Form.Label>
          <Form.Control type="text" placeholder="State" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Zip</Form.Label>
          <Form.Control type="text" placeholder="Zip" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <input type="submit" value="submit"  />
    </Form>
        <button onClick={myFun}> req </button>
    </>
  );
}

export default TestComponent;
