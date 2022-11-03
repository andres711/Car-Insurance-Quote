import styled from "@emotion/styled";

const Paragraph = styled.p`
background-color: #8e8e8e;
padding:1rem;
margin-top:1rem;
text-align:center;
font-weight:bold;
color:#FFF;
border:black 1px solid
`
const ContainerResult = styled.div`
position:relative;
`

function Result({quotation}) {

    return ( 
        <div>
            {
                quotation===0
                ?(
                    <Paragraph>Please select marca, year and plan</Paragraph>
                )
                :(
                    <ContainerResult>
                    <Paragraph>Quotation: ${quotation}</Paragraph>
                    </ContainerResult>
                    
                )
            }
        </div>
     );
}

export default Result;