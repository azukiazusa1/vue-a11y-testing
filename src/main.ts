import { createApp, h, Fragment, App as IApp } from "vue";
import App from "./App.vue";

const setup = async () => {
  let app: IApp<Element>;
  if (import.meta.env.DEV) {
    const VueAxe = await import("vue-axe");
    app = createApp({
      render: () => h(Fragment, [h(App), h(VueAxe.VueAxePopup)]),
    });
    app.use(VueAxe.default);
  } else {
    app = createApp(App);
  }

  return app;
};

setup().then((app) => app.mount("#app"));
