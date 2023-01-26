import {Form} from 'react-router-dom'

function Create(props){
    return (
        <div className='createPage'>
            <h1>Add a New Restaurant</h1>
            <Form action='/create' method='post'>
                <input type='text' name='name' placeholder='Name'/> <br/>
                <input type='text' name='image' placeholder='Image URL'/> <br/>
                <input type='text' name='type' placeholder='Food Type'/> <br/>
                <input type='text' name='address' placeholder='Restaurant Address'/> <br/>
                <input type='submit' value='Add Restaurant'/>
            </Form>
        </div>
    )
}

export default Create