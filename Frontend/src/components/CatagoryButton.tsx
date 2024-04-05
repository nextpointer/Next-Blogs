import styled from "styled-components";

interface Prop{
    innerTxt:string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CatagoryButton=(props:Prop)=>{
    const {innerTxt}=props;
    return (
        <>
            <CatBTN>
                <p>{innerTxt}</p>
            </CatBTN>
            
        </>
    );
}

const CatBTN=styled.div`
    height: 50px;
    width: 160px;
    border: 1px solid #929090;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2em;
    transition: all ease 0.5s;
    &:hover{
        background-color: #fff;
        color: #000;
    }
`

export default CatagoryButton;