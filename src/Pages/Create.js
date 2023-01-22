import {Form} from 'react-router-dom'

function Create(props){
    return (
        <div className='createPage'>
            <h1>Write a New Review</h1>
            <Form action='/create' method='post'>
                <input type='text' name='name'/>
                <input type='text' name='image'/>
                <input type='text' name='cuisine'/>
                <input type='submit'/>
            </Form>
        </div>
    )
}

export default Create