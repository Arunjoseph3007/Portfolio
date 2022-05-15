import React from "react";
import styled from "styled-components";
import { titleAnim, fadeIn } from "../Components/lookAndFeel/Animations";
import {
  StyledSvg,
  MainSections,
  Title,
  Hider,
} from "../Components/lookAndFeel/ReusableStyles";
import useScrollToTop from "../Utils/useScrollToTop";

const Contact = () => {
  useScrollToTop()
  return (
    <MainSections variants={fadeIn} initial="hidden" animate="show" exit="exit">
      <Hider>
        <Title variants={titleAnim} initial="hidden" animate="show" exit="exit">
          <span>
            Hey there<b>,</b>
          </span>
          <br />
          Let's Connect<b>.</b>
        </Title>
      </Hider>
      <h2>
        Lorem ipsum dolor sit amet icing elit.
        <br /> Dolores quos consectetur?
      </h2>
      <QuotationSvg
        width="375"
        height="242"
        viewBox="0 0 375 242"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M113.6 25.3999C102.4 36.0666 92 48.8666 82.4 63.8C73.3333 78.7333 67.4667 93.6666 64.8 108.6C85.6 108.6 102.933 114.2 116.8 125.4C130.667 136.6 137.6 152.333 137.6 172.6C137.6 192.333 131.2 208.867 118.4 222.2C105.6 235 89.0667 241.4 68.8 241.4C49.0667 241.4 32.8 234.733 20 221.4C7.20001 207.533 0.800007 190.733 0.800007 171C0.800007 137.933 9.06667 106.2 25.6 75.8C42.6667 44.8667 64.2667 20.8667 90.4 3.79999L113.6 25.3999ZM262.181 216.6C273.381 205.933 283.781 193.133 293.381 178.2C302.981 163.267 308.848 148.333 310.981 133.4C290.181 133.4 272.848 127.8 258.981 116.6C245.115 104.867 238.181 89.1333 238.181 69.4C238.181 49.1333 244.581 32.6 257.381 19.8C270.181 6.99998 286.715 0.599981 306.981 0.599981C327.248 0.599981 343.515 7.26664 355.781 20.6C368.581 33.9333 374.981 50.7333 374.981 71C374.981 103.533 366.715 135.267 350.181 166.2C333.648 197.133 312.048 221.133 285.381 238.2L262.181 216.6Z"
          fill="#23D997"
        />
      </QuotationSvg>
    </MainSections>
  );
};

const QuotationSvg = styled(StyledSvg)`
  right: 3%;
`;

export default Contact;
