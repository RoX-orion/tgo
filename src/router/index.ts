import {createRouter, createWebHashHistory, createWebHistory} from "vue-router";
import Layout from '@/layout/index.vue';

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/views/home/index.vue'),
        meta: {title: '首页'}
      }
    ]
  },
  {
    path: '/document',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Document',
        component: () => import('@/views/document/index.vue'),
        meta: {title: '文档'}
      }
    ]
  },
  {
    path: '/api',
    component: Layout,
    children: [
      {
        path: '',
        name: 'API',
        component: () => import('@/views/api/index.vue'),
        meta: {title: 'API'}
      }
    ]
  },
  {
    path: '/blog',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Blog',
        component: () => import('@/views/blog/index.vue'),
        meta: { title: '博客' }
      }
    ]
  },
  {
    path: '/issue',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Issue',
        component: () => import('@/views/issue/index.vue'),
        meta: { title: 'Issue' }
      }
    ]
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import('@/views/Test.vue'),
  },
  {
    path: '/github-callback',
    name: 'GithubCallback',
    component: () => import('@/views/auth/github-callback.vue'),
  },
  {
    path: "/404",
    component: () => import("@/views/404.vue"),
    meta: { auth: false },
    hidden: true,
  },
  // 404 page must be placed at the end !!!
  { path: "/:pathMatch(.*)*", redirect: "/404", hidden: true, meta: { title: '404 Not Found' } },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes
});

export default router;
