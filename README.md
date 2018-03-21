# Kendo UI for Vue Training Materials
Presentation resources and demo materials for Kendo UI for Vue.

## Clone
```bash
git clone https://github.com/newventuresoftware/kendo-ui-for-vue.git
cd kendo-ui-for-vue
```

## Slides
If you have cloned the repository, open Slides.pptx or check out the slides directly [here](https://1drv.ms/p/s!Ag88TW7Y89tw8z72q5Yl1CpPVRm6).

## Demos

### Prerequisites

* [NodeJS](https://nodejs.org/en/) - required for downloading the dependencies and running the kendo-ui-for-vue demo project
* [live-server](https://www.npmjs.com/package/live-server) - a lightweight development server used to run the vue.js demos

After installing NodeJS, you can acquire the `live-server` tool through `npm` (Node Package Manager). Enter in the `Command Prompt` the following command:

```bash
npm install -g live-server
```

### Vue Playground

Navigate to the `vue-playground` folder and run the development server:

```bash
cd demos/vue-playground
live-server .
```
Once the server is up and running, you will get a message in the console about the hostname and the port (`http://127.0.0.1:8080` by default).
After you've opened the URL in your browser, you will get a list of folders and HTML files. Each HTML file is a separate demo.

### Dashboard (Kendo UI for Vue)

Navigate to the `dashboard` project and restore the dependencies:

```bash
cd demos/kendo-ui-for-vue/dashboard
npm install
```

The npm will acquire all the needed dependencies including the vue-cli and development server. After that, run the serve command and look in the console for information about the hostname and port - the default is again `http://127.0.0.1:8080` but make sure you have stopped the `live-server` from the previous demos before running this command:

```bash
npm run serve
```

## Terms & Conditions of Use

This project uses Telerik Kendo UI, which is commercial software. To use it, you need to agree to the [Telerik End User License Agreement for Kendo UI Complete](https://www.telerik.com/purchase/license-agreement/kendo-ui). If you do not own a commercial license, the files associated with the software shall be governed by the trial license terms.

All available Kendo UI commercial licenses may be obtained [here](http://www.telerik.com/purchase/kendo-ui).
