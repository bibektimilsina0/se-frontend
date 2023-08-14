function Esewa() {
    return (<div>
        <form action="https://uat.esewa.com.np/epay/main" method="POST">
            <input value="1000" name="tAmt" type="hidden" />
            <input value="900" name="amt" type="hidden" />
            <input value="0" name="txAmt" type="hidden" />
            <input value="0" name="psc" type="hidden" />
            <input value="100" name="pdc" type="hidden" />
            <input value="EPAYTEST" name="scd" type="hidden" />
            <input value="ee2c3ca1-696b-4cc5-a6be-2c40d929d453" name="pid" type="hidden" />
            <input value="http://merchant.com.np/page/esewa_payment_success?q=su" type="hidden" name="su" />
            <input value="http://merchant.com.np/page/esewa_payment_failed?q=fu" type="hidden" name="fu" />
            <input value="Submit" type="submit" />
        </form>
    </div>);
    
}

export default Esewa;