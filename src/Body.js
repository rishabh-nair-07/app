import './Body.css';

function Body() {
    return (
        <div className="App-body">
            <img className="body-image" src="images/Map.svg" alt=""></img>
            <div className='body-container'>
                <div className="body-tile">
                    <p>Got any questions?</p>
                    <p> We got you covered.</p>
                </div>
                <div className='Dropdowns'>
                    <ul>
                        <li className='question'>
                            What is ImageProVision ?    
                        </li>
                        <li className='answer'>
                            ImageProVision Technology Pvt. Ltd is a company that processes and analyses images with the help of image processing applications.
                        </li>
                        <br />
                        <hr />
                        <li className='question'> 
                            How does image processing work?
                        </li>
                        <br />
                        <hr />
                        <li className='question'>
                            What is Image Analytics?
                        </li>
                        <br />
                        <hr />
                        <li className='question'>
                            Which industries can use Image Analytics?
                        </li>
                        <br />
                        <hr />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Body;