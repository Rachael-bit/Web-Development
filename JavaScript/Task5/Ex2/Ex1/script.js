const firstName = "Rachael";
const lastName = "Akabueze";
const age = 15;
const isStudent = true;
const favoriteColor = "Blue";

const container = document.getElementById('container')

const userInfo = `
    <h1>${firstName} ${lastName}</h1>
        <span>Age: ${age}</span>
        <p>Student Status: ${isStudent}</p>
        <div>
            <p>Favorite Color: ${favoriteColor}</p>
            <div class="color" style="background: ${favoriteColor}"></div>
        </div>
`;

container.innerHTML = userInfo