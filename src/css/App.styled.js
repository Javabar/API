import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
`;

export const ItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Image = styled.img`
  width: 75%;
  height: 250px;
  object-fit: fill;
`;

export const Items = styled.div`
  width: 40%;
  border: solid black 2px;
  margin: 10px;
  padding-bottom: 20px;
`;

// export const Button = styled.button`
//   background: ${(props) => props.background};
//   color: ${(props) => props.color};
//   margin: 16px;
//   padding: 10px 25px;
//   border: 2px solid ${(props) => props.background};
//   border-radius: 5px;
// `;