
import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-waffle'
import { ethers } from 'hardhat'
import { assert, expect } from 'chai'
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers'
import { Payloop } from '../typechain/Payloop'
import { PayloopToken } from '../typechain/PayloopToken'

describe('Payment', () => {
  let payloop: Payloop
  let merchant: SignerWithAddress;
  let admin: SignerWithAddress;
  let subscriber: SignerWithAddress

  let token: PayloopToken
  const THIRTY_DAYS = 30 * 24 * 60 * 60;
  const SIXTY_DAYS = 60 * 24 * 60 * 60;


  before(async () => {
    [admin, merchant, subscriber] = await ethers.getSigners()
  })

  beforeEach(async () => {
    let Payloop = await ethers.getContractFactory("Payloop")
    payloop = (await Payloop.deploy()) as Payloop

    let Token = await ethers.getContractFactory("PayloopToken")
    token = (await Token.deploy()) as PayloopToken
    await token.transfer(subscriber.address, 1000);
    await token.connect(subscriber).approve(payloop.address, 1000);
  })

  it('should create plan', async () => {
    await payloop.connect(merchant).createPlan(token.address, 100, THIRTY_DAYS);
    const plan1 = await payloop.plans(0);
    expect(plan1.token).to.be.equal(token.address)
    expect(plan1.amount).to.be.equal('100')
    expect(plan1.frequency).to.be.equal(THIRTY_DAYS);

    await payloop.connect(merchant).createPlan(token.address, 200, SIXTY_DAYS,);

    const plan2 = await payloop.plans(1);
    expect(plan2.token).to.equal(token.address);
    expect(plan2.amount).to.equal('200')
    expect(plan2.frequency).to.equal(SIXTY_DAYS)
  })


  it('should NOT create plan', async () => {
    await expect(payloop.connect(merchant).createPlan("0x0000000000000000000000000000000000000000", 100, THIRTY_DAYS)).to.revertedWith('address cannot be null address')
    await expect(
      payloop.connect(merchant).createPlan(token.address, 0, THIRTY_DAYS)

    ).to.revertedWith('amount needs to be > 0');
    await expect(
      payloop.connect(merchant).createPlan(token.address, 100, 0)

    ).to.revertedWith('frequency needs to be > 0');
  })


  it('should create a subscription', async () => {
    await payloop.connect(merchant).createPlan(token.address, 100, THIRTY_DAYS);
    await payloop.connect(subscriber).subscribe(0);
    const block = await ethers.getDefaultProvider().getBlock('latest')
    const subscription = await payloop.subscriptions(subscriber.address, 0);

    expect(subscription.subscriber).equal(subscriber.address);
    assert(subscription.start.sub(block.timestamp).abs().lt(60 * 60))
    assert(subscription.nextPayment.sub(block.timestamp + 86400 * 30).abs().lt((60 * 60)))

  });
})
