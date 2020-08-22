import { businesses } from '../helpers/data/businessArray.js';

const foreachfunction = (businesses) => {

    const mybiz = $('#filterbusinesses');
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


export { foreachfunction }