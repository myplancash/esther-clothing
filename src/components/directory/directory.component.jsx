import { Fragment } from 'react/cjs/react.production.min';
import DirectoryItem from '../directory-item/directory-item.component';

import './directory.styles.scss';

const categories = [
    {
      id: 1,
      title: "hats",
      imageUrl: "https://i.ibb.co/gv7cDfS/pexels-godisable-jacob-1734798.jpg",
      routeName: "shop/hats"
    },
    {
      id: 2,
      title: "jeans",
      imageUrl: "https://i.ibb.co/1MYdCww/jeans.jpg",
      routeName: "shop/jeans"
    },
    {
      id: 3,
      title: "jackets",
      imageUrl: "https://i.ibb.co/fN4BGPz/jackets.jpg",
      routeName: "shop/jackets"
    },
    {
      id: 4,
      title: "sneakers",
      imageUrl: "https://i.ibb.co/Fxw30VG/sneakers.jpg",
      routeName: "shop/sneakers"
    },
    {
      id: 5,
      title: "women",
      imageUrl: "https://i.ibb.co/w6XXkDT/womens.jpg",
      routeName: "shop/women"
    },
    {
      id: 6,
      title: "mens",
      imageUrl: "https://i.ibb.co/QY270Dd/mens.jpg",
      routeName: "shop/mens"
    },
    {
      id: 7,
      title: "kids",
      imageUrl: "https://i.ibb.co/c6W9f5h/kids.jpg",
      routeName: "shop/kids"
    }
  ];

const Directory = () => {
  return (
    <Fragment>
      <div className='directory-container'>
        {categories.map((category) => (
          <DirectoryItem key={category.id} category={category} />
        ))}
      </div>
      <div className='copy'>© 2022 Esther, Inc.</div>
    </Fragment>
  );
};

export default Directory;
