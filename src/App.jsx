import React from "react";
import styled from "styled-components";

const LayoutBox = styled.div`
    width: ${(props) => props.width || "100%"};
    height: ${(props) => props.height || ""};

    background-color: ${(props) => props.BgColor || "#fff"};
    
    display: flex;
    flex-direction: ${(props) => (props.direction === "row" ? "row" : "column")}
`;

function App () {
    return(
        <LayoutBox>
            <LayoutBox height="500px" BgColor="#000"></LayoutBox>
            <LayoutBox height="300px" direction="row">
                <LayoutBox height="100%"  width="50%" BgColor="#222"></LayoutBox>
                <LayoutBox height="100%" width="50%" BgColor="#333"></LayoutBox>
            </LayoutBox>
            <LayoutBox height="500px" BgColor="#000"></LayoutBox>
            <LayoutBox height="300px" direction="row">
                <LayoutBox height="100%" width="50%" BgColor="#444"></LayoutBox>
                <LayoutBox height="100%" width="50%" BgColor="#555"></LayoutBox>
            </LayoutBox>    
        </LayoutBox>
    )
}

export default App;