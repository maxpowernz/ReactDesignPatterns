import { useEffect, useState } from "react";
import styled from "styled-components";

const ModalBackground = styled.div`
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBody = styled.div`
  background-color: white;
  padding: 20px;
  width: 50%;
`;

export const Modal = ({ children, noBackgroundClick = false }) => {
  const [shouldShow, setShouldShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShouldShow(true);
    }, 2000);
  }, []);

  const handleBackgroundClick = (e) => {
    if (noBackgroundClick) {
      e.stopPropagation();
      return;
    }

    setShouldShow(false);
  };

  return (
    <>
      <button onClick={() => setShouldShow(true)}>Show Modal</button>

      {shouldShow && (
        <ModalBackground onClick={handleBackgroundClick}>
          <ModalBody onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setShouldShow(false)}>Hide</button>
            {children}
          </ModalBody>
        </ModalBackground>
      )}
    </>
  );
};
