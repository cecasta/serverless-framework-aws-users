
const hello = async (event, context) => {
    const hour = new Date().getHours()
    const min = new Date().getMinutes()
    const seg = new Date().getSeconds()
    return {
        "statusCode": 200,
        "body": JSON.stringify({ 'message': `time: ${hour}:${min}:${seg}`})
    }
}

module.exports = {
    hello
}
