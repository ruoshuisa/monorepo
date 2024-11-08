import antfu from '@antfu/eslint-config'

export default antfu({
  unocss: true,
  vue: true,
},
{
  "test/consistent-test-it": ["error", { "withinDescribe": "test" }]
})

