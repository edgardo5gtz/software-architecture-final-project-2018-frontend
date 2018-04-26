import React from 'react'
import { Card, Button } from 'semantic-ui-react';


const HabitsList = function(props){
    return(
        <Card.Group>
            {props.userHabits.map((item) => {
                return (
                    <Card key={item.id}>
                        <Card.Content>
                            <Card.Header>
                                {item.name}
                            </Card.Header>
                            <Card.Meta>
                                Score: {item.score}
                            </Card.Meta>
                        </Card.Content>
                        <Card.Content extra>
                            <div className='ui three buttons'>
                                <Button basic color='green' itemID={item.id} onClick={props.handleCardDo}>Do</Button>
                                <Button basic color='blue' itemID={item.id} onClick={props.handleCardEdit}>Edit</Button>
                                <Button basic color='red' itemID={item.id} onClick={props.handleCardDelete}>Delete</Button>
                            </div>
                        </Card.Content>
                    </Card>
                );
            })}
        </Card.Group>
    );
}

export default HabitsList

/*
<Card.Group>
    {this.state.userHabits.map((item) => {
        return (
            <Card key={item.id}>
                <Card.Content>
                    <Card.Header>
                        {item.name}
                    </Card.Header>
                    <Card.Meta>
                        Score: {item.score}
                    </Card.Meta>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui three buttons'>
                        <Button basic color='green' itemID={item.id} onClick={this.handleCardDo}>Do</Button>
                        <Button basic color='blue' itemID={item.id} onClick={this.handleCardEdit}>Edit</Button>
                        <Button basic color='red' itemID={item.id} onClick={this.handleCardDelete}>Delete</Button>
                    </div>
                </Card.Content>
            </Card>
        );
    })}
</Card.Group>*/