import React, { Component } from 'react'
import { Header, Icon } from 'semantic-ui-react'


function HeaderWithIcon(props){
    return (
        <Header as='h2' icon>
            <Icon name='settings' />
            { props.title }
            <Header.Subheader>
                    { props.subtitle }
            </Header.Subheader>
        </Header>
    );
}

export default HeaderWithIcon;