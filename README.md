#  Order and Message Queue System on AWS using lambda function

### Configuration SQS

| Features | Value |
|--|--|
| **Visibility timeout** | 1 |
| **Message retention period** | 1 Days |

### Lambda Setup

| Name | Code Source | Environment | Trigger | Description |
|--|--|--|--|--|
| **app-backend** | [code-backend] | SQS_QUEUE_URL | - | `Timeout` of 1 minute, |
| **pizza-shop1** | [code-shop1] | - | SQS | for `Reserved concurrency` use 1 and `Timeout` of 1 minute |
| **pizza-shop2** | [code-shop2] | - | SQS | for `Reserved concurrency` use 1 and `Timeout` of 1 minute |

### View results in `CloudWatch`

<!-- Link -->

[code-backend]: </service/lambda-app_backend.js>
[code-shop1]: </service/lambda-pizza_shop1.js>
[code-shop2]: </service/lambda-pizza_shop2.js>