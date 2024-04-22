var PasswordGenerator = /** @class */ (function () {
    function PasswordGenerator(length, charset) {
        this.length = length;
        this.charset = charset;
    }
    PasswordGenerator.prototype.generate = function () {
        var password = '';
        for (var i = 0; i < this.length; i++) {
            var randomIndex = Math.floor(Math.random() * this.charset.length);
            password += this.charset[randomIndex];
        }
        return password;
    };
    return PasswordGenerator;
}());
// Exemplo de uso
var generator = new PasswordGenerator(12, 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*');
var password = generator.generate();
console.log(password);
