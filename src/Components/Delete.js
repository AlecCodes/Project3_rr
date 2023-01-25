import { Form } from 'react-router-dom';

function Delete(props) {
    return <Form action={`delete/${props.id}`} method='post'>
        <input type='submit' value='X' />
        </Form>
}

export default Delete