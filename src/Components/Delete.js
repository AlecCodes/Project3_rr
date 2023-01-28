import { Form, Link } from 'react-router-dom'

function Delete(props) {
    return <Form action={`/delete/${props.id}`} method='post'>
        <input type='submit' value='Remove' className="showsubmit"></input>
        </Form>
}

export default Delete