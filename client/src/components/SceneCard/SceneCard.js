import React, { useState } from 'react';
import { Jumbotron, Card, CardBody, CardTitle, CardText, Table, Collapse, Button} from 'reactstrap';


export default props => {
    const [collapsed, setCollapsed] = useState(true)

    return (
        <Card>
            <CardBody>
                <CardTitle><Jumbotron className="primary">{props.name}</Jumbotron></CardTitle>
                <CardText>
                    <Button outline onClick={() => setCollapsed(!collapsed)}>{collapsed? "":"Hide"} Actions </Button>
                </CardText>
                <Collapse isOpen={!collapsed}>
                    <Table>
                        <thead>

                        </thead>
                        <tbody>
                            {props.Actions.map(action => (
                                <tr key={action.id}>
                                    <td>{action.id}</td>
                                    <td>{action.order}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Collapse>
            </CardBody>
        </Card>
    )
}