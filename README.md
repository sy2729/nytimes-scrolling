# Use the New York Times story telling effects on your websote

###Usage: 

* This library is based on jQuery, so please first inclue the jQuery library:
```
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
```
* The inlcude the bundle.js after the jQuery Library;
```
<script src="./index.js"></script>
```

* simply prepare your data in the following form: 
```
let data = [
    {
        bgUrl: 'xxxx',
        text: [
            {
                title: 'yyy',
                paragraph: 'zzz'
            }
        ]
    },
    {
        bgUrl: 'xxxx',
        text: [
            {
                title: 'yyy',
                paragraph: 'zzz'
            }
        ]
    },
    ...
]
```

* And create a `.box` element in your html page to wrap the data you're goning to insert in, then apply the function: 
```
createStructure($('.box')[0], data)
```

