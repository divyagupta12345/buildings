
import React, { useState } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

import './Accordion.css';
import './Value.css';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import data from './Accordion.js';
 
const Value = () => {
  const [accordionItems, setAccordionItems] = useState(data.map(() => false));

  const toggleAccordion = (index) => {
    const newAccordionItems = [...accordionItems];
    newAccordionItems[index] = !newAccordionItems[index];
    setAccordionItems(newAccordionItems);
  };

  return (
    <>
    <section className="v-wrapper">
      <div className="paddings innerwidth flexCenter v-cantainer">
        {/* LEFT SIDE */}
        <div className="v-left">
          <div className="image-container">
            <img src="https://tse4.mm.bing.net/th?id=OIP.KITgApiTIj67tnZltRuF1QHaE7&pid=Api&P=0&h=180" alt="home" />
          </div>
        </div>
        {/* RIGHT SIDE */}
        <div className="flexColStart v-right">
          <span className="value">Our Value</span>
          <br />
          <span className="primaryText">Value we Give to You</span>
          <br />
          <span className="secondaryText">
            We are always ready to help by providing the best services for you.
            <br />
            We believe a good place to live can make your life better.
          </span>
          <Accordion className="accordion" allowMultipleExpanded={false} preExpanded={[0]}>
            {data.map((item, i) => (
              <AccordionItem className={`accordionItem ${accordionItems[i] ? 'expanded' : 'collapsed'}`} key={i} uuid={i}>
                <AccordionItemHeading>
                  <AccordionItemButton className="flexCenter accordionButton" onClick={() => toggleAccordion(i)}>
                    <div className="flexCenter icon">{item.icon}</div>
                    <span className="primaryText">{item.Heading}</span>
                    <div className="flexCenter icon">
                      <MdOutlineArrowDropDown size={20} />
                    </div>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p className="secondaryText">{item.Details}</p>
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
    
    </>
  );
};

export default Value;
