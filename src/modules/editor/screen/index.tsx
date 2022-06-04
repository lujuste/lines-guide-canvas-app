import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Asidebar from "../components/Asidebar";
import HeaderMain from "../components/HeaderMain";
import Workspace from "../components/Workspace";
import MainContainer from "../components/MainContainer";
import { useEffect } from "react";
import { useSelection } from "../hooks/selection";

export default function Editor() {
  const { multipleSelectionRefs } = useSelection();

  // Unload UseEffect
  useEffect(() => {
    return () => {
      //unloading mutitpleSelections
      //every time user leave the screen
      multipleSelectionRefs.current = [];
    };
  }, []);

  return (
    <>
      <MainContainer>
        <HeaderMain />
        <Workspace />
        <Asidebar />
      </MainContainer>

      <ToastContainer position="bottom-left" />
    </>
  );
}
