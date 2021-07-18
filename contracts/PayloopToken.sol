//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';

contract PayloopToken is ERC20 {
  constructor() ERC20('Payloop', 'PLP') {
    _mint(msg.sender, 1000);
  }
}