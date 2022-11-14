function restock() {
    // document.querySelector('.styles__restockButton___2yGGD-camelCase').click();
    document.querySelector('.styles__restockButtonLive___egLXu-camelCase').click();
    setTimeout(findAnswer, 900);
}

function serve(food) {
    food.click();
    let blooks = document.querySelectorAll('.styles__blook___F8Xv7-camelCase');
    for (let idx in blooks) {
        if (!parseInt(idx) && idx != '0') continue;
        blooks[idx].click();
    }
}

function feed() {
    let foodItems = document.querySelectorAll('.styles__food___2v5qJ-camelCase');
    for (let idx in foodItems) {
        if (!parseInt(idx) && idx != '0') continue;
        serve(foodItems[idx]);
    }
}

function tick() {
    if (!autoplay) return;

    let toShopButton = document.querySelector('.styles__reportShopButton___2AvJR-camelCase');
    if (toShopButton) {
        toShopButton.click();
        setTimeout(beginAutoplay, 1000);
    }
    else {
        feed();
        restock();
        setTimeout(tick, 1500);
    }
}

function upgradeAll() {
    let items = document.querySelectorAll('.styles__itemContainer___34Xyx-camelCase');
    for (let idx in items) {
        if (!parseInt(idx) && idx != '0') continue;
        items[idx].click();
    }
}

var autoplay = false;
function beginAutoplay() {
    autoplay = true;
    upgradeAll();
    document.querySelector('.styles__nextDayButton___8lSty-camelCase').click();
    setTimeout(tick, 1000);
}

function stopAutoplay() {
    autoplay = false;
}