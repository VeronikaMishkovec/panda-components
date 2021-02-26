import React from 'react';
import Carousel from '../../lib/Carousel'

const imgs = [
    { id: 0, link: 'https://i.pinimg.com/originals/46/da/e5/46dae512e375bee2664a025507da8795.jpg'},
    { id: 1, link: 'https://media.macphun.com/img/uploads/customer/how-to/579/15531840725c93b5489d84e9.43781620.jpg?q=85&w=1340'},
    { id: 2, link: 'https://media.inquirer.com/storage/inquirer/projects/year-in-pictures-2019/photos/POY2019_RedC.JPG'},
    { id: 3, link: 'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cGljdHVyZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'},
    { id: 4, link: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg' }
]

const CarouselExample = () => {
    const renderItems = imgs.map(item => {
       return <img key={item.id} src={item.link}/>
    })

    console.log(imgs)
    return <Carousel>{renderItems}</Carousel>
}

export default CarouselExample