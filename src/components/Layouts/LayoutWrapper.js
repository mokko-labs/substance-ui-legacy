import React from 'react';
import styled from 'styled-components';
import theme from '../Theme/theme';

const Wrapper = styled.div`
  min-height: 100vh;
`;

const Sidebar = styled.div`
  background: ${props => props.background || '#FFF'};
  min-width: 64px;
  width: ${props => props.width +'px' || '200px'};
  position: fixed;
  top: 0; left: 0; bottom: 0;
  min-height: 100vh;
  box-shadow: ${props => props.shadow ? '0 2px 20px rgba(0,0,0,0.1)' : 'none'};
`;

const Content = styled.div`
  background-color: ${props => props.bg || '#fff' };
  min-height: 100vh;
  margin-left: ${props => props.sidebarWidth+'px' || '0px' };
`;


class LayoutWrapper extends React.Component {

  componentWillMount() {
  }

  componentWillReceiveProps(newProps) {
  }


  render() {
    return (
      <Wrapper>
        {this.props.sidebarComponent ? (
          <Sidebar
            background={this.props.sidebarBg ? this.props.sidebarBg : this.props.theme.sidebar.bg}
            width={this.props.sidebarWidth ? this.props.sidebarWidth : this.props.theme.sidebar.width}
            shadow={this.props.sidebarShadow || false}
          >
            {this.props.sidebarComponent}
          </Sidebar>
        ) : null }
        {this.props.children ? (
          <Content
            sidebarWidth={(this.props.sidebarComponent && this.props.sidebarWidth) ? this.props.sidebarWidth : 0}
            sidebar={this.props.sidebarComponent ? true : false}
            bg={this.props.contentBg}
          >
              {this.props.children}
          </Content>
        ) : null }
      </Wrapper>
    )
  }


};

LayoutWrapper.defaultProps = {
  theme: theme
};


export default LayoutWrapper;
