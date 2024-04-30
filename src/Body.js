import './Body.css';
import Collapsible from 'react-collapsible';

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
                        <Collapsible className='question' trigger="What is ImageProVision ?">
                            <p className='answer'>
                                ImageProVision Technology Pvt. Ltd is a company that processes and analyses images with the help of image processing applications.
                            </p>
                        </Collapsible> 
                        <br/>
                        <hr/>
                        <Collapsible className='question'  trigger="How does image processing work?">
                            <p className='answer'>
                                ImageProVision Technology Pvt. Ltd is a company that processes and analyses images with the help of image processing applications.
                            </p>
                        </Collapsible> 
                        <br/>
                        <hr/>
                        <Collapsible className='question'  trigger="What is Image Analytics?">
                            <p className='answer'>
                                ImageProVision Technology Pvt. Ltd is a company that processes and analyses images with the help of image processing applications.
                            </p>
                        </Collapsible> 
                        <br/>
                        <hr/>
                        <Collapsible className='question'  trigger="Which industries can use Image Analytics?">
                            <p className='answer'>
                                ImageProVision Technology Pvt. Ltd is a company that processes and analyses images with the help of image processing applications.
                            </p>
                        </Collapsible> 
                
                        <br />
                        <hr />
                </div>
            </div>
        </div>
    );
}

export default Body;