import styled from "styled-components";

// Función para generar el color de fondo según el tipo
export const getBackgroundColor = (type) => {
  switch (type) {
    case "grass":
      return "#8ED752";
    case "fire":
      return "#FF9C54";
    case "water":
      return "#4D90D5";
    case "electric":
      return "#FBE273";
    case "bug":
      return "#8CB230";
    case "pyschic":
      return "#F85888";
    case "dark":
      return "#705848";
    case "dragon":
      return "#796B44";
    case "fairy":
      return "#EE90E6";
    case "fighting":
      return "#705848";
    case "ghost":
      return "#705890";
    // Añade más casos según los tipos que quieras manejar
    default:
      return "#D3D3D3"; // Color de fondo por defecto si no se encuentra el tipo
  }
};

export const Container = styled.div`
  font-family: "Mulish", sans-serif;
  font-size: 16px;
  color: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  background-color: ${({ type }) => getBackgroundColor(type)};
  padding: 20px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }

  .card-top {
    margin-bottom: 20px;

    @media screen and (min-width: 768px) {
      margin-bottom: 0;
      margin-right: 20px;
    }

    h4 {
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 10px;
      color: 0000;
    }

    p {
      margin-bottom: 5px;

      /* Agrega más estilos según tus necesidades */
    }
  }

  .card-bottom {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 768px) {
      justify-content: flex-start;
    }

    .pokemon-type-text {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 5px 10px;
      margin-right: 5px;
      margin-bottom: 5px;
      background-color: red;
      color: #333;
      border-radius: 5px;
      /* Agrega más estilos según tus necesidades */
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 15px;
    background-color: transparent;
    color: #fff;
    font-size: 10px;
    font-weight: 600;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0e6f9f;
    }
  }
`;
