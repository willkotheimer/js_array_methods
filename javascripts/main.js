import { businesses } from './helpers/data/businessArray.js'
import { foreachfunction } from './components/forEach.js'
import { filteroutNY } from './components/filterFunctions.js'
import { myPurchaseAgents } from './components/mapFunction.js'

const init1 = () => {

    foreachfunction(businesses);
    filteroutNY(businesses);
    myPurchaseAgents(businesses);

}


init1();