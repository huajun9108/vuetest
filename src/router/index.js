import Vue from 'vue'
import financialReport from '../components/financialReport.vue'
import loss from '../components/loss.vue'
import operationKPI from '../components/operationKPI.vue'
import singleAgenda from '../components/singleAgenda.vue'
import savingBook from '../components/savingBook.vue'

import material from '../components/material.vue'
import volume from '../components/volume.vue'
import energy from '../components/energy.vue'
import manpower from '../components/manpower.vue'
import maintenance from '../components/maintenance.vue'

import machine from '../components/machine.vue'
import machineKPI from '../components/machineKPI.vue'
import machineAgenda from '../components/machineAgenda.vue'
import machineBook from '../components/machineBook.vue'

import overview from '../components/overview.vue'
import oEEnolosses from '../components/oEEnolosses.vue'
import graficoOEE from '../components/graficoOEE.vue'

import breakdown from '../components/breakdown.vue'
import list from '../components/list.vue'
import pareToChat from '../components/pareToChat.vue'

import savings from '../components/savings.vue'
import masterplan from '../components/masterplan'

import left2 from '../components/material.vue'

import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/financialReport',
      name: 'financialReport',
      component: financialReport
    },
    {
      path: '/loss',
      name: 'loss',
      component: loss,
      children: [{
          path: 'machine',
          name: 'machine',
          component: machine,
          children: [{
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
          ],
          redirect: '/loss/machine/overview'
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
      path: '/operationKPI',
      name: 'operationKPI',
      component: operationKPI,
      children: [{
        path: 'machineKPI',
        name: 'machineKPI',
        component: machineKPI,
        children: [{
          path: 'breakdown',
          name: 'breakdown',
          component: breakdown,
          children: [{
              path: 'list',
              name: 'list',
              component: list,
            },
            {
              path: 'pare to chat',
              name: 'pareToChat',
              component: pareToChat,
            },
          ],
          redirect: '/operationKPI/machineKPI/breakdown/list',
        }, ],
        redirect: '/operationKPI/machineKPI/breakdown',
      }, ],
      redirect: '/operationKPI/machineKPI',
    },

    {
      path: '/single agenda',
      name: 'singleAgenda',
      component: singleAgenda,
      children: [{
        path: 'machineAgenda',
        name: 'machineAgenda',
        component: machineAgenda,
      }],
      redirect: '/single agenda/machineAgenda',
    },

    {
      path: '/savingBook',
      name: 'savingBook',
      component: savingBook,
      children: [
        {
          path: 'machineBook',
          name: 'machineBook',
          component: machineBook,
          children: [
            {
              path: 'savings',
              name: 'savings',
              component: savings
            },
            {
              path: 'masterplan',
              name: 'masterplan',
              component: masterplan
            }
          ],
          redirect: '/savingBook/machineBook/savings',
        }
      ],
      redirect: '/savingBook/machineBook',
    },

  ]
})
