/* eslint-disable no-undef */
/* eslint-disable camelcase */
var MetaCoin = artifacts.require('./MetaCoin.sol')

contract('MetaCoin', (accounts) => {
  it('should put 10000 MetaCoin in the first account', () => {
    return MetaCoin.deployed().then((instance) => {
      return instance.getBalance.call(accounts[0])
    }).then((balance) => {
      assert.equal(balance.valueOf(), 10000, '10000 wasn\'t in the first account')
    })
  })
  it('should call a function that depends on a linked library', () => {
    var meta
    var metaCoinBalance
    var metaCoinEthBalance

    return MetaCoin.deployed().then((instance) => {
      meta = instance
      return meta.getBalance.call(accounts[0])
    }).then((outCoinBalance) => {
      metaCoinBalance = outCoinBalance.toNumber()
      return meta.getBalanceInEth.call(accounts[0])
    }).then((outCoinBalanceEth) => {
      metaCoinEthBalance = outCoinBalanceEth.toNumber()
    }).then(() => {
      assert.equal(metaCoinEthBalance, 2 * metaCoinBalance,
        'Library function returned unexpected function, linkage may be broken')
    })
  })
  it('should send coin correctly', () => {
    var meta

    // Get initial balances of first and second account.
    var account_one = accounts[0]
    var account_two = accounts[1]

    var account_one_starting_balance
    var account_two_starting_balance
    var account_one_ending_balance
    var account_two_ending_balance

    var amount = 10

    return MetaCoin.deployed().then((instance) => {
      meta = instance
      return meta.getBalance.call(account_one)
    }).then((balance) => {
      account_one_starting_balance = balance.toNumber()
      return meta.getBalance.call(account_two)
    }).then((balance) => {
      account_two_starting_balance = balance.toNumber()
      return meta.sendCoin(account_two, amount, { from: account_one })
    }).then(() => {
      return meta.getBalance.call(account_one)
    }).then((balance) => {
      account_one_ending_balance = balance.toNumber()
      return meta.getBalance.call(account_two)
    }).then((balance) => {
      account_two_ending_balance = balance.toNumber()

      assert.equal(account_one_ending_balance,
        account_one_starting_balance - amount, 'Amount wasn\'t correctly taken from the sender')
      assert.equal(account_two_ending_balance,
        account_two_starting_balance + amount, 'Amount wasn\'t correctly sent to the receiver')
    })
  })
})
/* eslint-enable no-undef */
/* eslint-enable camelcase */
