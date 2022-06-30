const dashboard =
{
  path: '/',
  component: () =>
      import ('layouts/AdminLayout.vue'),
  children: [{
          path: '/dashboard',
          component: () =>
              import ('pages/dashboard/index.vue')
      }]
  }

export default dashboard


