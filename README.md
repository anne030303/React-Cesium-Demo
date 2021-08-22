# Cesium Demo Application

## Live site can be found [here](https://cesiumdemo-323112.web.app/)

This app is built using React, Cesium and Resium. The goal of this app is to showcases 3D geospatial visualizations with rich and interactive dynamic data plots.

## Feature

### Layers
* Toggle common layers

### Tools
* Measure coordinate, distance, area

### My maps
* Draw customized map by users

### Themes

#### Telecom Signal with country
* Data source: A csv data provided from [Taiwan gov opendata](https://segis.moi.gov.tw/STAT/Web/Platform/QueryInterface/STAT_Signal.aspx)
* Reference news: https://www.moi.gov.tw/News_Content.aspx?n=4&s=220940
* Extract centroid point from country and Extrude heights by population.
* Rerender data by radio for weekday or weekend or slider for morning, afternoon or night.

<img src="https://user-images.githubusercontent.com/24452337/130358787-55dcb663-107a-4df0-a8be-774ff91c3176.png" width="500">

#### City LOD2 model
* Data source: A geojson polygons provided from [Taiwan gov opendata](https://data.gov.tw/dataset/84581)
* Extrude polygons according to the number of floors buildings(Assume one floor has 3 meters).
* Devide the models by a slider using the number of floors.

<img src="https://user-images.githubusercontent.com/24452337/129505166-4946e664-6e0b-432c-9e81-62c00298b6b2.png" width="500">

#### School LOD3 model
* A campus tour introduction

#### Sun flower
* Historical event record

<img src="https://user-images.githubusercontent.com/24452337/129505214-a1acd3a0-6b4d-4e2e-b33c-7ba043bb0096.png" width="500">


## Built With
* React - The web framework used
* Redux - A predictable state container
* Cesium - 3D Mapping framework
* Material-UI - React UI framework
* Resium - A library of React components for Cesium

## Next step
* Complete Measure Tool
* Complete My maps
* Add 2D Mapping framework
