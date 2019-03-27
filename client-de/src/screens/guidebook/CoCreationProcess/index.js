import React from 'react';
import Stage1 from './1'
import Stage2 from './2'
import Stage3 from './3'
import Stage4 from './4'
import Stage5 from './5'
import Stage6 from './6'
import Stage7 from './7'
import { Spin } from 'antd'

export default class CoCreationProcess extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            coCreationProcessNum: props.match.params.coCreationProcessNum || '1'
        }
    }

    componentDidMount() {
        Promise.all([
            import('../data/coCreationProcess/coCreationProcessDetails'),
            import('../data/materials/materials')
        ])
            .then(([coCreationProcessData, materials]) => {
                this.coCreationProcessData = coCreationProcessData.default;
                this.materials = materials.materials;
                this.setState({
                    loading: false
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            this.setState({
                coCreationProcessNum: this.props.match.params.coCreationProcessNum,
            })
        }
    }

    renderStage() {
        let ret = null;
        switch (this.state.coCreationProcessNum) {
            case '1':
                ret = <Stage1 CO_CREATION_PROCESS={this.coCreationProcessData} MATERIALS={this.materials} />
                break;
            case '2':
                ret = <Stage2 CO_CREATION_PROCESS={this.coCreationProcessData} MATERIALS={this.materials} />
                break;
            case '3':
                ret = <Stage3 CO_CREATION_PROCESS={this.coCreationProcessData} MATERIALS={this.materials} />
                break;
            case '4':
                ret = <Stage4 CO_CREATION_PROCESS={this.coCreationProcessData} MATERIALS={this.materials} />
                break;
            case '5':
                ret = <Stage5 CO_CREATION_PROCESS={this.coCreationProcessData} MATERIALS={this.materials} />
                break;
            case '6':
                ret = <Stage6 CO_CREATION_PROCESS={this.coCreationProcessData} MATERIALS={this.materials} />
                break;
            case '7':
                ret = <Stage7 CO_CREATION_PROCESS={this.coCreationProcessData} MATERIALS={this.materials} />
                break;
            default:
                break;
        }
        return ret;
    }

    render() {
        const { loading } = this.state;
        return (
            <Spin size='large' spinning={loading}>
                {!loading && this.renderStage()}
            </Spin>
        )
    }
}
