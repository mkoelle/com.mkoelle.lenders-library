import React from 'react';

type Props = {
    name: string;
    image: string;
    description: string;
    lender: string;
    tags: string[];
};

function Lendable({ name, image, description, lender, tags }: Props) {
    return (
        <li className="card columns" id={name} key={name}>
            <div className="card-image column is-narrow-mobile">
                <figure className="image">
                    <img src={image} alt={name} />
                </figure>
            </div>
            <div className='column is-narrow-mobile'>
            <header className='card-header'>
                <p className='card-header-title'>{name}</p>
                <div className="card-header-icon" aria-label="more options">
                    <span className="has-text-grey-light">
                        <i className="fa fa-heart"></i> 1
                    </span>
                </div>
            </header>
            <div className="card-content">
                <div className="content">{description}</div>
                <div className="content">
                    <p>
                        Provided by:
                        <a href="/#">@{lender}</a>&nbsp;
                        {tags.map(tag => <span className="tag">{tag}</span>)}
                    </p>
                </div>
            </div>
            </div>
        </li>
    );
}

export default Lendable;
