import { businesses } from './helpers/data/businessArray.js'
import { foreachfunction } from './components/forEach.js'
import { filteroutNY } from './components/filterFunctions.js'

const init1 = () => {

    foreachfunction(businesses);
    filteroutNY(businesses);

}


init1();