# mf-microfront-demo

A demo of the 'microfrontend' pattern using **React**, **SolidJS** and **Module Federation**. The 'remote' app is a simple SolidJS app containing a Counter component, which can be pulled into the 'host' SolidJS app. However, 'host-react' is a React app which pulls in the SolidJS Counter component from the remote using **Module Federation**.

![mf-microfront-demo](https://spikything.com/projects/mf-microfront-demo/mf-microfront-demo.jpg)

### Setup

Fork/clone the repo. Then in each app folder (remote, host, host-react) do:

```
npm i
```

### Running

Inside each app folder (remote, host, host-react) do:

```
npm start
```

You will see in the 'host-react' app (which runs by default on localhost:3001) that the SolidJS Counter component is running inside the React host app.
### Building

Inside each app folder (remote, host, host-react) do:

```
npm run build
```
