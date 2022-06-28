const welcome =
{
  path: '/',
  component: () =>
      import ('layouts/MainLayout.vue'),
  children: [{
          path: '',
          component: () =>
              import ('pages/IndexPage.vue')
      }]
  }

export default welcome

