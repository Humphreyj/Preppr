import React,{useContext} from 'react'
import UserContext from '../../contexts/UserContext';
import StaffMember from './StaffMember';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
import Item from '../masterList/Item';
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
                                    <StaffMember 
                                    name={item.name}
                                    role={item.role}
                                    trainedOn={item.trainedOn}
                                    />
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
                                        <StaffMember 
                                        name={item.name}
                                        role={item.role}
                                        trainedOn={item.trainedOn}
                                        />
                                    )
                                }
                            })}
                    </div>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
    );
}