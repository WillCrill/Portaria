import { FormLabel, FormControl } from "react-bootstrap";

function Veiculos () {


    return (
        <div className="container-sm">
            <form className="">
                <FormLabel>ID</FormLabel>
                <FormControl type="id" placeholder="Digite o ID do carro" />
            </form>
        </div>
    )
};

export default Veiculos;