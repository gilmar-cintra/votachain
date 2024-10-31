import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/home',
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/home',
      },
      {
        path: 'home',
        component: () => import('@/views/Home.vue'),
      },
      {
        path: 'voting-list',
        component: () => import('@/views/VotingList.vue'),
      },
      {
        path: 'results',
        component: () => import('@/views/Results.vue'),
      },
      {
        path: 'user-profile',
        component: () => import('@/views/UserProfile.vue'),
      },
    ],
  },
  {
    path: '/login',
    component: () => import('@/views/Login.vue'),
  },
  {
    path: '/result-voting',
    component: () => import('@/views/ResultVoting.vue'),
  },
  {
    path: '/vote',
    component: () => import('@/views/Vote.vue'),
  },
  {
    path: '/confirm-vote',
    component: () => import('@/views/ConfirmVote.vue'),
  },
  {
    path: '/privacy-policy',
    component: () => import('@/views/PrivacyPolicy.vue'),
  },
  {
    path: '/terms-of-service',
    component: () => import('@/views/TermsOfService.vue'),
  },
  {
    path: '/help-center',
    component: () => import('@/views/HelpCenter.vue'),
  },
  {
    path: '/contact-us',
    component: () => import('@/views/ContactUs.vue'),
  },
  {
    path: '/about-app',
    component: () => import('@/views/AboutApp.vue'),
  },
  {
    path: '/report-issue',
    component: () => import('@/views/ReportIssue.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
