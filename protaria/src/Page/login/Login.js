import { Form, FormGroup, FormControl, FormLabel, Stack, Button} from "react-bootstrap";
import Tema from "../../components/tema/Tema";
import { useState } from "react";


function Login () {

    const [login, setLogin] = useState();
    const [senha, setSenha] = useState();

    const storage = localStorage.setItem(login, senha)

    function logar () {

        if (storage !== null) {
            
        }
    }

    return (
        <>
            <Tema/>
            <Stack className="bg-dark p-4 rounded-3 col-md-3 mx-auto mt-5">
                <Form onSubmit={logar}>
                    <FormGroup direction="horizontal">
                            <FormLabel className="text-light fw-bold">Login</FormLabel>
                            <FormControl className="mb-4 border-light" type="text" placeholder="Digite seu Login" onChange={(e) => setLogin(e.target.value)}/>

                            <FormLabel className="text-light fw-bold">Senha</FormLabel>
                            <FormControl className="mb-4 border-light" type="password" placeholder="Digite sua senha" onChange={(e) => setSenha(e.target.value)}/>

                            <Button type="submit" className="btn bg-light text-dark fw-bold border-light">Entrar</Button>
                    </FormGroup>
                </Form>
            </Stack>
        </>
    )
};

export default Login;