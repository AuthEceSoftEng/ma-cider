import React from 'react';
import { DividerHeader, ButtonNextPage } from '../../../components/_index';
import { Link } from 'react-router-dom'

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
                Every co-creation process is unique. It depends on a multitude of conditional aspects such as the kind of service to be developed and its expected impact, the stakeholders, the resources available and so on. Thus, a guidebook to co-creation cannot be used like a cookbook. Rather this guidebook will give you an impression of what it means to co-create and what it requires, thereby providing you with practical guidance and orientation based on previous experiences.
            </p>
            <p>
                The heart of this guidebook is a process model that structures the process of co-creating in seven different streams, each concerned with a certain set of thematically related steps (e.g. technical tasks such as programming or organisational tasks such as engaging stakeholders). The streams are not simply a linear sequence of steps, but should be seen as building blocks of a whole. However, some blocks need to be in place before others can follow. Others are under construction throughout the whole process. In this guidebook, we provide a detailed description of each stream featuring its particular aims and requirements, the expected results of certain tasks, as well as its relation to other streams, some practical recommendations, good practice examples and links to methods and useful resources.
             </p>
            <p>
                The resource section contains information and materials that support you in planning, implementing and evaluating your co-creation process. In the <Link to='/guidebook/methods/overview'>methods section</Link> you can find different formats for how to engage with your stakeholders. The <Link to='/guidebook/case-studies'>case studies</Link> give you an insight into the co-creation projects that this guidebook is based on. In the <Link to='/guidebook/materials'>materials section</Link>, we provide examples of documents used in the application of certain methods, in different streams of work.
            </p>
            <p>
                Finally, we provide you with different tools that may facilitate your co-creation process: a documentation tool that will help you document your co-creation process in a systematic manner, an <Link to='/guidebook/evaluation-framework'>evaluation framework</Link> that helps you evaluate your process and outputs, the MADE software platform, and an example of a blog to use as a communication tool with your stakeholders.
             </p>
        </div>
    )
}

export default HowToUse;
