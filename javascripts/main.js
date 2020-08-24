import { businesses } from './helpers/data/businessArray.js';
import { foreachfunction } from './components/forEach.js';
import { filteroutNY } from './components/filterFunctions.js';
import { myPurchaseAgents } from './components/mapFunction.js';
import { findFunction } from './components/findFunction.js';

const init1 = () => {

    foreachfunction(businesses);
    filteroutNY(businesses);
    myPurchaseAgents(businesses);
    findFunction(businesses);
}


init1();

//https://github.com/nss-evening-cohort-13/homework/blob/master/week07/JS_ARRAY_METHODS.md