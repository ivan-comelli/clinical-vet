import styled from "styled-components"
import Typography from '@mui/material/Typography';

type timeMidday = {
    hour: number,
    minutes: number,
    midday?: string
}

interface turnConsultationItemProps {
    day: number,
    month: string,
    year: number,
    initialTime: timeMidday,
    endTime: timeMidday,
    affair: string
}
const Item = styled.div`
    border-radius: var(--sizing-md);
    display: flex;
    flex-direction: row;
    background: #ffffff;
    box-shadow: 3px 3px 6px 0px rgba(0,0,0,0.39);
    border: solid 0.1em black;
`;
const DateShower = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--spacing-md) var(--spacing-lg);
    gap: var(--spacing-sm);
    border-right: solid .1em;
`;
const Date = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--spacing-sm);
    margin: 0;
    & :nth-child(1) {
        font-weight: 800;
        font-size: var(--dimension-6);
    }

    & :nth-child(2) {
        font-size: var(--dimension-3);
    }

    & :nth-child(3) {
        font-size: var(--dimension-2);
    }

`;
const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding: var(--spacing-md) var(--spacing-lg);
    width: 100%;
    justify-content: center;
    gap: var(--spacing-md);
    >*  {
        margin: 0;
        };
`;

export default ({ day, month, year, initialTime, endTime, affair }: turnConsultationItemProps) => {
    return (
        <Item>
            <DateShower>
                <Date>
                    <Typography variant="caption">{day}</Typography>
                    <Typography variant="caption">{month}</Typography>
                    <Typography variant="caption">{year}</Typography>
                </Date>
            </DateShower>
            <Content>
                <Typography variant="h6">{affair}</Typography>
                <Typography variant="subtitle1">{initialTime.hour + ' a ' + endTime.hour}</Typography>
            </Content>
        </Item>
    )
}