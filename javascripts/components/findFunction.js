import { businesses } from './../helpers/data/businessArray.js'


const findFunction = (businesses) => {

    const mybiz = $('#find');
    mybiz.html('<h1>Active Businesses</h1>');
    businesses.forEach(business => {
        mybiz.append(`
    <h2>${business.companyName}</h2>
    <section>
    ${business.addressFullStreet}
    </section>
    `)
    });
    mybiz.append('<hr/>')
}

$("#newCompanySearch").keypress(e => {
    console.log("clicked");
    const mybiz = $('#find');
    if (e.charCode === 13) {
        /* WHEN  USER PRESSES ENTER, FIND MATCHING BUSINESS */

        const foundBusiness = businesses.find(
            business =>
                business.companyName.includes(e.target.value)
        );


        console.log(foundBusiness);
        mybiz.html(`
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
            `);
    }
});

export { findFunction }