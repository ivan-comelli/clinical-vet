const Iso = require('../../public/iso.svg')
const Logo = require('../../public/logo.svg')
import Image from 'next/image'
import styled from 'styled-components';
import hydrate from 'styled-components';


const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2em;
    padding: var(--sizing-md);
`;    
const Secondary = styled.div`
    @media (max-width: 599px) {
        display: none;
    }
`;

const Brand = () => {
    return(
        <Container>
            <Image src={Iso} alt="caquiña" width={64}/>
            <Secondary>
                <Image src={Logo} alt="caquiña" width={600}/>
            </Secondary>
        </Container>
    )
}

export default Brand;