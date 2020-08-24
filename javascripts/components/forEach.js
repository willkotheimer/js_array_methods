import { businesses } from './../helpers/data/businessArray.js'

const foreachfunction = (businesses) => {

    const mybiz = $('#foreach');
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

$("#companySearch").keyup(e => {

    const search = e.target.value;

    //Filter worked better than find() on what we wanted to do, which was to search the array by criteria.

    const result = businesses.filter(business => business.companyName.includes(search));

    if (result) {
        const mybiz = $('#foreach');
        mybiz.html('<h1>Active Businesses</h1>');
        result.forEach(bus => {
            mybiz.append(`
        <h2>
        ${bus.companyName}
        </h2>
        <section>
        ${bus.addressFullStreet}
        </section>
        <section>
        ${bus.addressCity},
        ${bus.addressStateCode}
        ${bus.addressZipCode}
        </section>
    `)
        });
    } else {
        foreachfunction(businesses);
    }
});

export { foreachfunction }