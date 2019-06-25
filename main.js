import { businesses } from './businesses.js';

console.log("loaded JS")

let businessList = document.querySelector("#putHere")

function createbusinessescomp(busObj) {
    return `
   <h2>${busObj.companyName}</h2>
   <h4>${busObj.addressFullStreet}</h4>
   <h4>${busObj.addressCity}, ${busObj['addressStateCode']} ${busObj['addressZipCode']}</h4>
   <hr>
   `
    console.log(businesses)
}

function businessLoop(loop, func) {
    loop.forEach(element => {
        businessList.innerHTML += func(element)
    });
}

businessList.innerhtml += businessLoop(businesses, createbusinessescomp)

// let businessStrings = businesses.map(createbusinessescomp)
// console.log(businessStrings)
// businessList.innerHTML += businessStrings

// Array to contain all the New York businesses
let manuToDom = document.querySelector("#manufact")

const newYorkBusinesses = businesses.filter(business => {
    let inNewYork = false

    if (business.addressStateCode === "NY") {
        inNewYork = true
    }

    return inNewYork
})

const manufacturingBusinesses = businesses.filter(manu => {
    if (manu.companyIndustry == "Manufacturing") {
        manuToDom.innerHTML +=
            `
        <h2>${manu.companyName}</h2>
        <h4>${manu.addressFullStreet}</h4>
        <h4>${manu.addressCity}, ${manu['addressStateCode']} ${manu['addressZipCode']}</h4>
        <hr>
        `
    }
})

/*
    Using map(), you extract the purchasing agent object
    from each business and store it in a new array
*/
const purchagent = document.querySelector("#purch")

const agents = businesses.map(business => {
    return business
})


// console.table(agents)

agents.forEach(agent => {
    purchagent.innerHTML += `<h2><strong>Full Name</Strong>: ${agent.purchasingAgent.nameFirst} ${agent.purchasingAgent.nameLast}</h2>
  <h2><strong>Company</strong>: ${agent.companyName}
  <h2><strong>Phone Number</strong>: ${agent.phoneWork}
  `
    purchagent.innerHTML += "<hr/>";
});


document
    .querySelector("#companySearch")
    .addEventListener("keypress", keyPressEvent => {
        if (keyPressEvent.charCode === 13) {
            /* WHEN  USER PRESSES ENTER, FIND MATCHING BUSINESS */
            const foundBusiness = businesses.find(
                business =>
                    business.companyName.includes(keyPressEvent.target.value)
            );

            outEl.innerHTML = `
                <h2>
                ${foundBusiness.companyName}
                </h2>
                <section>
                ${foundBusiness.addressFullStreet}

                </section>
                <section>
                ${foundBusiness.addressCity},
                ${foundBusiness.addressStateCode}
                ${foundBusiness.addressZipCode}
                </section>
            `;
        }
    });


//Big Spenders

// Array to contain all the big spenders
const bigSpenders = businesses.filter(taco => {
    let nine = false
    for (let i = 0; i < taco.orders.length; i++) {
        if (taco.orders[i] > 9000) {
            nine = true
        }
    }
    return nine
})
console.log('bigspenders', bigSpenders)





const bigSpend = businesses.filter(big => {
    for (let i = 0; i < big.orders.length; i++) {
        for ( let foo of Object.values(big.orders)){
        if (big.orders[i] > 9000) {
            document.querySelector("#filterOrder").innerHTML +=
            `<h2>Company Name: ${big.companyName}</h2>
            <h4> Orders: ${foo}</h4>
            `
        }
    }
}
})
// console.log("bigSpend", bigSpend)