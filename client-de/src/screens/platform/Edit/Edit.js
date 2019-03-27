import React from 'react';
import Project from './Project'
import App from './App'
import Participant from './Participant'
import Activity from './Activity'

class Edit extends React.Component {

    renderPage() {
        switch (this.props.match.params.field) {
            case 'project':
                return <Project {...this.props} />
            case 'app':
                return <App {...this.props} />
            case 'participant':
                return <Participant {...this.props} />
            case 'activity':
                return <Activity {...this.props} />
            default:
                return null;
        }
    }

    render() {
        return (
            <div className='my-resp-padding'>
                {this.renderPage()}
            </div>
        )
    }
}

export default Edit;
