import React from 'react';

import './style.scss';

interface Props  {
    children: React.ReactNode,
};

const Carousel = ({ children }: Props) => {

    return <div className='panda-carousel-container'>{children}</div>
}

export default Carousel;