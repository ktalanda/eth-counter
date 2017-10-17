/* eslint-disable no-undef */
/* eslint-disable camelcase */
var SimpleStorage = artifacts.require('./SimpleStorage.sol')

contract('SimpleStorage', (accounts) => {
  it('should start with 0 transactionNumber', () =>
    SimpleStorage.deployed().then(instance => instance.get()).then(transactionNumber => {
      const actual = transactionNumber
      const expected = 0
      assert.equal(actual, expected, 'Transaction number is not starting from clean state.')
    })
  )
  it('should increment transactionNumber on add', () => {
    let contract
    let initialState
    return SimpleStorage.deployed().then(instance => {
      contract = instance
      return instance.get()
    }).then(transactionNumber => {
      initialState = transactionNumber
      contract.increment()
      return contract.get()
    }).then(transactionNumber => {
      const actual = transactionNumber
      const expected = parseInt(initialState) + 1
      assert.equal(actual, expected, 'Transaction number is not incremented correctly.')
    })
  })
})
/* eslint-enable no-undef */
/* eslint-enable camelcase */
