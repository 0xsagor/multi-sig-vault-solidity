# Multi-Sig Vault

A secure, multi-signature wallet implementation in Solidity. This contract ensures that no single individual can move funds or interact with external contracts without a consensus from a predefined set of owners.

## Features
* **Threshold Execution**: Define how many signatures (e.g., 2-of-3) are required for a transaction to pass.
* **Transaction Queueing**: Proposals are stored on-chain for transparent auditing before execution.
* **Revocation**: Owners can revoke their confirmation if they change their mind before the threshold is met.



## Workflow
1. **Submit**: Any owner can submit a transaction proposal.
2. **Confirm**: Other owners review and confirm the transaction.
3. **Execute**: Once the `numConfirmationsRequired` is reached, any owner can trigger execution.

## Setup
1. Clone the repo.
2. Install dependencies: `npm install @openzeppelin/contracts`
3. Deploy with a list of owners and the required confirmation count.

## License
MIT
