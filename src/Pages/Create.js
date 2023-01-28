import {Form} from 'react-router-dom';
import { Link } from 'react-router-dom';

function Create(props){
    return (
    <div className='main'>
        <div className='createcontainer'>
            <div className='cardcreate'>
                <div className='cardcontent'>
                    <p className='cardtitle'>Add a New Restaurant</p>
                    <Form action='/create' method='post' className='cardform'>
                        <input type='text' name='name' placeholder='Name'/> <br/>
                        <input type='text' name='image' placeholder='Image URL'/> <br/>
                        <input type='text' name='type' placeholder='Food Type'/> <br/>
                        <input type='text' name='address' placeholder='Restaurant Address'/> <br/>
                        <input type='submit' value='Add Restaurant' className='createsubmit'/>
                    </Form>
                    <Link to='/'>Home</Link>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Create