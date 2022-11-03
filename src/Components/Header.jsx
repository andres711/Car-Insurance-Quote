import styled from '@emotion/styled';

const ContainerHeader = styled.header`
background-color:#031448;
padding:10px;
font-weight: bold;
color: #FFFFFF
`;

const TextHeader = styled.h1`
font-size:2rem;
text-align:center;
font-family: "Slabo 27px", serif;
margin:0
`

function Header() {
    return (
        <ContainerHeader>
            <TextHeader>
            Car Insurance Quote
            </TextHeader>
        </ContainerHeader>
      );
}

export default Header;