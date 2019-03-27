import React from 'react';
import Navigation from './screens/Navigation';
import { AppHeader, AppSider, FeedbackStickyButton, FeedbackModal, MyPdfModalViewer } from './components/_index'
import { Layout } from 'antd';
import { withRouter } from "react-router-dom";
import { initializeReactGA, trackPage } from './utilities/helpers'

// Google analytics
initializeReactGA();

const { Content } = Layout;
const FULL_WIDTH_SIDEBAR_LIMIT = 556;
const SIDEBAR_DEFAULT_WIDTH = 287;

class App extends React.Component {

  state = {
    sidebarWidth: window.innerWidth < FULL_WIDTH_SIDEBAR_LIMIT ? window.innerWidth : SIDEBAR_DEFAULT_WIDTH, // default width
    sidebarCollapsed: window.innerWidth < 1500
  }

  componentDidMount() {
    trackPage(window.location.pathname);
    this.adjustAppMargin()
    window.addEventListener('resize', this.onResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  onResize = () => {
    const innerWidth = window.innerWidth;
    const sidebarWidth = innerWidth <= FULL_WIDTH_SIDEBAR_LIMIT ? innerWidth : SIDEBAR_DEFAULT_WIDTH;
    const sidebarCollapsed = innerWidth >= 1500 ? false : true
    this.setState({
      sidebarWidth,
      sidebarCollapsed
    }, () => {
      this.adjustAppMargin()
    })
  }

  adjustAppMargin = () => {
    let ml = this.state.sidebarCollapsed ? 0 : 287;
    document.getElementById('AppMainLayoutContent').style.marginLeft = String(ml) + 'px';
  }

  toggleSidebarCollapse = () => {
    this.setState({ sidebarCollapsed: !this.state.sidebarCollapsed }, () => {
      if (window.innerWidth > FULL_WIDTH_SIDEBAR_LIMIT) {
        this.adjustAppMargin()
      }
    })
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
      trackPage(this.props.location.pathname);
      if (window.innerWidth < 556 && !this.state.sidebarCollapsed) {
        this.setState({ sidebarCollapsed: true }, () => { this.adjustAppMargin() })
      }
    }
  }

  render() {
    return (
      <Layout>
        <AppHeader toggleSidebarCollapse={this.toggleSidebarCollapse} sidebarCollapsed={this.state.sidebarCollapsed} />
        <Layout >
          <AppSider sidebarCollapsed={this.state.sidebarCollapsed} width={this.state.sidebarWidth} />
          <Layout>
            <Content id="AppMainLayoutContent" className="app-main-layout-content">
              <Navigation />
              <FeedbackModal ref={r => this.feedbackModalRef = r} />
              <FeedbackStickyButton onClick={() => { this.feedbackModalRef.showModal() }} />
              <MyPdfModalViewer />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    )
  }
}

export default withRouter(App);