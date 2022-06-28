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
      path: "/forgot-password",
      component: () => import("pages/login/forgotPass.vue"),
    },
    {
      path: "//password-reset/:token",
      component: () => import("pages/login/resetPass.vue"),
    },
    {
      path: "/email",
      component: () => import("pages/login/email.vue"),
    }
  ],
};

export default login;
