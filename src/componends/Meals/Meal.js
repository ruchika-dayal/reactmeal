import { Fragment } from "react";
import Mealavability from "./MealAvability";

import MealsSummary from "./MealSummary";

const Meal =()=>{
    return <Fragment>
        <MealsSummary/>
        <main>
            <Mealavability/>
            
        </main>

</Fragment>
};
export default Meal;