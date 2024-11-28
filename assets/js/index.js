'use strict';

import { select, listen } from "./utils.js";

const hamburgerMenu = select('.hamburger-menu');
const menuItems = select('.menu-items');

listen('click', hamburgerMenu, () => {
    menuItems.classList.toggle('show');
});