import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const arr = [];
for (let i = 0; i < 50; i++) arr.push(i);

const Design = React.memo(() => {
  return (
    <StyledDesign>
      {arr.map((elm) => (
        <Dot key={elm} />
      ))}
    </StyledDesign>
  );
});

const Dot = () => {
  return (
    <div style={{ overflow: "auto" }}>
      <StyledDot
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
        transition={{ duration: 1, delay: `${RandNum(0, 2)}` }}
        style={{
          backgroundColor: `hsla(${RandNumBet(1, 360)},80%,50%,0.8)`,
          boxShadow: `0px 0px 8px hsla(${RandNumBet(1, 360)},80%,50%,.4)`,
          height: `${RandNumBet(10, 25)}px`,
          top: `${RandNumBet(-10, 150)}%`,
          left: `${RandNumBet(2, 90)}%`,
        }}
      />
    </div>
  );
};

const StyledDesign = styled.div`
  z-index: 1000;
  height: 10vh;
  background-color: transparent;
  position: relative;
  @media screen and (max-width: 860px) {
    :nth-child(even) {
      display: none;
    }
  }
`;

const StyledDot = styled(motion.div)`
  aspect-ratio: 1;
  position: absolute;
`;

const RandNumBet = (a, b) => Math.floor(Math.random() * (b - a) + a);

const RandNum = (a, b) => Math.random() * (b - a) + a;

export default Design;
