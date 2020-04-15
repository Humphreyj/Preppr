import React,{useContext} from 'react'
import UserContext from '../../contexts/UserContext';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
export default function Example() {

    const {staff} =useContext(UserContext)
    return (
        <Accordion
        allowZeroExpanded={true}>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        AM Staff
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <div>
                        {staff.map(item => {
                            if(item.shift === 'AM') {
                                return (
                                    <p>{item.name}</p>
                                )
                            }
                        })}
                    </div>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        PM Staff
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <div>
                        {staff.map(item => {
                            if(item.shift === 'PM') {
                                return (
                                    <p>{item.name}</p>
                                )
                            }
                        })}
                    </div>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
    );
}