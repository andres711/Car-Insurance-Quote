import { useState } from "react";
import { algorithmQuoteYear,algorithmQuoteMarca,algorithmQuotePlan } from "../helper";
import styled from "@emotion/styled";

const Field = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;

export const Label = styled.label`
  flex: 0 0 100px;
`;
const Select = styled.select`
  display: block;
  appearance: none;
  width: 100%;
  padding: 0.5rem;
  border: 2px solid #000000;
  text-align: center;
`;
const Option = styled.option`
&hover{
  background-color: #008f39
}

`
const Input = styled.input`
  margin: 0 1rem;
`;
const Button = styled.button`
  background-color: #031448;
  width: 80%;
  margin-left:20%;
  font-size: 1rem;
  padding: 0.7rem;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  margin-top: 2rem;
  transition: background-color 0.3s ease;
  &:hover {
    cursor: pointer;
    background-color: #008f39;
  }
`;

const Error = styled.div`
background-color:red;
color:white;
padding:.7rem;
text-align:center;
margin-bottom:2rem;
border-radius:.2rem
`

function Form({handleData,setLoading}) {
  //STATES
  const [data, setData] = useState({
    marca: "",
    year: 0,
    plan: "",
  });
  const [error,setError] = useState("");

  //DESTRUCTURING
  const {marca,year,plan} = data;

  //SAVE DATA
  const handleChange = (e) => {
    e.preventDefault()
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  //QUOTE INSURANCE
  const handleSubmit = (e)=>{
    e.preventDefault();
    //validar form
    if(marca.trim() ==="" || year.trim()==="" || plan.trim()===""){
      setError("All fields are required");
      return
    }
    setError("")
    let result = 2000;

    //per year of seniority drecreases 3%
    const diference = algorithmQuoteYear(year) 
    result -= (result * 0.03) * diference

    //MarcaIncremnts-->american:30%, asian:20%, european:40%
    result *= algorithmQuoteMarca(marca)

    //PlanIncrements-->basic:0% , complete: 40%
    result = parseFloat(result * algorithmQuotePlan(plan)).toFixed(2)
    setLoading(true)

    setTimeout(()=>{
      setLoading(false)
      handleData(data,result)
    },3000)

  }


  return (
    <form
    onSubmit={handleSubmit}
    >
      {
        error?(
          <Error>
            <span>{error}</span>
          </Error>
        )
        :null
      }
      <Field>
        <Label>Origin</Label>
        <Select name="marca" onChange={handleChange}>
          <Option value="">--Select--</Option>
          <Option value="americano">Americano</Option>
          <Option value="asiatico">Asiatico</Option>
          <Option value="europeo">Europeo</Option>
        </Select>
      </Field>
      <Field>
        <Label>Year</Label>
        <Select name="year" onChange={handleChange}>
          <option value="">--Select--</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
          <option value="2011">2011</option>
        </Select>
      </Field>
      <Field>
        <Label>Plan</Label>
        <Input type="radio" name="plan" value="basic" onChange={handleChange} />
        Basic
        <Input type="radio" name="plan" value="complete" onChange={handleChange} />
        Complete
      </Field>

      <Field>
        <Button
        type="submit"
        >Quote Car</Button>
      </Field>
    </form>
  );
}

export default Form;
