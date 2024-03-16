import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'frontEndPage',
    component: () => import('../views/FrontEnd.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('../views/frontEnd/HomeView.vue'),
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('../views/frontEnd/AboutView.vue'),
      },
      {
        path: 'newInfo',
        name: 'newInfo',
        component: () => import('../views/frontEnd/NewInfoView.vue'),
      },
      {
        path: 'productsPage',
        name: 'productsPage',
        component: () => import('../views/frontEnd/ProductsPageView.vue'),
        children: [
          {
            path: 'products',
            name: 'products',
            component: () => import('../views/frontEnd/ProductsView.vue'),
          },
        ],
      },
      {
        path: 'product/:id',
        name: 'product',
        component: () => import('../views/frontEnd/SingleProductView.vue'),
      },
      {
        path: 'carts',
        name: 'carts',
        component: () => import('../views/frontEnd/CartsView.vue'),
        children: [
          {
            path: 'confirm',
            name: 'confirm',
            component: () => import('../views/frontEnd/CartConfirm.vue'),
          },
          {
            path: 'fillIn',
            name: 'fillIn',
            component: () => import('../views/frontEnd/CartFillIn.vue'),
          },
          {
            path: 'isPaid',
            name: 'isPaid',
            component: () => import('../views/frontEnd/PaidConfirm.vue'),
          },
        ],
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  scrollBehavior(to) {
    // console.log(to, from);
    if (to.fullPath.match('/information')) {
      return {
        top: 0,
      };
    }
    if (to.fullPath.match('/')) {
      return {
        top: 0,
      };
    }
    return {};
  },
  routes,
});

export default router;
