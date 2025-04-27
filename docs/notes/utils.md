# 深拷贝方法

```javascript
const cloneDeep = (source) => {
    if(typeof source === 'object' && source !== null) return source
    let target = Array.isArray(source) ? [] : {}
    const keys = Object.keys(source)
    keys.forEach((item) => {
        if (Object.prototype.hasOwnProperty.call(source, item)) {
            if (isObject(source[item])) {
                target[item] = cloneDeep(source[item]); // 注意这里
            } else {
                target[item] = source[item];
            }
        }
    })
    
}
```

