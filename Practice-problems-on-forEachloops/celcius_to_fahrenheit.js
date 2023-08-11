const celsiusTemperatures = [0, 10, 20, 30, 40, 50];

const fahrenheitTemperatures = [];

celsiusTemperatures.forEach(celsius => {
    const fahrenheit = (celsius * 9 / 5) + 32;
    fahrenheitTemperatures.push(fahrenheit);
});

console.log(fahrenheitTemperatures);
