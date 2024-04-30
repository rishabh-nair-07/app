import './Body.css';

function Body() {
    return (
        <div className="App-body">
            <img className="body-image" src="images/Map.svg" alt=""></img>
            <div className="body-tile">
                <p>Got any questions?</p>
                <p> We got you covered.</p>
            </div>
            <div className='Dropdowns'>
                <ul>
                    <li>What is ImageProVision ?</li>
                    <li>How does image processing work?</li>
                    <li>What is Image Analytics?</li>
                    <li>Which industries can use Image Analytics?</li>
                </ul>
            </div>
        </div>
    );
}

export default Body;