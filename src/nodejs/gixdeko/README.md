# gixdeko

@stcgoal Extract decorator from string and generate a structural hierarchy of object from the parsing

## Goal ##
* Transforming simple text having a basic decorated token language 
* Serve a resulting object to interfaces, routing so they could integrate and do a loading @action.  By implication, if you get the picture, it creates a loadable object just before an end-result or a phasing. 
* To summarize it, you decorate your code with your intentions and your observations in relation to that intention.
* Using package [tlid](), the resulting object is enriched from it.  
```sh
#https://www.npmjs.com/package/tlid
npm i tlid --save
```
 [tlid](https://www.npmjs.com/package/tlid)
## Limitation of the scope ##
* It has no intention to create an end-result (ie. a structural charting), rather, its purpose is to extract, transform and propose a loadable form of structured object

## Extendability ##
### 

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
    @v Serve a resulting object to interfaces, routing so they could integrate and do a loading @action.  By implication, if you get the picture, it creates a loadable object just before an end-result or a phasing. 190114
      @a 
      @a ...1100 
      @cr 190112 Indentation of next line is detected only when deco
    
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
