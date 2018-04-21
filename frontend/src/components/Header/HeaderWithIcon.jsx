import React, { Component } from 'react'
import { Header, Icon } from 'semantic-ui-react'


const HeaderWithIcon = (props) => (
    <Header as='h2' icon>
        <Icon name='settings' />
        { this.props.title }
        <Header.Subheader>
                {this.props.subtitle}
        </Header.Subheader>
    </Header>
);

export default HeaderWithIcon;