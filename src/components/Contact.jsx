import '../Styles/Contact.css'

export default function Contact(){
    return(
        <div className='container'>
            <div className='row'>
                <h2>Contact me</h2>
            </div>
            <form>
                <label>Name</label>
                <input type='text'></input>
                <label>Email</label>
                <input type='text'></input> 
                <label>Message</label>
                <input type='text'></input>
                <button className='submit-btn' type='submit'>Send</button>
            </form>
            
        </div>
    )
}