import {Form} from 'react-router-dom'

function Create(props){
    return (
        <div className='createPage'>
            <h1>Add a New Restaurant</h1>
            <Form action='/create' method='post'>
                <input type='text' name='name' placeholder='Name'/>
                <input type='text' name='image' placeholder='Image URL'/>
                <input type='text' name='type' placeholder='Food Type'/>
                <input type='text' name='address' placeholder='Restaurant Address'/>
                <input type='submit'/>
            </Form>
        </div>
    )
}

export default Create