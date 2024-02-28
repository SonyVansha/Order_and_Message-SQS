const AWS = require('aws-sdk')
AWS.config.update({ region: 'us-east-1' })
const sqs = new AWS.SQS();
const sqsURL = process.env.SQS_QUEUE_URL
// `https://sqs.us-east-1.amazonaws.com/905418153278/pizza-order-queue.fifo`; // Place URL 

// Jumlah Toko yang punya
const numberOfPizzaShops = 2;

// Jumlah pesanan yang diterima
const numberOfOrders = 100;

exports.handler = async (event) => {
    // TODO implement
    let orderId = 1000;
    const records = [];
    for (let i = 0; i < numberOfOrders; i++) {
        const params = {
            MessageBody: JSON.stringify({
                orderId: orderId,
                order: `pizza - ${Math.floor(Math.random() * 10)}`,
                timestamp: new Date().toISOString()
            }),
            QueueUrl: sqsURL,
            MessageDeduplicationId: orderId.toString(),
            MessageGroupId: `group-${i % numberOfPizzaShops}`
        }
        records.push(params);
        orderId++;
    }
    for (const record of records) {
        await sqs.sendMessage(record).promise().then((response) => {
            console.log(JSON.stringify(response))
        }, error => {
            console.error(error)
        })
    }
};
