function PriceBox(props) {
    return(
        <div className='priceBox robotoMonoFont m-0 w-full bg-white h-12'>
            <h1 id="priceTitle">{props.title}</h1>
            <p id="priceAmt">{props.amtDollar}<a>{props.amtCoin}</a></p>
            <p id="priceDesc">{props.desc}</p>
            <p id="priceProCons">✔ {props.pro1}</p>
            <p id="priceProCons">✔ {props.pro2}</p>
            <p id="priceProCons">✘ {props.con1}</p>
            <p id="priceProCons">✘ {props.con2}</p>
                {/* cons are what the subscription doesnt offer / why the
            next pricey one is better*/}
        </div>
    )
}

export default PriceBox;