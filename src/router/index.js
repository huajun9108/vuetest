import Vue from 'vue'
import financialReport from '../components/financialReport.vue'
import loss from  '../components/loss.vue'
import  material  from  '../components/material.vue'
import volume from  '../components/volume.vue'
import energy from  '../components/energy.vue'
import manpower from  '../components/manpower.vue'
import maintenance from  '../components/maintenance.vue'





import machine from  '../components/machine.vue'


import overview from  '../components/overview.vue'
import oEEnolosses from  '../components/oEEnolosses.vue'
import graficoOEE from  '../components/graficoOEE.vue'

import left2 from  '../components/material.vue'
import savingBook from  '../components/savingBook.vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/financialReport',
      name: 'financialReport',
      component: financialReport
    },
    {
      path: '/loss',
      name: 'loss',
      component: loss,
      children: [
        {
          path: 'machine',
          name: 'machine',
          component: machine,
          children: [
            {
              path: 'overview',
              name: 'overview',
              component: overview,
            },
            {
              path: 'oEE no losses',
              name: 'oEE no losses',
              component: oEEnolosses,
            },
            {
              path: 'grafico OEE',
              name: 'grafico OEE',
              component: graficoOEE,
            }
          ]
        },
        {
          path: 'material',
          name: 'material',
          component: material
        },
        {
          path: 'volume',
          name: 'volume',
          component: volume
        },
        {
          path: 'energy',
          name: 'energy ',
          component: energy
        },
        {
          path: 'manpower',
          name: 'manpower',
          component: manpower
        },
        {
          path: 'main tenance',
          name: 'maintenance',
          component: maintenance
        },
      ],
      redirect: '/loss/machine'
    },

    {
      path: '/savingBook',
      name: 'savingBook',
      component: savingBook
    },

  ]
})
