import { Button, Container, Row, Col } from "react-bootstrap";
import Veiculos from "../veiculos/Veiculos";

function Main () {


    return (
        <>
            <Container sm className="bg-dark" >
                <Row>
                    <Col >
                        <Button>Vaiculos</Button>
                    </Col>
                    <Col xs={10}>
                        <Button>Encomendas</Button>
                    </Col>
                </Row>
            </Container>
            {/* <div className="container-xxl bg-primary px-5">
                
                <div className="container-sm bg-dark p-2" >
                    <button className="rounded border-top bg-dark mt-2 mx-2 text-light"> Veiculos </button>
                    <button className="rounded border-top bg-dark mt-2 mx-2 text-light"> Encomendas </button>               
                </div>
                <Veiculos/>
            </div> */}
        </>
    )
};

export default Main;