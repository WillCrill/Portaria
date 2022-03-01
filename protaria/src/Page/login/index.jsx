import { Form, FormGroup, FormControl, FormLabel, Stack, Button} from "react-bootstrap";
import Tema from "../../components/tema";
import { useState } from "react";
import { Link } from "react-router-dom";


const Login = () => {

    const [login, setLogin] = useState();
    const [senha, setSenha] = useState();

    return (
        <>
            <Tema/>
            <Stack className="bg-dark p-4 rounded-3 col-md-3 mx-auto mt-5">
                <Form>
                    <FormGroup direction="horizontal">
                            <FormLabel className="text-light fw-bold">Login</FormLabel>
                            <FormControl className="mb-4 border-light" type="text" placeholder="Digite seu Login" onChange={(e) => setLogin(e.target.value)}/>

                            <FormLabel className="text-light fw-bold">Senha</FormLabel>
                            <FormControl className="mb-4 border-light" type="password" placeholder="Digite sua senha" onChange={(e) => setSenha(e.target.value)}/>

                            <Link to="./main" type="submit" className="btn bg-light text-dark fw-bold border-light">Entrar</Link>
                    </FormGroup>
                </Form>
            </Stack>
        </>
    )
};

export default Login;