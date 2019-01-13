# gixdeko
@stcgoal Extract decorator from string

## Install ##
```bash
#!/bin/bash
npm i gixdeko --save
```

## Usage ##

```javascript
var gixdeko = require('gixdeko');

var
    textDeco = `
    @v 1812090529 A Goal I have is to get out an Object I can publish and use from anywhere in the system helping information consistency and keeps flexibility
     @a 190112 My Action
     @a 190112 My Action
     @cr 190112 Where are we in relationship to that goal
    
    `;



console.log(gixdeko.xtro(textDeco));
```

## sample results ##

```json
	[{
			"indent": 1,
			"deco": "cr",
			"src": " @cr A related to previous reality...",
			"txt": "A related to previous reality..."
        },
         {
			"indent": 0,
			"deco": "a",
			"src": "@a 190113 do that....",
			"tlido": {
				"tlid": "190113",
				"src": "@a 190113 do that....",
				"txt": "@a do that...."
			},
			"tlid": "190113",
			"txt": "do that...."
        },
         {
			"indent": 1,
			"deco": "cr",
			"src": " @cr rel to do that    ",
			"txt": "rel to do that"
        }
        
 ```
