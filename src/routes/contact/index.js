
import React from 'react';
import Layout from '../../components/Layout';
export default {

  path: '/contact',

  async action() {
    return {
      title: "Контакти",
      chunk: 'contact',
      component: <Layout>
      </Layout>,
    };
  },

};
