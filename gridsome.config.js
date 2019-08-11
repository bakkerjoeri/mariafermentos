module.exports = {
	siteName: 'Mariafermentos',
	transformers: {
		remark: {
			externalLinksTarget: '_blank',
			externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
		}
	},
	plugins: [
		{
			use: '@gridsome/source-filesystem',
			options: {
				path: 'content/posts/**/*.md',
				route: '/blog/:slug',
				typeName: 'Post',
				remark: {}
			}
		},
		{
			use: '@gridsome/source-filesystem',
			options: {
				path: 'content/pages/**/*.md',
				route: '/:slug',
				typeName: 'GeneralPage',
				remark: {}
			}
		},
		{
			use: `gridsome-plugin-netlify-cms`,
			options: {
				publicPath: `/admin`
			}
		},
	]
}
