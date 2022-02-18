import { Form, FormGroup, FormLabel, FormControl, Container, Row, Col } from "react-bootstrap";
import Header from "../../layout/header/Header";

function Encomendas () {

    return (
        <>
            <Header/>
            <Container id="veiculos">
                <Row>
                    <Col xs={4}>
                        <Form>
                            <FormGroup className="mb-3 mt-5">
                                <FormLabel className="text-Dark fw-bold">ID</FormLabel>
                                <FormControl className="rounded border-dark" type="id" placeholder="Digite o ID do veículo" />
                            </FormGroup>
                            <FormGroup className="mb-3">
                                <FormLabel className="text-Dark fw-bold">Motorista</FormLabel>
                                <FormControl className="rounded border-dark" type="name" placeholder="Digite o nome do motorista"/>
                            </FormGroup>
                            <FormGroup className="mb-3">
                                <FormLabel className="text-Dark fw-bold">Horário de Saída</FormLabel>
                                <FormControl className="rounded border-dark" type="hour" placeholder="Digite o horário de saída do veículo"/>
                            </FormGroup>
                            <FormGroup className="mb-3">
                                <FormLabel className="text-Dark fw-bold">Destino</FormLabel>
                                <FormControl className="rounded border-dark" type="nome" placeholder="Digite o nome do motorista"/>
                            </FormGroup>
                            <FormGroup className="mb-3">
                                <FormLabel className="text-Dark fw-bold">Obs</FormLabel>
                                <FormControl className="rounded border-dark" type="nome" placeholder="Escreva alguma observação"/>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Encomendas;