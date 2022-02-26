import React from 'react';

function App() {
    return (
        <article
            className="post"
            v-for="resource in resources"
        // :key="resource.name"
        >
            <h4>things</h4>
            <div className="media">
                <div className="media-left">
                    <p className="image is-32x32">
                        {/* <img :src="resource.image" /> */}
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
                <div className="media-right">
                    <span className="has-text-grey-light">
                        <i className="fa fa-heart"></i> 1
                    </span>
                </div>
            </div>
        </article>
    );
}

export default App;
