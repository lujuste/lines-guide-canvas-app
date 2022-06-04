import { createContext, ReactNode, useContext, useState } from "react";

interface ModalContextProps {
  children: ReactNode;
}

const ModalContext = createContext({} as any);

export function ModalContextProvider({ children }: ModalContextProps) {
  const [isNewClausesModalOpen, setIsNewClausesModalOpen] = useState(false);

  function handleOpenNewClausesModal() {
    setIsNewClausesModalOpen(true);
  }

  function handleCloseNewClausesModal() {
    setIsNewClausesModalOpen(false);
  }

  return (
    <ModalContext.Provider
      value={{
        isNewClausesModalOpen,
        handleCloseNewClausesModal,
        handleOpenNewClausesModal
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export const useModalContext = () => useContext(ModalContext);
