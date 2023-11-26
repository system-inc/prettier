# Changes in @system-inc/prettier

This fork of prettier has been modified for JavaScript and TypeScript to change this:

```
if (condition) {
} else if(condition)
```

to this:

```
if(condition) {
}
else if(condition) {
}
```

# Publishing to NPM:

npm run build
cd dist
npm publish
