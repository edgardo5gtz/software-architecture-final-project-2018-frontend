import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Sidebar, Menu, Icon, Image } from 'semantic-ui-react'
import ImageLogo from '../../assets/img/achivement-logo.jpg'

class Navbar extends Component {

    render(){
        return(
            <Sidebar as={Menu} visible={true} vertical inverted>
                <Image src={ImageLogo} size='small' circular />
                <Link to="/habits">
                    <Menu.Item name='habits'>
                        <Icon name='trophy' />
                        Habits
                    </Menu.Item>
                </Link>
                <Link to="/tasks">
                    <Menu.Item name='tasks'>
                        <Icon name='tasks' />
                        Tasks
                    </Menu.Item>
                </Link>
                <Link to="/report">
                    <Menu.Item name='report'>
                        <Icon name="line graph" />
                        Report
                    </Menu.Item>
                </Link>
                <Link to="/account">
                    <Menu.Item name='account'>
                        <Icon name='settings' />
                        Account
                    </Menu.Item>
                </Link>
            </Sidebar>
        );
    }
}

export default Navbar;