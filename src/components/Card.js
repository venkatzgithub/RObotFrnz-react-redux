import React from 'react';


const Card = (props) => {
    return (
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-s">
            <img alt="test" src={`https://robohash.org/${props.id}?200x200`} />
            <div>
                <h2>{props.id}</h2>
                <p>{props.name}</p>
            </div>

        </div>


    );

}
export default Card;