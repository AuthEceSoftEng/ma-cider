import React from 'react';
import { DividerHeader, ButtonNextPage } from '../../../components/_index'

const WhyWhatWho = props => {
    return (
        <div className='my-resp-padding'>
            <ButtonNextPage to='/guidebook/how-to-use' label='How to use' />
            <h1 className='color-primary'>Co-Creation</h1>
            <DividerHeader text='WHY' />
            <p>
                The take-up of eGovernment services is lower than anticipated, especially among citizens. Co-creation may become a way to improve the quality of eGovernment services and thus their uptake, by involving end users as partners in the planning, design and provision of digital services. It is an approach to citizen-driven service development which has been promoted greatly at European and national level for the past decade, but not been fully implemented yet, even though co-creation provides concrete solutions to improve user centricity, of service design and delivery.
            </p>
            <DividerHeader text='WHAT' />
            <p>
                In the past ten years, co-creation has become a buzzword for the development and design of products and services across a range of domains: in the private and public sector but also in the areas of art and research. In the public sector co-creation came to be considered “a cornerstone for social innovation” (Voorberg, Bekkers, & Tummers, 2015 p. 1346). It is an approach to collaboratively develop and deliver meaningful, relevant und user-friendly digital services. Involving citizens in the planning, design and provision of public services is not new. Rather, there are at least three different approaches on which such activities are based. In each of these approaches co-creation plays an increasingly important role: (1) Co-production of public services, (2) Co-design of information systems and (3) Civic open data use (civic hacking).
            </p>
            <DividerHeader text='WHO' />
            <p>
                By bringing together government agencies, NGOs, citizens and/or businesses co-creation promises the collaborative development of public services or services of public interest. In co-creation processes everyone who has somehow stock in the provision and use of a service is viewed as an expert. This includes the target user group in particular but may include other stakeholders as well. Originated in participatory software development and participatory design co-creation combines stakeholder involvement across the different phases of the service development process: the identification of problems, the envisioning of better futures and the definition of solutions as well as their implementation.
            </p>
        </div>
    )
}

export default WhyWhatWho;
