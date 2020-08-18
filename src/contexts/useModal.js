import React from "react";

const ModalContext = React.createContext(undefined);

export const ModalProvider = ({ children }) => {
  const [modal, setModal] = React.useState();
  return <ModalContext.Provider value={{ modal, setModal }}>{children}</ModalContext.Provider>;
};

export const useModal = () => {
  const context = React.useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
