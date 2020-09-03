/**
 *
 * Search
 *
 */
import React from 'react';
import styled from 'styled-components/macro';

export const Search = () => {
    return( 
    <Div>
      <p>
         <Input name="Charity" id="charity" placeholder="Search Charity Name"/>
      </p>
        <Select name="Categories" id="categories">
          <option value="" hidden>Search By category</option>
          <option value="1">Animal & Nature</option>
          <option value="2">Arts & Education </option>
          <option value="3">Communities & Religion</option>
          <option value="4">Human Outreach</option>
        </Select>
        <Button>Find Charity</Button>
    </Div>
    );
};

const Div = styled.div`
background-color:#C0C2C4;
height:100px;
`;
const Input = styled.input`
  width: 500px;
  height: 44px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border: 1px solid #FFFFFF;
  border-radius: 50px;
  line-height: 1.5;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  outline: none;
  opacity: 1;
  padding: 10px;
  margin-bottom:10px;
  font-style: normal normal normal 16px/22px Avenir;
  &::placeholder {
    font-weight: 300;
    color: ${p => p.theme.textSecondary};
  }
  &:hover {
    border: 1px solid #0A559E;
    opacity: 0.8;
  }
  &:active {
    opacity: 0.4;
    border:0px;
  }

`;
const Select=styled.select`
width: 255px;
height: 44px;
background: #FFFFFF 0% 0% no-repeat padding-box;
border: 1px solid #FFFFFF;
border-radius: 25px;
opacity: 1;
padding: 10px;
&:hover{
  border: 1px solid #0A559E;
 }
&:focus{
  border: 1px solid #0A559E;
  border-radius: 25px;
  }
  
`;
const Button= styled.button`
    width: 170px;
    height: 44px;
    background: transparent linear-gradient(0deg, #11569B 0%, #54AECC 100%, #6CCDDD 100%, #7AE0E8 100%) 0% 0% no-repeat padding-box;
    box-shadow: 0px 2px 6px #0000005A;
    border-radius: 50px;
    opacity: 1;
    margin-left:80px;
    text-align: center;
    font: normal normal 900 16px/22px;
    color: #FFFFFF;
    &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.4;
  }
  .icon {
    margin-right: 0.25rem;
  }
`