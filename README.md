# React with Redux

This repository is for understanding how to use React with Redux

## Development

### Preparation

We should install packages first.

```console
> npm install
```

**Getting YouTube API key**

In this project, we need to get YouTube Video data by [Google API](https://console.developers.google.com).

When you enter into API Manager, you can easily find **YouTube Data API**.
At this place, you have to subscribe API key with Browser key.

And then write down the key at 'config/config.js'

**Base Information**

This project uses the Bootstrap basically. You can find that CDN of Bootstrap has been wrote on '/index.html'

**Directory Information**

There are tree different sub-projects.
- YouTube: it is only composed of React and deals with how to get data by Ajax or communicate with components by events(callbacks)
- BookList: it is composed of React and Redux. Especially, it deals with Action creators, so we can check the flow of whole process.
- WeatherForecastChart:

**Weather Data**

We get the weather forecast data by OpenAPI from [OpenWeatherMap](http://openweathermap.org/forecast5).
> Using the API, we should apply for API Key personally at first time.

For further information about OpenWeatherMap API, you should access this [link](http://openweathermap.org/api).


### Test

Basically, this project uses **Webpack** and **NPM script**.

```console
> npm start
```

## Reference

Basically this project was from [ReduxSimpleStarter](https://github.com/StephenGrider/ReduxSimpleStarter).

- **Udemy Lecture** : [React-Redux](https://www.udemy.com/react-redux/)
