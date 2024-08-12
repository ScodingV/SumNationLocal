import React from 'react';
import PriceBox from '../components/PriceBox';

function Pricing() {
     return (
        <>
        <div class="priceHeaderTitle priceHeadBox">
             <h1>Our Options</h1>
        </div>
        <div className="priceFont grid grid-cols-3 gap-20">
            <PriceBox title="Monthly" amtDollar="$5" amtCoin=".00"
                desc="this is honestly greatest decision you'll ever make"
                pro1="amazing benefit #1" pro2="amazing benefit #2"
                con1="smth we dont offer :(" con2="smth we dont offer :(" />

            <PriceBox title="Yearly" amtDollar="$42" amtCoin=".00"
                desc=" this is honestly a better decision you could make"
                pro1="amazing benefit #1" pro2="amazing benefit #2"
                con1="smth we dont offer :(" con2="smth we dont offer :(" />

            <PriceBox title="Lifetime" amtDollar="$100" amtCoin=".00"
                desc="a life saver for a lifetime??? how could you not buy this"
                pro1="amazing benefit #1" pro2="amazing benefit #2"
                con1="no con, this option is superior" con2="no con, this option is superior" />
        </div>
        </>
    );
}

export default Pricing;