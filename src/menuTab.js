export function menuTab() {
    const content = document.querySelector(".content");
    content.textContent = "";
    const h1 = document.createElement("h1");
    h1.textContent = "Nana's Kitchen";
    // #region starters
    const startersAndSoups = document.createElement("ul");
    startersAndSoups.textContent = "Starters & Soups";
    startersAndSoups.classList.add("menuList");

    const fricot = document.createElement("li");
    fricot.classList.add("menuItem");
    fricot.textContent = "Traditional Acadian Chicken Fricot: A slow-simmered, hearty chicken stew featuring tender chicken, potatoes, and traditional summer savory seasoning, topped with house-made fluffy dumplings."

    const chowder = document.createElement("li");
    chowder.classList.add("menuItem");
    chowder.textContent = "Maritime Seafood Chowder: Locally sourced Atlantic cod, scallops, and shrimp cooked in a rich, velvety cream broth with diced potatoes and onions.";

    const knats = document.createElement("li");
    knats.classList.add("menuItem");
    knats.textContent = "Acadian Dough Knats: Crispy, golden-fried dough twists served warm with a side of local honey-butter for dipping.";
    startersAndSoups.append(fricot, chowder, knats);

    const startersContainer = document.createElement("div");
    startersContainer.append(startersAndSoups);
    startersContainer.classList.add("startersContainer");
    
    // #endregion
    
    // #region mains
    const mains = document.createElement("ul");
    mains.classList.add("menuList");
    mains.textContent = "Mains";

    const meatPie = document.createElement("li");
    meatPie.classList.add("menuItem");
    meatPie.textContent = "Classic Meat Pie (La Pâté à la Viande): A seasoned mixture of slow-roasted pork and beef encased in a flaky, house-made pastry crust, served with spiced chow-chow relish.";

    const codCakes = document.createElement("li");
    codCakes.classList.add("menuItem");
    codCakes.textContent = "Salt Cod Cakes: Crisp pan-seared patties made with salted Atlantic cod, mashed potatoes, and herbs, served with a tangy house tartar sauce and seasonal greens.";

    const pork = document.createElement("li");
    pork.classList.add("menuItem");
    pork.textContent = "Slow-Cooked Pork & Molasses Beans: Thick-cut pork belly braised alongside navy beans in a rich, dark molasses sauce, served with freshly baked brown bread.";
    mains.append(meatPie, codCakes, pork);

    const mainsContainer = document.createElement("div");
    mainsContainer.classList.add("mainsContainer");
    mainsContainer.append(mains);

    // #endregion

    // #region deserts
    const deserts = document.createElement("ul");
    deserts.textContent = "Deserts";
    deserts.classList.add("menuList");

    const poutine = document.createElement("li");
    poutine.classList.add("menuItem");
    poutine.textContent = "Poutine Râpée (Sweet Variation): Traditional grated potato dumplings stuffed with brown sugar and baked until tender, served with a drizzle of warm maple syrup."
    
    const cake = document.createElement("li");
    cake.classList.add("menuItem");
    cake.textContent = "Warm Apple Molasses Cake: A dense, spiced sponge cake infused with dark molasses and roasted apples, topped with a dollop of fresh whipped cream.";
    deserts.append(poutine, cake);

    const desertsContainer = document.createElement("div");
    desertsContainer.append(deserts);
    desertsContainer.classList.add("desertsContainer");
    // #endregion

    content.append(h1, startersContainer, mainsContainer, desertsContainer);
}