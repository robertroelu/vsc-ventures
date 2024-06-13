//Finsweet attributes
import { linkblockedit } from '@finsweet/attributes-linkblockedit/';
import { scrolldisable } from '@finsweet/attributes-scrolldisable';

//Modal
import { modal } from '$modal/modal';

//Nest
import { nestedElement } from './nest/nestElement';

//Utils
import { swipers } from '$utils/swipers';
import { actualyear } from '$utils/actualyear';

window.Webflow ||= [];
window.Webflow.push(() => {
  // nestedElement();
  linkblockedit();
  scrolldisable();
  // modal();
  swipers();
  actualyear();
});
