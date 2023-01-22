import {Form} from 'react-router-dom'

function Create(props){
    return (
        <div className='createPage'>
            <h1>Write a New Review</h1>
            <Form action='/create' method='post'>
                <input type='text' name='name' placeholder='Name'/>
                <input type='text' name='image' placeholder='Image URL'/>
                <input type='text' name='cuisine' placeholder='Cuisine/style'/>
                <input type='submit'/>
            </Form>
        </div>
    )
}

export default Create