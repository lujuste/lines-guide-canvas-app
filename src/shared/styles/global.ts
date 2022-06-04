import { createGlobalStyle } from "styled-components";

interface Theme {
  theme: {
    name: string;
    colors: {
      primary: string;
      black: string;
      background: string;
      border: string;
      gray900: string;
      gray300: string;
      gray100: string;
    };
  };
}

const GlobalStyle = createGlobalStyle`

/* @font-face {
  font-family: "Montserrat";
  src: url("./fonts/Montserrat/Montserrat-Bold.ttf") format("truetype");
  font-weight: bold;
  font-style: normal;
}

@font-face {
  font-family: "Roboto";
  src: url("./fonts/Roboto/Roboto-thin.ttf") format("truetype");
  font-weight: 200;
  font-style: normal;
}


@font-face {
  font-family: "Roboto";
  src: url("./fonts/Roboto/Roboto-Regular.ttf") format("truetype");
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: "Roboto";
  src: url("./fonts/Roboto/Roboto-Medium.ttf") format("truetype");
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: "Roboto";
  src: url("./fonts/Roboto/Roboto-Medium.ttf") format("truetype");
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: "Roboto";
  src: url("./fonts/Roboto/Roboto-Medium.ttf") format("truetype");
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: "Roboto";
  src: url("./fonts/Roboto/Roboto-Bold.ttf") format("truetype");
  font-weight: 700;
  font-style: normal;
} */


    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: "Roboto", sans-serif;
    -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }

  ul, li {

    list-style: none;
  }

  button {
    cursor: pointer;
    border: none;
  }
  body {
    overflow: hidden;
    background: ${(props: Theme) => props.theme.colors.primary};
    -webkit-font-smoothing: antialiased;

  }
  h1 {
    width: 100%;
    margin: 50px 0;
    text-align: center;
    color: ${props => props.theme.colors.black};
  }

  html {
    font-size: 10px;
 
  }


  .react-modal-content {
    width: 100%;
    max-width: 900px;
    background: ${({ theme }) => theme.colors.gray100};
    display: flex;
    z-index: 99;
    align-items: center;
    justify-content: center;
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    z-index: 99;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .controlsStyle {
    background: red;
  }

  .controlsClass {
    background: red;
  }

  .onfocus-pages {
    border: 3px solid #663399;
  }


//icons svg control media query

  @media (max-width: 1602px) {
    .width-icon-to-front{
      width: 32px;
      height: 32px;
    }

    .width-icon-toback {
      width: 25px;
      height: 25px;
    }

    .width-icon-strong {
      width: 27px;
      height: 27px;
    }
    
    .width-icon-italic {
      width: 25px;
      height: 25px;
    }

    .width-icon-underline {
      width: 27px;
      height: 27px;
    }

    .width-icon-casetext {
      width: 25px;
      height: 25px;
    }

    .width-icon-align {
      width: 22px;
      height: 22px;
    }

    .width-icon-textheight {
      width: 22px;
      height: 22px;
    }

    .width-unlock-icon {
      width: 22px;
      height: 22px;
    }
    .width-block-icon {
      width: 23px;
      height: 23px;
    }

    .width-spam-icon {
      width: 26px;
      height: 26px;
    }

    .width-icon-stroke {
      width: 25px;
      height: 25px;
    }
    
    .width-icon-dash {
      width: 26px;
      height: 26px;
    }

    .width-icon-radius {
      width: 25px;
      height: 25px;
    }

    .width-icon-underline {
      width: 27px;
      height: 27px;
    }

    .arrow-moveup-icon {
      width: 15px;
      height: 15px;
    }

    .arrow-add-page-icon {
      width: 26px;
      height: 26px;
    }

    .konvashape-icon {
      width: 100px;
      height: 90px;
    }

    .width-lock-icon {
      width: 26px;
      height: 26px;
    }

  }

  @media (max-width: 1366px) {

    .width-icon-to-front {
      width: 29px;
      height: 29px;
    }

    .width-icon-toback {
      width: 23px;
      height: 23px;
    }

    .width-icon-strong {
      width: 24px;
      height: 24px;
    }
    
    .width-icon-italic {
      width: 22px;
      height: 22px;
    }

    .width-icon-underline {
      width: 24px;
      height: 24px;
    }

    .width-icon-casetext {
      width: 22px;
      height: 22px;
    }

    .width-icon-align {
      width: 19px;
      height: 19px;
    }

    .width-icon-textheight {
      width: 19px;
      height: 19px;
    }

    .width-spam-icon {
      width: 23px;
      height: 23px;
    }

    .width-unlock-icon {
      width: 19px;
      height: 19px;
    }
    .width-block-icon {
      width: 24px;
      height: 24px;
    }


      .width-icon-stroke {
        width: 20px;
        height: 20px;
      }

         
    .width-icon-dash {
      width: 20px;
      height: 20px;
    }
    
    .width-icon-radius {
      width: 20px;
      height: 20px;
    }

    .arrow-moveup-icon {
      width: 14px;
      height: 14px;
    }
      //icon move up first page disable button
    .blocked-icon {
      width: 14px;
      height: 14px;
    }
    
    .arrow-add-page-icon {
      width: 22px;
      height: 22px;
    }

  }

  .width-lock-icon {
      width: 24px;
      height: 24px;
    }

  .icons-align-toolbar {
      width: 19px;
      height: 19px;
    }

    .konvashape-icon {
      width: 80px;
      height: 70px;
    }
 

`;

export default GlobalStyle;
