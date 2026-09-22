export function contactTab() {
    const content = document.querySelector(".content");
    content.textContent = "";
    content.classList.add(".content");
    const h1 = document.createElement("h1");
    h1.textContent = "Nana's Kitchen";

    const contactInfo = document.createElement("ul");
    contactInfo.textContent = "Contact Info: ";
    contactInfo.classList.add("contactList");

    const address = document.createElement("li");
    address.textContent = "Address: 742 Heritage Way, Moncton, NB E1C 8R3";
    address.classList.add("contactItem");
    
    const phone = document.createElement("li");
    phone.textContent = "Phone: (506) 555-0148";    

    const email = document.createElement("li");
    email.textContent = "Email: info@nanaskitchenacadian.ca";

    const fax = document.createElement("li");
    fax.textContent = "Fax: (506) 555-0149";
    contactInfo.append(address, phone, email, fax);
    content.append(h1, contactInfo);
};