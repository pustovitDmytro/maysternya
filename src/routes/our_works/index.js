
import React from 'react';
import Layout from '../../components/Layout';
import Tiles from '../../components/Tiles';
import {instagram} from './../../actions/api';

export default {

  path: '/works',

  async action(){
  let images=[];
  await Promise.all([instagram]).then(values => {images=values[0]})
  .catch(e => console.log("Error during catalog request",e));
    return {
      title: "Наші роботи",
      chunk: 'works',
      component: <Layout>
        <Tiles source={images}></Tiles>
      </Layout>,
    };
  },

};
