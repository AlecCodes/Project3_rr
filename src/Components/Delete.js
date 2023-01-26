import { Form, Link } from 'react-router-dom'

function Delete(props) {
    return <Form action={`/delete/${props.id}`} method='post'>
        <input type='submit' value='Remove'></input>
        </Form>
}

export default Delete