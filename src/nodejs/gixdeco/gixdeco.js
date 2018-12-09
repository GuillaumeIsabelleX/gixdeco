
var tlid = require('tlid');

// gixdeco.js
// ========
module.exports = {
    /**
     * Extract the decorator
     */
    get: function (str) {


        return extractDecorator2(str)
            ;
    },
    /**
  * Extract decorator as structured object
  */
    geto: function (str) {

        var reSTCDeco = /((@[a-zA-Z0-9._-]+))/g;

        var tlido = tlid.xtro(str);


        var r = new Object();

        //   r.tlido = tlido;
        r.tlid = tlido.tlid;

        var decorator =
            this.get(tlido.txt);

        r.deco = decorator;
        r.src = str;

        r.txt = this.cleanDecorator(decorator, tlido.txt);

        return r;
    },
    cleanDecorator: function (decorator, txt) {
        return txt
            .replace('@' + decorator + "  ", "")
            .trim()
            ;
    }
};


var reSTCDeco = /((@[a-zA-Z0-9._-]+))/g;

function extractDecorator2(text) {
    try {
        var email =
            text.match(reSTCDeco);
        console.log("DEBUG: reSTCDeco:" + email);
        var deco = email[0].split('@')[1];
        return deco;

    } catch (error) {
        return "";
    }
    // return text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
}