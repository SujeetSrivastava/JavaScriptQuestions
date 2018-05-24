function amort(perc_rate, bal, term, num_payments) {
    let perc_rate = rate / 1200;
    let payment = perc_rate * bal / (1 - Math.pow(1 + perc_rate, -term));
    let comp = Math.pow(1 + perc_rate, num_payments - 1);
    let int = perc_rate * bal * comp - payment * (comp - 1);
    let princ = payment - int;
    let balance = int / perc_rate - princ;
    
    return `num_payment ${num_payments} `
        + `c ${payment.toFixed(0)} `
        + `princ ${princ.toFixed(0)} `
        + `int ${int.toFixed(0)} `
        + `balance ${balance.toFixed(0)}`;
}