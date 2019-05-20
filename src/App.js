import React, { useState } from "react";
import Banner from "./Banner";
import GaiYao from "./GaiYao";
import LingHongBao from "./LingHongBao";
import KanFang from "./24HourKanFang";
import LouPanXinXi from "./LouPanXinXi";
import KanFangModal from "./KanFangModal";

function App() {
  const [showKanFangModal, setKanFangModal] = useState(false);
  return (
    <>
      <Banner />
      <GaiYao />
      <LingHongBao setKanFangModal={ setKanFangModal }/>
      <KanFang />
      <LouPanXinXi setKanFangModal={setKanFangModal} />
      {showKanFangModal ? (
        <KanFangModal
          title={showKanFangModal.title}
          setKanFangModal={setKanFangModal}
        />
      ) : null}
    </>
  );
}

export default App;
