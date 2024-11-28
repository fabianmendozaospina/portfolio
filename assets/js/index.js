'use strict';

import { select, selectAll, listen } from "./utils.js";

const hamburgerMenu = select('.hamburger-menu');
const menuItems = select('.menu-items');
const grid = select('.work_content_area');
const filterItemsList = selectAll('.work_filter li', document);

listen('load', window, () => {
    
    function filterItems(filterValue) {
        const items = selectAll('.item-img', grid);

        items.forEach(function(item) {
            if (filterValue === '*' || item.classList.contains(filterValue.substring(1))) {
                item.classList.remove('hidden');
                item.style.transform = 'translateY(0)';
                item.style.opacity = '1';
                item.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
            } else {
                item.style.transform = 'translateY(-20px)';
                item.style.opacity = '0';
                item.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
                setTimeout(() => {
                    item.classList.add('hidden');
                }, 300); 
            }
        });
    }

    filterItemsList.forEach(function(button) {
        listen('click', button, function() {
            filterItemsList.forEach(function(btn) {
                btn.classList.remove('active');
            });
            button.classList.add('active');
            
            const filterValue = button.getAttribute('data-filter');
            filterItems(filterValue); 
        });
    });
});

listen('click', hamburgerMenu, () => {
    menuItems.classList.toggle('show');
});