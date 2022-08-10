import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: '',
			component: () => import('@/views/Main.vue'),
			children: [
				{
					path: '',
					name: 'home',
					component: () => import('@/views/Home.vue'),
				},
				{
					path: '/about',
					name: 'about',
					component: () => import('@/views/About.vue')
				},
				{
					path: '/posts',
					name: 'posts',
					component: () => import('@/views/Posts.vue')
				},
			],
		},
		{
			path: '/:pathMatch(.*)*',
			name: 'not-found',
			component: () => import('@/views/NotFound.vue')
		},
	]
})

export default router
