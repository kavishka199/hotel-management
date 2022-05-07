import Vue from "vue";
import Router from "vue-router";
// use router
Vue.use(Router);

import Rooms from '../pages/rooms/Rooms.vue';
import RoomEdit from '../pages/rooms/Edit.vue';
import AddRoom from '../pages/rooms/Add.vue';
import Packages from '../pages/packages/Packages.vue';
import AddPackage from '../pages/packages/Add.vue';
import Inventory from '../pages/inventory/Inventory.vue';
import AddInventory from '../pages/inventory/Add.vue';
import Events from '../pages/events/Events.vue';
import AddEvent from '../pages/events/Add.vue';
import Home from '../pages/Home.vue';
import AboutUs from '../pages/AboutUs.vue';
import Contact from '../pages/Contact.vue';




export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Root",
      component: Packages,
    },
    {
      path: "/rooms",
      name: "Rooms",
      component: Rooms,
    },
    {
      path: "/rooms/:id",
      name: "Rooms",
      component: RoomEdit,
    },
    {
      path: "/rooms/insert",
      name: "Add Room",
      component: AddRoom,
    },
    {
      path: "/packages",
      name: "Packages",
      component: Packages,
    },
    {
      path: "/packages/insert",
      name: "Add Package",
      component: AddPackage,
    },
    {
      path: "/inventory",
      name: "Inventory",
      component: Inventory,
    },
    {
      path: "/inventory/insert",
      name: "Add Inventory",
      component: AddInventory,
    },
    {
      path: "/events",
      name: "Events",
      component: Events,
    },
    {
      path: "/events/insert",
      name: "Add Event",
      component: AddEvent,
    },
    {
      path: "/Home",
      name: "Home",
      component: Home,
    },
    {
      path :"/about",
      name : "about",
      component : AboutUs
    },
    {
      path :"/contact",
      name : "contact",
      component : Contact
    },
  ]
});
