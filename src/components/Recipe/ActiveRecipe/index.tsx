import styled from "styled-components";
import Typography from '@mui/material/Typography';

interface medicineDoseItemProps {
    pet: string,
    durationInDays: number,
    units: number,
    lapse: number,
    medicament: string
}

const Item = styled.div `
    display: grid;
    background: white;
    border-radius: var(--sizing-md);
    border: solid 0.1em black;
    padding: var(--spacing-sm);
    grid-template-columns: 3fr repeat(3, 1fr);
    grid-row-gap: 1em;
`;
const Slot = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: var(--spacing-sm);
    border-left: solid .1em;
`;
const Row = styled.div `
    grid-column: 1/-1;
    padding: 0 var(--spacing-sm);
    padding-top: var(--sizing-sm);
    margin: 0;
    border-top: solid .1em;
    text-align: center;
`;
const Head = styled.div `
    margin: 0;
    padding: 0 var(--spacing-md);
    align-self: center;
`;


export default ({pet, durationInDays, units, lapse, medicament}: medicineDoseItemProps) => {
    const simplifyDuration = getSimplifyDurationFromDays(durationInDays);
    const unitValue = (units % 1) == 0 ? units : getFractionFromDecimalUnits(units);

    return (
        <Item>
            <Head>
                <Typography variant="h6">{pet}</Typography>
            </Head>
            <Slot>
                <Typography variant="body1">1</Typography>
                <Typography variant="body2">MES</Typography>
            </Slot>
            <Slot>
                <Typography variant="body1">{unitValue}</Typography>
                <Typography variant="body2">UND</Typography>
            </Slot>
            <Slot>
                <Typography variant="body1">{lapse}</Typography>
                <Typography variant="body2">HS</Typography>
            </Slot>
            <Row><Typography variant="subtitle1">{medicament}</Typography></Row>
        </Item>
    )
}

function getSimplifyDurationFromDays(days: number): string {
    return (
        ''
    )
}


//Puede servir cuatificar en decimal las dosis para la posibilidad de analisis de consumo
function getFractionFromDecimalUnits(fration: number): string {
    //Subtract the coma and whole.
    const len = fration.toString().length - 2 

    const denominator = Math.pow(10, len);
    const numerator = fration * denominator;

    //Greatest Common Divisor with Euclid's algorithm
    const gcd = (a: any, b: any): any => {
        // Since there is a limited precision we need to limit the value.
        if (b < 0.0000001) return a;            
        // Discard any fractions due to limitations in precision.
        return gcd(b, a % b);
    }

    const divisor = gcd(numerator, denominator)

    return (
        (numerator/divisor) + '/' + (denominator/divisor)  
    )
}
