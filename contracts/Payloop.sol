//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Payloop {
    uint256 public nextPlanId;
    struct Plan {
        address merchant;
        address token;
        uint256 amount;
        uint256 frequency;
    }
    struct Subscription {
        address subscriber;
        uint256 start;
        uint256 nextPayment;
    }
    mapping(uint256 => Plan) public plans;
    mapping(address => mapping(uint256 => Subscription)) public subscriptions;

    event PlanCreated(address merchant, uint256 planId, uint256 date);
    event SubscriptionCreated(address subscriber, uint256 planId, uint256 date);
    event SubscriptionCancelled(
        address subscriber,
        uint256 planId,
        uint256 date
    );
    event PaymentSent(
        address from,
        address to,
        uint256 amount,
        uint256 planId,
        uint256 date
    );

    function createPlanFor(
        address token,
        uint256 amount,
        uint256 frequency,
        address addr
    ) external {
        _createPlan(token, amount, frequency, addr);
    }

    function createPlan(
        address token,
        uint256 amount,
        uint256 frequency
    ) external {
        _createPlan(token, amount, frequency, msg.sender);
    }

    function _createPlan(
        address token,
        uint256 amount,
        uint256 frequency,
        address addr
    ) private {
        require(token != address(0), "address cannot be null address");
        require(amount > 0, "amount needs to be > 0");
        require(frequency > 0, "frequency needs to be > 0");
        plans[nextPlanId] = Plan(addr, token, amount, frequency);
        nextPlanId++;
    }

    function subscribe(uint256 planId) external {
        IERC20 token = IERC20(plans[planId].token);
        Plan storage plan = plans[planId];
        require(plan.merchant != address(0), "this plan does not exist");

        token.transferFrom(msg.sender, plan.merchant, plan.amount);
        emit PaymentSent(
            msg.sender,
            plan.merchant,
            plan.amount,
            planId,
            block.timestamp
        );

        subscriptions[msg.sender][planId] = Subscription(
            msg.sender,
            block.timestamp,
            block.timestamp + plan.frequency
        );
        emit SubscriptionCreated(msg.sender, planId, block.timestamp);
    }

    function cancel(uint256 planId) external {
        Subscription storage subscription = subscriptions[msg.sender][planId];
        require(
            subscription.subscriber != address(0),
            "this subscription does not exist"
        );
        delete subscriptions[msg.sender][planId];
        emit SubscriptionCancelled(msg.sender, planId, block.timestamp);
    }

    function pay(address subscriber, uint256 planId) external {
        Subscription storage subscription = subscriptions[subscriber][planId];
        Plan storage plan = plans[planId];
        IERC20 token = IERC20(plan.token);
        require(
            subscription.subscriber != address(0),
            "this subscription does not exist"
        );
        require(block.timestamp > subscription.nextPayment, "not due yet");

        token.transferFrom(subscriber, plan.merchant, plan.amount);
        emit PaymentSent(
            subscriber,
            plan.merchant,
            plan.amount,
            planId,
            block.timestamp
        );
        subscription.nextPayment = subscription.nextPayment + plan.frequency;
    }
}
