import styled from "styled-components";
import { Theme } from "../../../../@types/theme";
import img from "../../assets/ellipse.svg";

interface TemplateCardStyleProps {
  image?: string;
}

interface ItemCarrouselProps {
  src?: string;
  alt?: string;
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 1rem;
  position: relative;

  .full-width {
    background-size: contain;
  }
`;

export const Heading = styled.div`
  font-size: 1.8rem;
  margin: 1.8rem 0 1.8rem 1.6rem;
  color: ${({ theme }: Theme) => theme.colors.black};

  @media (max-width: 1600px) {
    font-size: 1.6rem;
    margin: 1.8rem 0 1.5rem 1.6rem;
  }

  @media (max-width: 1366px) {
    font-size: 1.5rem;
    margin: 1.8rem 0 1.3rem 1.6rem;
  }
`;

export const Carrousel = styled.div`
  overflow: hidden;
  position: relative;
`;

export const InnerCarrousel = styled.div`
  display: flex;
`;

export const TemplateCard = styled.div<TemplateCardStyleProps>`
  min-width: 146.64px;
  height: 207px;
  display: flex;
  width: 100%;
  margin: 10px;
  background: ${({ theme }: Theme) => theme.colors.border};
  border-radius: 10px;
  -webkit-box-shadow: 0px 2px 14px -7px rgba(0, 0, 0, 0.94);
  box-shadow: 0px 2px 14px -7px rgba(0, 0, 0, 0.94);
  margin-right: 2.4rem;
  position: relative;
`;

/// new element

export const CarrouselMain = styled.div`
  display: flex;
  overflow-x: auto;
  overflow: hidden;
  scroll-behavior: smooth !important;
  height: 100%;
`;

export const ItemCarrousel = styled.img<ItemCarrouselProps>`
  margin: 1.5rem;
  padding: 10px;
  width: 143px;
  height: 210px;
  object-position: -99999px 99999px;
  cursor: default;
  background-image: url(${({ src }) => src && src});
  background-size: cover;
  background-repeat: no-repeat;
  flex: none;
  border-radius: 12px;
  -webkit-box-shadow: 1px 3px 12px -1px rgba(0, 0, 0, 0.5);
  box-shadow: 1px 3px 12px -1px rgba(0, 0, 0, 0.2);
`;
