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
        'rollout-doc/shop/README',
        {
        	type: 'category',
            label: 'How To',
            items: [                        
                'rollout-doc/how-to/how-to-switch-scu',
                'rollout-doc/how-to/how-to-bulk-update-cashboxes',
                {
                  type: 'category',
                  collapsed: true,
                  label: 'Step-by-step guides',
                  items: [
                    'rollout-doc/middleware/step-by-step/1-a-tse-per-cash-register/README',
                    'rollout-doc/middleware/step-by-step/2-hardware-tses-at-local-server-for-multiple-cash-registers/README',
                    'rollout-doc/middleware/step-by-step/3-hardware-tse-at-the-main-cash-register-for-several-additional-cash-registers/README',
                    'rollout-doc/middleware/step-by-step/4-a-cloud-tse-for-multiple-cash-registers/README',
                    'rollout-doc/middleware/step-by-step/5-rollout-scenario-with-terminals/README',
                    'rollout-doc/middleware/step-by-step/6-data-center-as-operational-environment/README'
                  ]
                }
            ]
        }
      ]
    }
  ]
}