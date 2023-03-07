import { useForm } from "react-hook-form";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { FloatingLabel } from "react-bootstrap";

export default function App() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridFirstName">
          <FloatingLabel
            controlId="floatingSelectGrid"
            label="First Name*"
          >
            <Form.Control size="sm" required type="text" placeholder="First Name" />
          </FloatingLabel>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridLastName">
          <FloatingLabel
            controlId="formGridLastName"
            label="Last Name*"
          >
            <Form.Control required type="text" placeholder="Last Name" />
          </FloatingLabel>
        </Form.Group>
      </Row>


      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridBusinessName">
          <FloatingLabel
            controlId="floatingSelectGrid"
            label="Business Name*"
          >
            <Form.Control required type="text" placeholder="Business Name" />
          </FloatingLabel>
        </Form.Group>

      </Row>


      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridFormEmail">
          <FloatingLabel
            controlId="formGridFormEmail"
            label="Email*"
          >
            <Form.Control required type="email" placeholder="Email*" />
          </FloatingLabel>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPhoneNumber">
          <FloatingLabel
            controlId="formGridPhoneNumber"
            label="Phone Number*"
          >
            <Form.Control required type="number" placeholder="Phone Number*" />
          </FloatingLabel>
        </Form.Group>
      </Row>


      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridAddress">
          <FloatingLabel
            controlId="formGridAddress"
            label="Address*"
          >
            <Form.Control required type="text" placeholder="Address*" />
          </FloatingLabel>
        </Form.Group>
      </Row>


      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <FloatingLabel
            controlId="formGridCity"
            label="City*"
          >
            <Form.Control required type="text" placeholder="City*" />
          </FloatingLabel>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <FloatingLabel controlId="formGridState" label="State*">
            <Form.Select required aria-label="Floating label select example">
              <option>Please select your state</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </FloatingLabel>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <FloatingLabel
            controlId="formGridZip"
            label="Zip*"
          >
            <Form.Control required type="number" placeholder="Zip*" />
          </FloatingLabel>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridInstagramHandle">
          <FloatingLabel
            controlId="formGridInstagramHandle"
            label="Instagram Handle*"
          >
            <Form.Control required type="text" placeholder="Instagram Handle*" />
          </FloatingLabel>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridFacebook">
          <FloatingLabel
            controlId="formGridFacebook"
            label="Facebook*"
          >
            <Form.Control required type="text" placeholder="Facebook*" />
          </FloatingLabel>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridWebsite">
          <FloatingLabel
            controlId="formGridWebsite"
            label="Website*"
          >
            <Form.Control required type="url" placeholder="Website*" />
          </FloatingLabel>
        </Form.Group>
      </Row>

      <Form.Group>
        <Form.Label>
          Have you served as a Design Council Member previously?
        </Form.Label>
      {['radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label="Yes"
            name="Have you served as a Design Council Member previously?"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="No"
            name="Have you served as a Design Council Member previously?"
            type={type}
            id={`inline-${type}-2`}
          />
        </div>
      ))}
   </Form.Group>

   <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>How did you hear about the Thermador Design Council?</Form.Label>
        <Form.Control as="textarea" rows={3} />
    </Form.Group>

    <Form.Group>
        <Form.Label>
          Are you currently registered as a Thermador Star Partner program?
        </Form.Label>
      {['radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label="Yes"
            name="Are you currently registered as a Thermador Star Partner program?"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="No"
            name="Are you currently registered as a Thermador Star Partner program?"
            type={type}
            id={`inline-${type}-2`}
          />
        </div>
      ))}
   </Form.Group>

    <Form.Group className="mb-3" controlId="How would you describe your design style and brand?">
        <Form.Label>How would you describe your design style and brand?</Form.Label>
        <Form.Control as="textarea" rows={3} />
    </Form.Group>

    <Form.Group className="mb-3" controlId="Tell us why you should be considered for the Thermador Design Council?">
        <Form.Label>Tell us why you should be considered for the Thermador Design Council?</Form.Label>
        <Form.Control as="textarea" rows={3} />
    </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}