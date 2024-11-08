import antfu from '@antfu/eslint-config'

export default antfu({

},{
    "test/consistent-test-it": ["error", { "withinDescribe": "test" }]
  })
