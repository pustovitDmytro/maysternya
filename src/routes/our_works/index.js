
import React from 'react';
import Layout from '../../components/Layout';
import Tiles from '../../components/Tiles';
import {instagram} from './../../actions/api';

export default {

  path: '/works',

  async action(context){
    let store = context.store;
    await Promise.all([instagram(store.dispatch)]).then(values => console.log("success",values.length))
      .catch(e => console.log("Error during request",e));
    return {
      title: "Наші роботи",
      chunk: 'works',
      component: <Layout>
        <Tiles source={store.getState().HomeData.works}></Tiles>
      </Layout>,
    };
  },

};
