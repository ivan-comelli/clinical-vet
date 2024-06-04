import styled from "styled-components"
import { Typography, TextField} from "@mui/material";

const Container = styled.div`

`;

const Auth = () => {
    return(
        <Container>
            <Typography variant="h5">Iniciar sesion</Typography>
            <Typography variant="subtitle1">Usamos tu numero de celular, esto nos ayuda asociarte a tu mascota.</Typography>
            <TextField id="filled-basic" label="Filled" variant="filled" />
            <TextField id="filled-basic" label="Filled" variant="filled" />
        </Container>
    )
}

export default Auth