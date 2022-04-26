// JSON

const willItRain = weatherApiResponse => {
    const rain = JSON.parse(weatherApiResponse);
    return (rain.now.rainExpected === true)
}

console.log(willItRain('{"now":{"temperature":18,"humidity":"30%","uvIndex":0,"rainExpected":true}}'));
console.log(willItRain('{"now":{"temperature":25,"humidity":"90%","uvIndex":4,"rainExpected":false}}')); 