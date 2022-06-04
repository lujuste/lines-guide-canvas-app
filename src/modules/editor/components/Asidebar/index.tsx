import React, { useEffect } from "react";
import PersonalizedIcon from "../../../../shared/assets/customIcons/PersonalizedIcon";
import ButtonIcons from "../../../../shared/components/ButtonIcons";
import { useAsidebarEditor } from "../../hooks/asidebarEditor";
import AsidebarComponents from "../AsidebarComponents";
import ClausesIcon from "../Sidebar/components/Icons/ClausesIcon";
import CloudIcon from "../Sidebar/components/Icons/CloudIcon";
import CloudWeatherIcon from "../Sidebar/components/Icons/CloudWeatherIcon";
import CommentsIcon from "../Sidebar/components/Icons/CommentsIcon";
import ElementsIcon from "../Sidebar/components/Icons/ElementsIcon";
import GroupElementIcon from "../Sidebar/components/Icons/GroupElementIcon";
import TemplateIcon from "../Sidebar/components/Icons/TemplateIcon";
import Tooltip from "../Tooltip";
import { GridItemSidebarMain, SidebarBody, SidebarNavigate } from "./styles";

// import { Container } from './styles';

const Asidebar: React.FC = () => {
  const {
    isActive,
    setIsActive,
    template,
    setTemplate,
    clauses,
    setClauses,
    elements,
    setElements,
    uniqueElement,
    setUniqueElement,
    uploadImages,
    setUploadImages,
    cloud,
    setCloud,
    comments,
    setComments,
    isVersioning,
    setIsVersioning,
    handleNavigate
  } = useAsidebarEditor();

  useEffect(() => {
    return () => {
      handleNavigate("templates");
    };
  }, []);

  return (
    <>
      <GridItemSidebarMain>
        <SidebarBody>
          <SidebarNavigate>
            <ButtonIcons
              width="35px"
              onClick={e => handleNavigate("templates")}
              className="btn-toolbar"
            >
              <Tooltip position="bottom" text="Templates">
                <TemplateIcon className="template-icon" isActive={template} />
              </Tooltip>
            </ButtonIcons>

            <ButtonIcons
              width="35px"
              onClick={e => handleNavigate("clauses")}
              className="btn-toolbar"
            >
              <Tooltip text="Cláusulas" position="bottom">
                <ClausesIcon className="clauses-icon" isActive={clauses} />
              </Tooltip>
            </ButtonIcons>

            <ButtonIcons
              width="35px"
              onClick={e => handleNavigate("elements")}
              className="btn-toolbar"
            >
              <Tooltip text="Bloco de elementos" position="bottom">
                <GroupElementIcon
                  className="group-elements-icon"
                  isActive={elements}
                />
              </Tooltip>
            </ButtonIcons>

            <ButtonIcons
              width="35px"
              onClick={e => handleNavigate("uniqueElement")}
              className="btn-toolbar"
            >
              <Tooltip text="Elementos" position="bottom">
                <ElementsIcon
                  className="elements-icon"
                  isActive={uniqueElement}
                />
              </Tooltip>
            </ButtonIcons>

            <ButtonIcons
              width="35px"
              onClick={e => handleNavigate("uploadImages")}
              className="btn-toolbar"
            >
              <Tooltip text="Ícones" position="bottom">
                <PersonalizedIcon
                  width={40}
                  activeColor="#9945EE"
                  isActive={uploadImages}
                  height={40}
                  className="icons-svg-icon"
                  dPath="M20.5 5.17429C19.2148 5.17409 17.9579 5.55125 16.8851 6.25898C15.8123 6.96671 14.971 7.97385 14.4655 9.15544C13.9599 10.337 13.8125 11.641 14.0414 12.9057C14.2703 14.1703 14.8655 15.3399 15.7531 16.2693C15.9806 16.5077 16.125 16.8162 16.125 17.1443C16.125 17.4506 16.0033 17.7444 15.7867 17.961C15.5701 18.1776 15.2763 18.2993 14.97 18.2993H6.11282C5.86741 18.2993 5.63205 18.3968 5.45852 18.5703C5.28499 18.7439 5.1875 18.9792 5.1875 19.2246C5.1875 21.88 6.24236 24.4267 8.12001 26.3043C9.99766 28.182 12.5443 29.2368 15.1997 29.2368H17.6628C17.7763 29.4323 17.9098 29.6156 18.061 29.7837C17.5797 30.3021 17.1313 30.8468 16.7047 31.4243H15.1997C11.9641 31.4243 8.8611 30.139 6.57321 27.8511C4.28532 25.5632 3 22.4602 3 19.2246C3 17.5052 4.39344 16.1118 6.11282 16.1118H12.9203C12.2984 15.0302 11.9149 13.8281 11.7957 12.5862C11.6765 11.3442 11.8242 10.0911 12.229 8.91094C12.6339 7.73078 13.2864 6.65083 14.1429 5.74356C14.9993 4.83629 16.0399 4.12266 17.1948 3.65057C18.3497 3.17847 19.5922 2.95882 20.839 3.00635C22.0857 3.05388 23.3079 3.36749 24.4235 3.92614C25.5391 4.48479 26.5224 5.27556 27.3073 6.24541C28.0922 7.21525 28.6606 8.34174 28.9744 9.5493H33.2619C34.6685 9.5493 35.8125 10.6912 35.8125 12.1021C35.8125 14.3159 34.0188 16.1118 31.8028 16.1118H28.0797C27.9135 16.4006 27.7297 16.6806 27.5328 16.9452C28.3247 17.3893 29.016 17.9952 29.5607 18.7149C28.5792 18.7282 27.5999 18.8086 26.6294 18.9556C26.182 18.6769 25.6876 18.482 25.1703 18.3802C24.711 18.2927 24.3281 17.9209 24.3281 17.4527C24.3281 17.164 24.4769 16.8993 24.7066 16.7243C24.9237 16.5602 25.1284 16.3803 25.3191 16.1862H25.3235C25.9207 15.5387 26.3888 14.7709 26.6885 13.9243H31.8028C32.8091 13.9243 33.625 13.1084 33.625 12.1021C33.625 12.0052 33.5865 11.9123 33.518 11.8438C33.4495 11.7753 33.3566 11.7368 33.2597 11.7368H27.0625C27.0625 9.99632 26.3711 8.32712 25.1404 7.09641C23.9097 5.8657 22.2405 5.17429 20.5 5.17429ZM32.8747 23.0112C31.3128 22.6831 29.565 22.4381 27.745 22.6656C24.3128 23.0943 22.5366 25.4503 21.515 27.9965C21.4614 28.1298 21.3821 28.2512 21.2816 28.3539C21.1811 28.4565 21.0614 28.5384 20.9293 28.5947C20.7971 28.6511 20.6552 28.6809 20.5115 28.6824C20.3679 28.6839 20.2253 28.6571 20.0921 28.6035C19.9588 28.55 19.8373 28.4707 19.7347 28.3702C19.632 28.2696 19.5502 28.1499 19.4938 28.0178C19.4375 27.8856 19.4077 27.7437 19.4062 27.6C19.4046 27.4564 19.4314 27.3139 19.485 27.1806C20.651 24.2712 22.9194 21.0643 27.4738 20.4956C29.646 20.2243 31.6738 20.524 33.3232 20.8696C33.8153 20.9724 34.3119 21.0884 34.7603 21.1934L35.5129 21.3662C36.1582 21.5084 36.6022 21.5806 36.9063 21.5806C37.0928 21.5806 37.2762 21.6283 37.4391 21.7191C37.602 21.81 37.7389 21.941 37.8369 22.0997C37.9349 22.2584 37.9907 22.4395 37.9989 22.6259C38.0072 22.8122 37.9677 22.9976 37.8841 23.1643C37.7725 23.3874 37.5888 23.6828 37.4072 23.9781L37.37 24.0349C37.1622 24.374 36.9194 24.7678 36.6613 25.2206C35.9197 26.4951 35.3532 27.8636 34.9769 29.2893C34.6378 30.5078 34.1763 32.1462 33.3713 33.5265C32.8507 34.419 32.155 35.27 31.1925 35.8956C30.2191 36.53 29.0357 36.8931 27.6094 36.8931C25.2775 36.8931 23.6106 35.6659 22.576 34.535C22.1107 34.0245 21.7015 33.4657 21.3553 32.8681C20.0363 34.2046 19.0344 35.7096 18.1966 37.3831C18.1329 37.5126 18.0442 37.6283 17.9357 37.7234C17.8271 37.8185 17.7007 37.8912 17.5639 37.9372C17.4271 37.9833 17.2826 38.0018 17.1386 37.9917C16.9946 37.9817 16.854 37.9432 16.725 37.8785C16.5959 37.8138 16.4809 37.7243 16.3867 37.6149C16.2924 37.5056 16.2207 37.3787 16.1757 37.2416C16.1307 37.1044 16.1133 36.9597 16.1245 36.8158C16.1357 36.6719 16.1753 36.5316 16.241 36.4031C18.5619 31.7612 22.075 28.2874 28.9044 26.0124C29.0421 25.9607 29.1889 25.9372 29.3359 25.9434C29.4828 25.9497 29.6271 25.9855 29.7599 26.0488C29.8927 26.1121 30.0114 26.2015 30.1088 26.3118C30.2063 26.422 30.2805 26.5507 30.327 26.6903C30.3736 26.8299 30.3914 26.9774 30.3796 27.1241C30.3678 27.2707 30.3265 27.4135 30.2582 27.5438C30.1899 27.6741 30.0961 27.7893 29.9822 27.8825C29.8684 27.9757 29.7369 28.045 29.5957 28.0862C26.8591 29.0006 24.735 30.0987 23.0397 31.3893C23.3448 31.9953 23.7312 32.5569 24.1881 33.0584C24.9888 33.929 26.1131 34.7056 27.6094 34.7056C28.6441 34.7056 29.4075 34.4475 29.9982 34.0625C30.5997 33.6709 31.081 33.1109 31.4835 32.4218C32.131 31.3128 32.4897 30.0462 32.8266 28.8496C32.9272 28.4996 33.0235 28.154 33.1263 27.8215C33.536 26.5381 34.0839 25.3029 34.7603 24.1378C34.885 23.919 35.0075 23.7112 35.1235 23.5187L35.0425 23.5012C34.7625 23.4399 34.4869 23.3743 34.2069 23.3109C33.7641 23.2055 33.32 23.1056 32.8747 23.0112Z"
                />
              </Tooltip>
            </ButtonIcons>

            <ButtonIcons
              className="btn-toolbar"
              width="35px"
              onClick={e => handleNavigate("cloud")}
            >
              <Tooltip text="Uploads" position="bottom">
                <CloudIcon className="uploads-svg-icon" isActive={cloud} />
              </Tooltip>
            </ButtonIcons>

            <ButtonIcons
              width="35px"
              onClick={e => handleNavigate("comments")}
              className="btn-toolbar"
            >
              <Tooltip position="bottom" text="Comentários">
                <CommentsIcon
                  className="comments-svg-icon"
                  isActive={comments}
                />
              </Tooltip>
            </ButtonIcons>

            <ButtonIcons
              width="35px"
              onClick={e => handleNavigate("cloudWeather")}
              className="btn-toolbar"
            >
              <Tooltip position="bottom" text="Histórico de versões">
                <CloudWeatherIcon
                  className="versioning-svg-icon"
                  isActive={isVersioning}
                />
              </Tooltip>
            </ButtonIcons>
          </SidebarNavigate>
          <AsidebarComponents />
        </SidebarBody>
      </GridItemSidebarMain>
    </>
  );
};

export default Asidebar;
