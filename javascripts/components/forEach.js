import { businesses } from './../helpers/data/businessArray.js'
import { sortByName } from './sortingMethods.js'

const foreachfunction = (businesses) => {

    const mybiz = $('#foreach');
    mybiz.html('<h1>Active Businesses</h1>');

    sortByName(businesses, 'addressStateCode').reverse().forEach(business => {
        let totalOrders = business.orders.reduce(
            (currentTotal, nextValue) => currentTotal += nextValue,
            0);
        mybiz.append(`
    <h2>${business.companyName}
    ($${totalOrders.toFixed(2)})
    </h2>
    <section>
    ${business.addressFullStreet}
    ${business.addressStateCode}
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
        sortByName(result, 'companyName').reverse().forEach(bus => {
            let totalOrders = bus.orders.reduce(
                (currentTotal, nextValue) => currentTotal += nextValue,
                0);
            mybiz.append(`
        <h2>
        ${bus.companyName}
        ($${totalOrders.toFixed(2)})
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