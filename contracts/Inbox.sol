//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Inbox {
    string public message;

    function Inbox(string initialMessage) public {
        message = initialMessage;
    }
}