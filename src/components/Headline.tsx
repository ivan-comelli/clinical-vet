import styled from "styled-components";
import Typography from '@mui/material/Typography';


interface IconProps {
    size?: number
}

interface HeadlineProps {
    Icon: React.FC<IconProps>,
    text: string,
    children: React.ReactNode
}

const Container = styled.div `
    grid-column: 1/-1;
    display: grid;
    grid-template-columns: 32px auto auto;
    gap: 1em;
    
    @media (max-width: 905px) {
        grid-template-columns: 32px 1fr 32px;
        & :nth-child(2) {
            justify-self: center;
            grid-column: 2/3;
        }
    }
`;

const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 1em;
    @media (max-width: 905px) {
        flex-direction: column;
        grid-column: 1/ -1;
    }
`;

const Headline: React.FC<HeadlineProps> = ({Icon, text, children}) => {
    return (
        <Container>
            <Icon size={32} />
            <Typography variant="h5">{ text }</Typography>
            <Content>{children}</Content>
        </Container>
    )
}

export default Headline