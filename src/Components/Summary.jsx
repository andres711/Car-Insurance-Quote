
import styled from "@emotion/styled";

const ContainerSummary = styled.div`
background-color: #8e8e8e;
margin:0 auto;
text-align:center;
color:#ffffff;
padding:.4rem
`

function Summary({ data}) {
  const { marca, plan, year } = data;

  if (marca.trim() === "" || plan.trim === "" || year.trim() === "") {
    return null;
  }

  return (
    
    <ContainerSummary>
      <h2>Summary</h2>
      <ul>
        <li>Origin: {marca}</li>
        <li>Year: {year} </li>
        <li>Plan: {plan} </li>
      </ul>
    </ContainerSummary>
 
   
  );
}

export default Summary;
