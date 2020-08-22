
const myPurchaseAgents = (businesses) => {

    const agents = $("#purchasingAgents")
    agents.html('<h1>Purchasing Agents</h2>');
    const purchasingAgents = businesses.map(business => {
        return business.purchasingAgent;
    });

    console.table(purchasingAgents);

    const myPurchaseAgents = businesses.map((agent) => {
        return {
            "fullName": agent.purchasingAgent.nameFirst + " " + agent.purchasingAgent.nameLast,
            "company": agent.companyName,
            "phoneNumber": agent.phoneWork,
        }
    }

    );
    myPurchaseAgents.forEach(myagent => {
        agents.append(`
        <section>
        <div>${myagent['fullName']}</div>
        <div>${myagent['company']}</div>
        <div>${myagent['phoneNumber']}</div>
        </section>`);

    });



    console.table(myPurchaseAgents);

    agents.append(myPurchaseAgents);
}

export { myPurchaseAgents }