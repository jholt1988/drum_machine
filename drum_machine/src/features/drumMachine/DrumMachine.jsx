import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DrumPad from "../../components/drum-button/DrumPad";
import Display from "../../components/Display/Display";
import Stack from "react-bootstrap/Stack";
//   import "./DrumMachine.css";
export default function DrumMachine() {



    return (
        <div id="drum-machine" className="bg-primary d-flex">
            <Container  className="pad-bank mt-5 border-white" >
                <Row className="mb-5">
                    <Col lg={{ span: 5 }}></Col>
                    <Col>
                        <DrumPad src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" id="heater-1" keyId="Q" />
                    </Col>
                    <Col> <DrumPad src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" id="heater-2" keyId="W" /></Col>
                    <Col> <DrumPad src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" id="heater-3" keyId="E" /></Col>

                </Row>
                <Row className="mb-5">
                    <Col lg={{ span: 5 }}></Col>
                    <Col>
                        <DrumPad src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" id="heater-4" keyId="A" /> </Col>


                    <Col> <DrumPad src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" id="clap" keyId="S" />      </Col>


                    <Col>  <DrumPad src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" id="open-hh" keyId="D" />      </Col>
                </Row>
                <Row>
                    <Col lg={{ span: 5 }}></Col>
                    <Col>
                        <DrumPad src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" id="kick_n_hat" keyId="Z" />      </Col>


                    <Col> <DrumPad src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" id="kick" keyId="X" /> </Col>


                    <Col> <DrumPad src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" id="closed-hh" keyId="C" /> </Col>

               
                </Row>
            </Container> 
            <Container className="mt-5">
                <Row>
                    <Col >
                    <Display />
                    </Col>
                </Row>
                <Row className="mt-5"> 
                    <Stack style={{"color":"white"}}>
                        <h3>MINI</h3>
                        <h3>DRUM KIT</h3>
                        <h6>BY</h6>
                        <h2>J.Alexander</h2>
                    </Stack>
                </Row>
            </Container>
        </div>
    )
}