import styled from "styled-components";

interface FlexCardProps {
  src?: string;
}

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  align-items: center;
`;

export const FlexCard = styled.div<FlexCardProps>`
  width: 328px;
  height: 463px;
  cursor: pointer;
  background-image: url(${({ src }) => src && src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background: white;
  border-radius: 10px;
  -webkit-box-shadow: 1px 1px 15px 5px rgba(0, 0, 0, 0.1);
  box-shadow: 1px 1px 15px 5px rgba(0, 0, 0, 0.1);

  @media (max-width: 1600px) {
    width: 272px;
    height: 406px;
  }
`;

export const ImageThumbnail = styled.div<FlexCardProps>`
  width: 100%;
  height: 100%;
  background-image: url(${({ src }) => src && src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: 0px;
  border-radius: 10px;
`;

export const Text = styled.label`
  font-size: 1.8rem;
  text-align: center;
  margin-top: 3rem;
  color: ${({ theme }) => theme.colors.gray300};
`;

