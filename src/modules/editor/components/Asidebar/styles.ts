import styled from "styled-components";

export const GridItemSidebarMain = styled.div`
  grid-area: sidebar;
  position: sticky;
  width: 35vw;
  z-index: 40;

  @media (max-width: 1600px) {
    .template-icon {
      width: 32px;
      height: 32px;
    }
  }

  @media (max-width: 1366px) {
    .template-icon {
      width: 24px;
      height: 24px;
    }

    .clauses-icon {
      width: 27px;
      height: 27px;
    }

    .group-elements-icon {
      width: 27px;
      height: 27px;
    }

    .elements-icon {
      width: 25px;
      height: 25px;
    }

    .icons-svg-icon {
      width: 27px;
      height: 27px;
    }

    .uploads-svg-icon {
      width: 27px;
      height: 27px;
    }

    .comments-svg-icon {
      width: 26px;
      height: 26px;
    }

    .versioning-svg-icon {
      width: 27px;
      height: 27px;
    }
  }
`;

export const SidebarBody = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  display: block;
  background: #fff;
  flex-direction: column;
`;

export const SidebarNavigate = styled.div`
  width: 100%;
  height: 60px;
  padding-left: 2.2rem;
  padding-right: 2.2rem;
  display: flex;
  z-index: 40;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.gray900};
  & .btn-toolbar {
    position: relative;
  }
`;

