function performPurchase(user, value) {
    if (user.balance >= value) {
        var newUser = user;
        newUser.balance -= value;
        return newUser;
    }
    return undefined;
}
var user = {
    name: "Teste",
    balance: 10
};
console.log(performPurchase(user, 5));
