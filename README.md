# rle-serializers
Serialize and Deserialize Run Length Encoding Data

# usage
## basic csv serialization
```javascript
import serialize_basic_csv from 'rle-serializers/serialize_basic_csv';

const csv = serialize_basic_csv([5, 3, 1, 8, 2, 0]);
//5,3,1,8,2,0
```

## basic csv deserialization
```javascript
const data = deserialize_basic_csv("5,3,1,8,2,0");
// [5, 3, 1, 8, 2, 0]
```

## enhanced csv serialization
```javascript
import serialize_advanced_csv from 'rle-serializers/serialize_advanced_csv';

const csv = serialize_advanced_csv([5, 3, 1, 8, 2, 0]);
//3x5,8,0x2
```

## enhanced csv deserialization
```javascript
import deserialize_advanced_csv from 'rle-serializers/serialize_advanced_csv';

const data = deserialize_advanced_csv("3x5,8,0x2");
// [5, 3, 1, 8, 2, 0]
```

# support
Post an issue at https://github.com/danieljdufour/rle-serializers/issues
