export function homeTab() {
    const content = document.querySelector(".content");
    content.textContent = "";
    const h1 = document.createElement("h1");
    h1.textContent = "Nana's Kitchen";
    const b1 = document.createElement("br");
    const b2 = document.createElement("br");
    const p1 = document.createElement("p");
    p1.textContent = `At Nana's Kitchen, we honor the rich culinary heritage of Acadia by serving classic homestyle dishes crafted
    from long - standing family recipes.Rooted in the traditions of Maritime coastal communities, our menu
    highlights authentic comfort foods made with locally sourced seafood, slow - cooked meats, and fresh seasonal
    ingredients. From hearty fricot and golden meat pies to house - made dough knats, every item is prepared from
    scratch to deliver the genuine flavors of traditional Acadian cooking.`
    const p2 = document.createElement("p");
    p2.textContent = `    Designed around warmth and hospitality, our dining space invites guests to experience the generous spirit of an
    Acadian family kitchen. Whether you are joining us for a weekday lunch or gathering with loved ones for a
    multi-course dinner, Nana's Kitchen provides a welcoming atmosphere centered on simple, satisfying food and
    community connection. We take pride in preserving these time-honored recipes and sharing the comfort of Acadian
    table traditions with every guest who walks through our doors.`;
    content.append(h1, b1, p1, b2, p2);
    const homeTab = document.querySelector(".home");
    homeTab.classList.add("active");

} 