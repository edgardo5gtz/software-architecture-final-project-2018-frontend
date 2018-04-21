import React, { Component } from 'react'
import { Sidebar, Menu, Icon } from 'semantic-ui-react'
class App extends Component {
    render(){
    return(
        <Sidebar as={Menu} visible={true} vertical inverted>
            <Menu.Item name='habits'>
                <Icon name='home' />
                Habits
            </Menu.Item>
            <Menu.Item name='tasks'>
                <Icon name='gamepad' />
                Tasks
            </Menu.Item>
            <Menu.Item name='report'>
                <Icon name='camera' />
                Report
            </Menu.Item>
            <Menu.Item name='acoount'>
                <Icon name='camera' />
                Account
            </Menu.Item>
        </Sidebar>
    );
    }
}

export default App;