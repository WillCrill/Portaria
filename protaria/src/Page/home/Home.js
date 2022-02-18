import { Link } from "react-router-dom";
import { Card, Stack} from "react-bootstrap";
import Tema from "../../components/tema/Tema";



function Home () {


    return (
        <>
            <Tema/>

            <Stack className="m-5 col-md-8 mx-auto ">
                <Stack className="m-5" direction="horizontal" gap={5}>
                    <Card className="btn mx-5 my-4 border-dark bg-dark text-light" style={{ width: '20rem'}}>
                        <Card.Body>
                            <Card.Title>
                                <Link className="text-decoration-none text-light" to="/Veiculos">Veiculos</Link>
                            </Card.Title>
                        </Card.Body>
                    </Card>
                    <Card className="btn mx-5 my-4 border-dark bg-dark text-light" style={{ width: '20rem'}}>
                        <Card.Body>
                        <Card.Title>
                                <Link className="text-decoration-none text-light" to="/Encomendas">Encomendas</Link>
                            </Card.Title>
                        </Card.Body>
                    </Card>
                </Stack>
                <Stack className="m-5" direction="horizontal" gap={5}>
                    <Card className="btn mx-5 my-4 border-dark bg-dark text-light" style={{ width: '20rem'}}>
                        <Card.Body>
                        <Card.Title>
                                <Link className="text-decoration-none text-light" to="/">Pesquisa</Link>
                            </Card.Title>
                        </Card.Body>
                    </Card>
                    <Card className="btn mx-5 my-4 border-dark bg-dark text-light" style={{ width: '20rem'}}>
                        <Card.Body>
                        <Card.Title>
                                <Link className="text-decoration-none text-light" to="/">Algo Mais</Link>
                            </Card.Title>
                        </Card.Body>
                    </Card> 
                </Stack>
            </Stack>
        </>
    )
};

export default Home;