import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
// import {Form as FormBS} from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { FloatingLabel, Image } from "react-bootstrap";
import { Formik, Field, Form} from 'formik';
import Header from './components/Header/Header';

export default function App() {

  return (
          <div>
            <div className="imgContainer">
            <Image src="https://12c6c18f49b654b5531d-0e75373fe5b6bfcd6c0416c6717bdbd4.ssl.cf1.rackcdn.com/thermador-black-desktop.png" fluid/>
            </div>
            <Header title="Thermador Design Council Application"/>
            <h2>What is the Thermador Design Council?</h2>
            <p>The Thermador Design Council is an industry forum where interior designers are trade professionals are trusted to provide insights that help
              Thermador create an exceptional design and consumer experience--and ultimately help shape the Thermador brand of tomorrow.
            </p>
            <h2>Appointed Design Council Members will:</h2>
            <ul>
              <div>
              <li>Share knowledge, best practices and consumer insights</li>
              <li>Discuss the types of challenges that design professionals face during the kitchen design process</li>
              </div>
              <div>
              <li>Express ideas and share new trends and design perspectives</li>
              <li>Inform product development and design</li>
              <li>Commit to a 3-year term</li>

              </div>
            </ul>
            <p>The Thermador Industrial Design, Product Marketing and Brand Management teams take the opinioins, ideas and knowledge of our Design Council Members
              very seriously and we foster an open, hones and transparent enviornment.
            </p>
            <p>If you would like to be part of this exceptional movement, please complete and return the below questionnaire. Application period closed August 31, 
              2023</p>
            <p><i>Note: All fields required. [Open text fields]</i></p>


          <Formik
              initialValues={{ }}
              onSubmit={(values, { setSubmitting }) => {
                console.log(values);
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 1000);
              }}
              >
              {({ isSubmitting }) => (
                <Form>
                    <Row className="mb-3">
                      <Col>
                        <div className="form-group">
                            <FloatingLabel
                                  controlId="First Name"
                                  label="First Name*"
                                  htmlFor="Q1"
                                  >
                                <Field name="Q1" className="form-control" type="text" required placeholder="First Name*"/>
                            </FloatingLabel>
                        </div>
                      </Col>
                      <Col>
                      <div className="form-group">
                            <FloatingLabel
                                  controlId="Last Name"
                                  label="Last Name*"
                                  htmlFor="Q2"
                                  >
                                <Field name="Q2" className="form-control" type="text" required placeholder="Last Name*"/>
                            </FloatingLabel>
                        </div>
                      </Col>
                    </Row>
                    
                    <Row className="mb-3">
                      <div className='form-group'>
                        <FloatingLabel
                          controlId="floatingSelectGrid"
                          label="Business Name*"
                          htmlFor="Q3"
                          >
                            <Field name="Q3" className="form-control" required type="text" placeholder="Business Name" />
                        </FloatingLabel>
                          </div>
                    </Row>
                      
  
                    <Row className="mb-3"> 
                      <Col>
                        <div className="form-group">
                          <FloatingLabel
                          controlId="formGridFormEmail"
                          label="Email*"
                          htmlFor="Q4"
                          >
                                <Field name="Q4" className="form-control" required type="email" placeholder="Email*"/>
                          </FloatingLabel>
                        </div>
                      </Col>
                      <Col>
                        <div className="form-group">
                          <FloatingLabel
                          controlId="formGridFormEmail"
                          label="Phone Number*"
                          htmlFor="Q5"
                          >
                                <Field name="Q5" className="form-control" required type="tel" placeholder="PhoneNumber*"/>
                          </FloatingLabel>
                        </div>
                      </Col>
                  </Row>

                  <Row className="mb-3"> 
                      <Col>
                        <div className="form-group">
                          <FloatingLabel
                          controlId="formGridFormEmail"
                          label="City*"
                          htmlFor="Q6"
                          >
                                <Field name="Q6" className="form-control" required type="text" placeholder="City*"/>
                          </FloatingLabel>
                        </div>
                      </Col>
                      <Col>
                        <div className="form-group">
                          <FloatingLabel
                          controlId="formGridFormEmail"
                          label="State*"
                          htmlFor="Q7"
                          >
                                <Field name="Q7" className="form-control" required type="text" placeholder="State"/>
                          </FloatingLabel>
                        </div>
                      </Col>
                      <Col>
                            
                        <div className="form-group">
                          <FloatingLabel
                          controlId="formGridFormEmail"
                          label="Zip Code*"
                          htmlFor="Q8"
                          >
                                <Field name="Q8" className="form-control" required type="number" placeholder="Zip*"/>
                          </FloatingLabel>
                        </div>
                      </Col>
                  </Row>

                  <Row className="mb-3"> 
                      <Col>
                        <div className="form-group">
                          <FloatingLabel
                          controlId="formGridFormEmail"
                          label="Instagram Handle*"
                          htmlFor="Q9"
                          >
                                <Field name="Q9" className="form-control" required type="text" placeholder="Instagram Handle*"/>
                          </FloatingLabel>
                        </div>
                      </Col>
                      <Col>
                        <div className="form-group">
                          <FloatingLabel
                          controlId="formGridFormEmail"
                          label="Facebook Page*"
                          htmlFor="Q10"
                          >
                                <Field name="Q10" className="form-control" required type="text" placeholder="Facebook Page*"/>
                          </FloatingLabel>
                        </div>
                      </Col>
                  </Row>

                  <Row className="mb-3">
                      <div className='form-group'>
                        <FloatingLabel
                          controlId="floatingSelectGrid"
                          label="Website*"
                          htmlfor="Q11"
                          >
                            <Field name="Q11" className="form-control" required type="url" placeholder="Website" />
                        </FloatingLabel>
                          </div>
                  </Row>

                  <div className="form-group mb-3">
                          <label>Have you served as a Design Council Member previously?</label>
                          <div class="form-check">
                              <Field className="form-check-input" type="radio" name="Q12" id="gridRadios1" value="Yes" />
                              <label className="form-check-label" htmlFor="Q12">Yes</label>
                            </div>
                          <div class="form-check">
                              <Field className="form-check-input" type="radio" name="Q12" id="gridRadios2" value="No" />
                              <label className="form-check-label" htmlFor="Q12">No</label>
                          </div>
                  </div>  
                      <div className="form-group mb-3">
                          <label htmlFor="Q13">How did you hear about the Thermador Design Council?</label>
                          <Field name="Q13" className="form-control" as="textarea" rows={3}/>
                      </div>

                      <div className="form-group mb-3">
                          <label>How many years have you been practicing residential interior design?</label>
                          <Field name="Q14" className="form-control" required type="number" placeholder="0"/>   
                      </div>

                      <div className="form-group mb-3">
                          <label>Do you own your own design firm?</label>
                          <div class="form-check">
                              <Field className="form-check-input" type="radio" name="Q15" id="gridRadios1" value="Yes" />
                              <label className="form-check-label" htmlFor="Q15">Yes</label>
                            </div>
                          <div class="form-check">
                              <Field className="form-check-input" type="radio" name="Q15" id="gridRadios2" value="No" />
                              <label className="form-check-label" htmlFor="Q15">No</label>
                          </div>
                    </div>  
                    {/* Question 16 */}
                    <div className="form-group mb-3">
                      <label>Do you have any design specialties or focuses? Select all that apply.</label>
                      <div class="form-check">
                      <label className="form-check-label" htmlFor="Q16">
                          <Field name="Q16" className="form-check-input" type="checkbox" id="Q16-1" value="Residential Kitchen & Bath" />
                          Residential Kitchen & Bath</label>
                      </div>
                      <div class="form-check">
                      <Field name="Q16" className="form-check-input" type="checkbox" id="Q16-2" value="Remodeling"/>
                        <label className="form-check-label" htmlFor="Q16">Remodeling</label>
                      </div>
                      <div class="form-check">
                      <Field name="Q16" className="form-check-input" type="checkbox" id="Q16-3" value="Sustainable Design"/>
                        <label className="form-check-label" htmlFor="Q16">Sustainable Design</label>
                      </div>
                      <div class="form-check">
                      <Field name="Q16" className="form-check-input" type="checkbox" id="Q16-4" value="Whole Home Design"/>
                        <label className="form-check-label" htmlFor="Q16">Whole Home Design</label>
                      </div>
                      <div class="form-check">
                      <Field name="Q16" className="form-check-input" type="checkbox" id="Q16-5" value="Connect Home Solutions"/>
                        <label className="form-check-label" htmlFor="Q16">Connect Home Solutions</label>
                      </div>
                      <div class="form-check">
                      <Field name="Q16" className="form-check-input" type="checkbox" id="Q16-6" value="Multi-Family/High-Rise Developments"/>
                        <label className="form-check-label" htmlFor="Q16">Multi-Family/High-Rise Developments</label> 
                      </div>
                    </div>

                    <div className="form-group mb-3">
                          <label htmlFor="Q17">Any additional specialties that were not listed above?</label>
                          <Field name="Q17" className="form-control" as="textarea" rows={3}/>
                      </div>
                      <div className="form-group mb-3">
                          <label>Are you a Certied Residential Kitchen & Bath Designer</label>
                          <div class="form-check">
                              <Field className="form-check-input" type="radio" name="Q18" id="gridRadios1" value="Yes" />
                              <label className="form-check-label" htmlFor="Q18">Yes</label>
                            </div>
                          <div class="form-check">
                              <Field className="form-check-input" type="radio" name="Q18" id="gridRadios2" value="No" />
                              <label className="form-check-label" htmlFor="Q18">No</label>
                          </div>
                    </div>

                    <div className="form-group mb-3">
                          <label htmlFor="Q19">Do you have any other certications (LEED,NCDIQ, etc.)?</label>
                          <Field name="Q19" className="form-control" as="textarea" rows={3}/>
                      </div>

                    <div className="form-group mb-3">
                          <label>Do you specify Thermador products?</label>
                          <div class="form-check">
                              <Field className="form-check-input" type="radio" name="Q20" id="gridRadios1" value="Yes" />
                              <label className="form-check-label" htmlFor="Q20">Yes</label>
                            </div>
                          <div class="form-check">
                              <Field className="form-check-input" type="radio" name="Q20" id="gridRadios2" value="No" />
                              <label className="form-check-label" htmlFor="Q20">No</label>
                          </div>
                    </div>  
                        
                    <div className="form-group mb-3">
                          <label>If so, about how many projects per year do you specify Thermador products?</label>
                          <Field name="Q21" className="form-control" required type="number" placeholder="0"/>   
                      </div>
                    
                      <div className="form-group mb-3">
                          <label>Are you currently registered as a Thermador Star® Partner program</label>
                          <div class="form-check">
                              <Field className="form-check-input" type="radio" name="Q22" id="gridRadios1" value="Yes" />
                              <label className="form-check-label" htmlFor="Q22">Yes</label>
                            </div>
                          <div class="form-check">
                              <Field className="form-check-input" type="radio" name="Q22" id="gridRadios2" value="No" />
                              <label className="form-check-label" htmlFor="Q22">No</label>
                          </div>
                    </div>

                    <div className="form-group mb-3">
                          <label htmlFor="Q23">How would you describe your design style and brand?</label>
                          <Field name="Q23" className="form-control" as="textarea" rows={3}/>
                      </div>

                      <div className="form-group mb-3">
                          <label htmlFor="Q24">Tell us why you should be considered for the Thermador Design Council</label>
                          <Field name="Q24" className="form-control" as="textarea" rows={3}/>
                      </div>
  
                      <div className="form-group">
                          <button type="submit" className="btn btn-primary" disabled={isSubmitting}>{isSubmitting ? "Please wait..." : "Submit"}</button>
                    </div>
  
                  </Form>
              )}
          </Formik>
          </div>
  );
}