exports.handler = async (event) => {
    console.log(JSON.stringify(event));

    const order = JSON.parse(event.Records[0].body);
    console.log('Received Order:', order);
    console.log(('Pizza Shop #2 Making Pizza... ...'));
    await sleep(5000);
};

// Create Function sleep
function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    })
}
