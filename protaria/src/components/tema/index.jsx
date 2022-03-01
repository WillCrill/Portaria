import { ButtonGroup, Button} from "react-bootstrap";

const Tema = () => {


    return (
        <>
            <ButtonGroup className="ms-5 mt-3">
                <Button className="bg-light text-dark rounded-pill-start border-dark fw-bold" size="sm">Light</Button>
                <Button className="bg-dark text-light rounded-pill-end border-light fw-bold" size="sm">Dark</Button>
            </ButtonGroup>
        </>
    )
};

export default Tema;