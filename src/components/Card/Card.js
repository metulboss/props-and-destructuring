import React from 'react';

const Card = (props) => {

    const {card1} = props;
    return (
        <div className='card'>
        <h1 className='card-title'>{card1}</h1>
        <p className='card-des'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis et delectus commodi eaque expedita libero, harum excepturi praesentium laborum vitae iusto quia atque sequi cupiditate amet recusandae. Exercitationem, deserunt est.</p>
        <p className='card-footer'>footer</p>
      </div>
    );
};

export default Card;