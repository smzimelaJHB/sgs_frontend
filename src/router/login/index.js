const login = {
  path: "/",
  component: () => import("layouts/MainLayout.vue"),
  children: [
    {
      path: "/login",
      component: () => import("pages/login/index.vue"),
    },
    {
      path: "/register",
      component: () => import("pages/login/register.vue"),
    },
    {
      path: "/reset",
      component: () => import("pages/login/reset.vue"),
    },
    {
      path: "/email",
      component: () => import("pages/login/email.vue"),
    },
  ],
};

export default login;
