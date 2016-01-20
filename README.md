node-mojang
===========
> A node.js wrapper for Mojang's API.

This is a simple wrapper for Mojang's HTTP API for Minecraft.  Access and interact with Mojang through this library that offers a Node-esque interface.

## Installation
```shell
$ npm install mojang
```

## Usage
```javascript
import mojang from 'mojang';

mojang.username('jamen')
.then(uuid => mojang.profile(uuid))
.then(function(profile) {
  console.log(profile);
  // ...
});
```

## Docs & Support
 - [GitHub Wiki](https://github.com/jamen/node-mojang/wiki)
 - [Repo Issues](https://github.com/jamen/node-mojang/issues)
 - [Authors](#Credits)

## Credits

|![Jamen Marz][jamen-image]|
|:--------:|
| [@jamen] |

## License
[MIT][license] &copy; Jamen Marzonie

<!-- All links must be "tagged" -->
 [example-badge]: https://img.shields.io/badge/example-badge-green.svg
 [foobar-badge]: https://img.shields.io/badge/foobar-baz-green.svg

 [@jamen]: https://github.com/jamen
 [jamen-image]: https://avatars2.githubusercontent.com/u/6251703?v=3&s=125

 [license]: LICENSE
