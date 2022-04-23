import React from 'react';
import '../scss/main.scss';
import decoration from "../assets/Decoration.svg";

const Organisation = () => {
    return (
        <div id="organisation">
            <div className='desctription'>
                <h2>Komu pomagamy?</h2>
                <img src={decoration} alt="" />
                <div className='buttons'>
                    <button>Fundacjom</button>
                    <button>Organizacjom pozarządowym</button>
                    <button>Lokalnym zbiórkom</button>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate rem inventore, ullam esse aperiam eum sit placeat iure autem enim molestiae minima sunt rerum, iste qui veniam exercitationem ipsa alias.</p>
            </div>
            <div className="listHelp">
                <ul>
                    <li>Test</li>
                    <li>Test</li>
                    <li>Test</li>
                </ul>
                <buttons className="list">

                </buttons>
            </div>
        </div>
    );
}

export default Organisation;