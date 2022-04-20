import React from 'react';

type Props = {
    name: string;
    image: string;
    description: string;
    lender: string;
    tags: string[];
};

function Lendable(props: Props) {
    return (
        <li className="card columns" id={props.name} >
            <div className="card-image column is-narrow-mobile">
                <figure className="image">
                    <img src={props.image} alt={props.name} />
                </figure>
            </div>
            <div className='column is-narrow-mobile'>
            <header className='card-header'>
                <p className='card-header-title'>{props.name}</p>
                <div className="card-header-icon" aria-label="more options">
                    <span className="has-text-grey-light">
                        <i className="fa fa-heart"></i> 1
                    </span>
                </div>
            </header>
            <div className="card-content">
                <div className="content">{props.description}</div>
                <div className="content tags">
                    <p>
                        Provided by:
                        <a href="/#">@{props.lender}</a>&nbsp;
                    </p>
                    {props.tags.map((tag, i) => <span className="tag is-link is-light" key={i}>{tag}</span>)}
                </div>
            </div>
            </div>
        </li>
    );
}

export default Lendable;
