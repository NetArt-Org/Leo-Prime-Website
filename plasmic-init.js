import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import ContactForm from "./components/ContactForm";
import SubscribeForm from "./components/SubscribeForm";
import Navigation from "./components/Navigation";
import SwiperSlider from "./components/SwiperSlider";
import VerticalAccordion from "./components/VerticalAccordion";
import MarkDownConverter from "./components/MarkDownConverter";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "ctBdLGgruJ63zzSx8ZZKZu",
      token: "0RXR516b1OvOwWJ9XfuaB0ZmIyAklvJwwBiX1bCwAYX1wrbXXjMBNo2UWbg2d2gn1QADpkhe2qFQb5ljT3jMg",
    },
  ],

  // By default Plasmic will use the last published version of your project.
  // For development, you can set preview to true, which will use the unpublished
  // project, allowing you to see your designs without publishing.  Please
  // only use this for development, as this is significantly slower.
  preview: false,
});

// You can register any code components that you want to use here; see
// https://docs.plasmic.app/learn/code-components-ref/
// And configure your Plasmic project to use the host url pointing at
// the /plasmic-host page of your nextjs app (for example,
// http://localhost:3000/plasmic-host).  See
// https://docs.plasmic.app/learn/app-hosting/#set-a-plasmic-project-to-use-your-app-host

// PLASMIC.registerComponent(...);

PLASMIC.registerComponent(ContactForm, {
  name: 'ContactForm',
  props: {
  },
});
PLASMIC.registerComponent(MarkDownConverter, {
  name: 'MarkDownConverter',
  props: {
    children:'string'
  },
});
PLASMIC.registerComponent(SubscribeForm, {
  name: 'SubscribeForm',
  props: {
  },
});
PLASMIC.registerComponent(VerticalAccordion, {
  name: 'VerticalAccordion',
  props: {
    accordionData:'object'
  },
});
PLASMIC.registerComponent(Navigation, {
  name: 'Navigation',
  props: {
    activeMenu:'string',
    headerConfig:'object',
    menuData:'object'
  },
});
PLASMIC.registerComponent(SwiperSlider, {
  name: 'SwiperSlider',
  props: {
    children: 'slot',
  },
});