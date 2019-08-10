module.exports = {
	siteName: 'Mariafermentos',
	transformers: {
		remark: {
			externalLinksTarget: '_blank',
			externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
			anchorClassName: 'icon icon-link',
			plugins: [
			// ...global plugins
			]
		}
	},
	plugins: [
		{
			use: '@gridsome/source-filesystem',
			options: {
				path: 'content/posts/**/*.md',
				route: '/:slug',
				typeName: 'Post',
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
