import searchIcon from "../../assets/icon-search.svg";
import filterIcon from "../../assets/icon-filter.svg";
import filterIconActive from "../../assets/icon-filter-2.svg";
import IconSvg from "../IconSvg";
import {
  DropDownContainer,
  DropDownHeader,
  DropDownList,
  DropDownListContainer,
  FlexContainer,
  HorizontalStack,
  ListItem,
  VerticalStack
} from "./styles";
import { Input } from "../Input";
import { ChangeEvent, useEffect, useState } from "react";
import { animate, useAnimation, useMotionValue, motion } from "framer-motion";
import useComponentVisible from "../../hooks/useComponentVisible";

interface SearchInputProps {
  search?: string;
  setSearch?: any;
  name?: string;
  type?: string;
  label?: string;
}

const category = [
  {
    name: "Favoritos",
    icon: "/images/icon-star-filter.svg",
    description: "ícone de favoritos"
  },

  {
    name: "Todos",
    icon: "/images/icon-all-filter.svg",
    description: "ícone de favoritos"
  }
];

const list = {
  visible: {
    opacity: 1,
    y: 5,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3
    }
  },
  hidden: {
    opacity: 0,
    y: -20,
    transition: {
      when: "afterChildren"
    }
  }
};

const variants = {
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i * 0.3
    }
  }),
  hidden: { opacity: 0 }
};

export const SearchInput = ({
  search,
  setSearch,
  label,
  name,
  type
}: SearchInputProps) => {
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const controls = useAnimation();
  const x = useMotionValue(0);

  useEffect(() => {
    const controls = animate(x, 100, {
      type: "spring",
      stiffness: 2000
    });

    return controls.stop;
  });

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(true);

  const handleClick = () => setIsOpen(!isOpen);

  const onOptionClicked = (value: string) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };

  useEffect(() => {
    if (!isComponentVisible) {
      setIsOpen(false);
      setIsComponentVisible(true);
    } else {
      return;
    }
  }, [isComponentVisible]);

  return (
    <FlexContainer>
      <IconSvg
        src={searchIcon}
        className="search-icon"
        description={"Pesquisar"}
      />

      <Input
        onChange={handleSearch}
        value={search}
        name={name}
        label={label}
        placeholder={label}
        type={type}
      />
      <DropDownContainer ref={ref}>
        <DropDownHeader Open={isOpen} onClick={handleClick}>
          {isOpen ? (
            <IconSvg
              src={filterIconActive}
              className="search-icon"
              description={"Filtrar"}
            />
          ) : (
            <IconSvg
              src={filterIcon}
              className="search-icon"
              description={"Filtrar"}
            />
          )}
        </DropDownHeader>
      </DropDownContainer>
      {isOpen && isComponentVisible && (
        <DropDownListContainer onClick={handleClick}>
          <DropDownList
            variants={list}
            initial="hidden"
            animate="visible"
            as={motion.ul}
          >
            <VerticalStack>
              {category.map((option, index) => (
                <HorizontalStack key={option.name}>
                  <IconSvg
                    className="testandoicone"
                    src={option.icon}
                    description={option.description}
                  />
                  <ListItem
                    as={motion.li}
                    onClick={onOptionClicked(option.name)}
                    value={option.name}
                    custom={option.name}
                    animate={controls}
                    variants={variants}
                  >
                    {option.name}
                  </ListItem>
                </HorizontalStack>
              ))}
            </VerticalStack>
          </DropDownList>
        </DropDownListContainer>
      )}
    </FlexContainer>
  );
};
