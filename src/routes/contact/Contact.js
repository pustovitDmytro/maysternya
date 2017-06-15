
import React from 'react';
import Layout from '../../components/Layout';
import Map from '../../components/Map';
export default {

  path: '/contact',

  async action() {
    return {
      title: "Контакти",
      chunk: 'contact',
      component: <Layout>
        <Map/>
      </Layout>,
    };
  },

};
