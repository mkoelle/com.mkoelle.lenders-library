import React from 'react';

function Lendable() {
    return (
        <li
            className="card" //prev post
        >
            <header className='card-header'>
                <p className='card-header-title'>The things</p>
                <div className="card-header-icon" aria-label="more options">
                <span className="has-text-grey-light">
                        <i className="fa fa-heart"></i> 1
                    </span>
                </div>
            </header>
            <div className="media">
                <div className="media-left">
                    <p className="image is-32x32">
                       <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder"/>
                    </p>
                </div>
                <div className="media-content">
                    <div className="content">things</div>
                    <div className="content">
                        <p>
                            Provided by:
                            <a href="#">@user</a>&nbsp;
                            <span className="tag">Board Game</span>
                        </p>
                    </div>
                </div>
            </div>
        </li>
    );
}

export default Lendable;
