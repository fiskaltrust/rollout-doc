module.exports = {
	rolloutDoc: [
		//AUTO-INSERT:GETTING-STARTED-DEALERS
		{
			type: 'category',
			label: 'Overview',
			items: [
				'rollout-doc/overview/services',
				'rollout-doc/overview/countries',
				'rollout-doc/overview/architecture',
				'rollout-doc/overview/tasks',
				'rollout-doc/overview/business-model',
				{
					type: 'category',
					label: 'Legal/Data Protection',
					items: [
						'rollout-doc/overview/legal-data-protection/compliance-requirements',
						'rollout-doc/overview/legal-data-protection/terms-of-service',
						'rollout-doc/overview/legal-data-protection/fair-user-policy',
						'rollout-doc/overview/legal-data-protection/data-protection'
					]
				}
			]
		},
		{
			type: 'category',
			label: 'Get Started',
			items: [
				'rollout-doc/getting-started/sandbox',
				'rollout-doc/getting-started/registration',
				'rollout-doc/getting-started/authorizations',
				{
					type: 'category',
					label: 'Operator Onboarding',
					items: [
						'rollout-doc/getting-started/operator-onboarding/invitation-process',
						'rollout-doc/getting-started/operator-onboarding/surrogating',
						'rollout-doc/getting-started/operator-onboarding/master-data'
					]
				},
				'rollout-doc/getting-started/my-first-cashbox'
			]
		},
		{
			type: 'category',
			label: 'Buy/Resell',
			items: [
				'rollout-doc/buy-resell/framework-agreement',
				'rollout-doc/buy-resell/products',
				'rollout-doc/buy-resell/rollout-plans',
				'rollout-doc/buy-resell/shop'
			]
		},
		{
			type: 'category',
			label: 'Technical Operations',
			items: [
				'rollout-doc/technical-operations/scenarios',
				{
					type: 'category',
					label: 'Middleware',
					items: [
						'rollout-doc/technical-operations/middleware/overview',
						'rollout-doc/technical-operations/middleware/supported-environments',
						'rollout-doc/technical-operations/middleware/network-requirements',
						'rollout-doc/technical-operations/middleware/launcher',
						'rollout-doc/technical-operations/middleware/cashbox',
						'rollout-doc/technical-operations/middleware/deployment',
						'rollout-doc/technical-operations/middleware/configuration',
						'rollout-doc/technical-operations/middleware/logging',
						'rollout-doc/technical-operations/middleware/setup'
					]
				},
				{
					type: 'category',
					label: 'Rollout Automation',
					items: [
						'rollout-doc/technical-operations/rollout-automation/templates',
						'rollout-doc/technical-operations/rollout-automation/api-templating',
						'rollout-doc/technical-operations/rollout-automation/shop-templating'
					]
				},
				{
					type: 'category',
					label: 'Troubleshooting',
					items: [
						'rollout-doc/technical-operations/troubleshooting/troubleshooting-guide',
						'rollout-doc/technical-operations/troubleshooting/cashbox-failures',
						'rollout-doc/technical-operations/troubleshooting/network-troubleshooting'
					]
				},
				{
					type: 'category',
					label: 'Maintenance',
					items: [
						'rollout-doc/technical-operations/maintenance/proactive-actions',
						'rollout-doc/technical-operations/maintenance/updating',
						'rollout-doc/technical-operations/maintenance/backup-restore'
					]
				}
			]
		},
		{
			type: 'category',
			label: 'Information Sources',
			items: [
				'rollout-doc/information-sources/knowledge-base',
				'rollout-doc/information-sources/cases',
				'rollout-doc/information-sources/documentation',
				'rollout-doc/information-sources/exports',
				'rollout-doc/information-sources/downloads',
				'rollout-doc/information-sources/status-of-third-party-partners',
				'rollout-doc/information-sources/news',
				'rollout-doc/information-sources/videos',
				'rollout-doc/information-sources/webinars',
				'rollout-doc/information-sources/contacting-support'
			]
		}
	]
}