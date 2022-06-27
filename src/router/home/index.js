const home =
{
  path: '/',
  component: () =>
      import ('layouts/MainLayout.vue'),
  children: [{
          path: '/home',
          component: () =>
              import ('pages/home/index.vue')
      }]
  }

export default home


