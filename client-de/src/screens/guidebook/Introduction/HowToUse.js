import React from 'react';
import { DividerHeader, ButtonNextPage } from '../../../components/_index'

const HowToUse = props => {
    return (
        <div className='my-resp-padding'>
            <div>
                <ButtonNextPage style={{ marginLeft: '10px' }} to='/guidebook/about' label='About' />
                <ButtonNextPage backwards to='/guidebook/why-what-who' label='Why, what, who' />
            </div>
            <h1 className='color-primary'>Guidebook</h1>
            <DividerHeader text='HOW TO USE' />
            <p>
                Every co-creation process is unique. It depends on a multitude of conditional aspects such as the kind of service to be developed and its expected impact, the stakeholders, the resources available and so on. Thus, a guidebook to co-creation cannot be used like a cookbook. Rather this guidebook will give you an impression of what it means to co-create and what it requires. Thereby providing you with practical guidance and orientation based on previous experiences.
            </p>
            <p>
                The heart of this guidebook is a process model that structures the process of co-creating in seven different streams, each concerned with a certain set of thematically related steps (e.g. technical tasks such as programming or organizational tasks such as engaging stakeholders). The streams are not a linear sequence of steps but must be seen as building blocks of a whole. Some blocks need to be in place before the other can follow. Others are under construction throughout the whole process. You’ll find a detailed description of each stream regarding its particular aims and requirements, the expected results of certain tasks, as well as its relation to other streams, some practical recommendations, good practice examples and links to useful resources.
            </p>
            <p>
                The resource section contains materials and tools that support you in planning, implementing and evaluating your co-creation process: In the methods section you’ll find different formats for engaging with your stakeholders. The case studies give you an insight in the co-creation processes that this guidebook is based on. In the material section examples on certain methods are provided.
            </p>
            <p>
                Finally, we provide you with different tools that may facilitate your co-creation process: A documentation tool that will help you document your process in a systematically manner, an evaluation framework that helps you evaluate your process and assess the impact, the MADE platform, and a blog as a communication tool with your stakeholders.
            </p>
        </div>
    )
}

export default HowToUse;
