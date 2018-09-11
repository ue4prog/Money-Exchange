// PLEASE DON'T change function name
const currencies  = ['H', 'Q', 'D', 'N', 'P'];
module.exports = function makeExchange(currency) {
    if (currency <= 0 || currency >= 10000) {
        return currency <= 0 ? {} : {error: "You are rich, my friend! We don't have so much coins for exchange"}
    }
    return [50, 25, 10, 5, 1].reduce((acc, coin, index) => {
        while (currency - coin >= 0) {
            acc[index]++;
            currency -= coin;
        }
        return acc;
    }, [0, 0, 0, 0, 0]).reduce((acc, coins, index) => {
        if (coins !== 0) {
            acc[currencies[index]] = coins
        }
        return acc
    },{})
}
