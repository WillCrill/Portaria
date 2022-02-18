import { Button, ButtonGroup, Stack} from "react-bootstrap";
import { Link } from "react-router-dom";

function Header () {


    return (
        <>
            <Stack className="bg-light" direction="horizontal">
                <Link to="/Veiculos" className="btn bg-dark my-3 ms-3 me-1 fw-bold text-light" size="sm">Veículos</Link>
                <Link to="/Encomendas" className="btn bg-dark my-3 fw-bold text-light" size="sm">Encomendas</Link>
                <Link to="/" className="btn bg-dark my-3 me-1 ms-auto text-light" size="sm">Login</Link>
                <ButtonGroup className="my-3  mx-3">
                    <Button className="bg-light text-dark rounded-pill-start border-dark fw-bold" size="sm">Light</Button>
                    <Button className="bg-dark text-light rounded-pill-end border-light fw-bold" size="sm">Dark</Button>
                </ButtonGroup>
            </Stack>
        </>
    )
};

export default Header;