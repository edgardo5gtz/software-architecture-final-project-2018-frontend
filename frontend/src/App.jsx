import React, { Component } from 'react'
import { Grid, Menu } from 'semantic-ui-react';

import Navbar from './container/Navbar/Navbar'
import HeaderWithIcon from './components/Header/HeaderWithIcon'

class App extends Component {
    render(){
        return(
            <Grid>
                <Grid.Column width={4}> {/* This is the Sidebar*/}
                    <Navbar/>
                </Grid.Column>

                <Grid.Column width={12} textAlign="center">  {/* This is the Main Body*/}
                    
                    <Grid.Row>{/* This is the Header*/}
                      <HeaderWithIcon/>
                    </Grid.Row>
                    
                    <Grid.Row> {/* This is the Body*/}
    
                    </Grid.Row>
                </Grid.Column>
            </Grid>
        );
    }
}

export default App;