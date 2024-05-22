import React from "react";
import { useGlobalContext } from "./context";
import { FaBars } from "react-icons/fa";

const Home = () => {
  const { openModal, openSidebar } = useGlobalContext();

  return (
    <main>
      <button className='sidebar-toggle' onClick={openSidebar}>
        <FaBars />
      </button>
      <button className='btn' onClick={openModal}>
        Show Modal
      </button>
    </main>
  );
};

export default Home;
