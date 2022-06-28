const dashboard =
{
  path: '/',
  component: () =>
      import ('layouts/MainLayout.vue'),
  children: [{
          path: '/dashboard',
          component: () =>
              import ('pages/dashboard/index.vue')
      }]
  }

export default dashboard


