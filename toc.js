module.exports = {
  rolloutDoc: [
    //AUTO-INSERT:GETTING-STARTED-DEALERS
    {
      type: 'category',
      collapsed: false,
      label: 'Rollout documentation',
      items: [
        'rollout-doc/introduction',
        'rollout-doc/invitation-management/README',
        'rollout-doc/middleware/README',
        {
          type: 'category',
          collapsed: true,
          label: 'Step-by-step guides',
          items: [
            'rollout-doc/middleware/1-a-tse-per-cash-register/README',
            'rollout-doc/middleware/2-hardware-tses-at-local-server-for-multiple-cash-registers/README',
            'rollout-doc/middleware/3-hardware-tse-at-the-main-cash-register-for-several-additional-cash-registers/README',
            'rollout-doc/middleware/4-a-cloud-tse-for-multiple-cash-registers/README',
            'rollout-doc/middleware/5-rollout-scenario-with-terminals/README',
            'rollout-doc/middleware/6-data-center-as-operational-environment/README',
          ]
        },
        'rollout-doc/shop/README',
        {
        	type: 'category',
            label: 'How To',
            items: [                        
                'rollout-doc/how-to/how-to-switch-scu'
            ]
        }
      ]
    }
  ]
}