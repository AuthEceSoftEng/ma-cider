import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import StartScreen from './StartScreen/StartScreen'

import {
    Introduction,
    CoCreationProcess,
    MethodsOverview, MethodsDetails, Materials,
    CaseStudies, CaseStudiesFieldSite,
    EvaluationFramework,

} from './guidebook/_index'

import {
    MyProjects, Project, Activities, Activity, Participants, ProjectGraphs,
    Favorites,
    Create,
    Edit,
    Settings,
    Users
} from './platform/_index'

import { isUserLoggedIn } from '../utilities/helpers';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={(props) => (
            isUserLoggedIn() ?
                <Component {...props} />
                :
                <Redirect to={{
                    pathname: '/',
                    state: { from: props.location }
                }} />
        )} />
)

const Navigation = () => (
    <main>
        <Switch>

            {/* Start Route */}
            <Route exact path='/' component={StartScreen} />

            {/* Guidebook Routes */}

            {/* Introduction */}
            <Route exact path='/guidebook/about' component={Introduction.About} />
            <Route exact path='/guidebook/why-what-who' component={Introduction.WhyWhatWho} />
            <Route exact path='/guidebook/how-to-use' component={Introduction.HowToUse} />

            {/* CoCreation Process */}
            <Route exact path='/guidebook/co-creation-process/:coCreationProcessNum' component={CoCreationProcess} />

            {/* Methods */}
            <Route exact path='/guidebook/methods/overview' component={MethodsOverview} />
            <Route exact path='/guidebook/methods/details/:method_num' component={MethodsDetails} />

            {/* Methods */}
            <Route exact path='/guidebook/materials' component={Materials} />

            {/* Case studies */}
            <Route exact path='/guidebook/case-studies' component={CaseStudies} />
            <Route exact path='/guidebook/case-studies/:site' component={CaseStudiesFieldSite} />

            {/* Evaluation framework */}
            <Route exact path='/guidebook/evaluation-framework' component={EvaluationFramework.EvaluationFramework} />
            <Route exact path='/guidebook/evaluation-framework/:evaluation' component={EvaluationFramework.EvaluationFrameworkId} />
            <Route exact path='/guidebook/evaluation-framework/:evaluation/:evaluationStage' component={EvaluationFramework.EvaluationFrameworkIdDetails} />

            <Redirect from="/guidebook*" to="/" />

            {/* Private Routes */}
            <PrivateRoute exact path='/platform/my-projects' component={MyProjects} />
            <PrivateRoute exact path='/platform/my-projects/:projectId' component={Project} />
            <PrivateRoute exact path='/platform/my-projects/:projectId/graphs' component={ProjectGraphs.Graphs} />
            <PrivateRoute exact path='/platform/my-projects/:projectId/graphs/:graphNum' component={ProjectGraphs.Graph} />
            <PrivateRoute exact path='/platform/my-projects/:projectId/activities' component={Activities} />
            <PrivateRoute exact path='/platform/my-projects/:projectId/activities/:activityId' component={Activity} />
            <PrivateRoute exact path='/platform/my-projects/:projectId/participants' component={Participants} />
            <PrivateRoute exact path='/platform/create/:field' component={Create} />
            <PrivateRoute exact path='/platform/edit/:field/:fieldId' component={Edit} />
            <PrivateRoute exact path='/platform/favorites' component={Favorites} />
            <PrivateRoute exact path='/platform/settings' component={Settings} />
            <PrivateRoute exact path='/platform/users' component={Users} />
            <Redirect from="/platform*" to="/platform/my-projects" />
            <Redirect from="*" to="/" />
        </Switch>
    </main>
)

export default Navigation;
