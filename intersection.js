//Intersection
 // Find the intersection of two arrays. An intersection would be the common elements that exists
 // within both arrays. In this case, these elements should be unique!
 // HashMap is a Map based collection class that is used for storing Key & value pairs,
 //  it is denoted as HashMap<Key, Value> or HashMap<K, V>.
 //  This class makes no guarantees as to the order of the map.
 //  It is similar to the Hashtable class except that it is unsynchronized
 //   and permits nulls(null values and null key).

 let firstArray = [2, 2, 4, 1];
 let secondArray = [1, 2, 0, 2];

intersection(firstArray, secondArray); // [2, 1]

function intersection (firstArray, secondArray) {
  // The logic here is to create a hashmap with the elements of the firstArray as the keys.
  // After that, you can use the hashmap's O(1) look up time
  // to check if the element exists in the hash
  // If it does exist, add that element to the new array.

  let hashmap = {};
  let intersectionArray = [];

  firstArray.forEach(function(element) {
    hashmap[element] = 1;
  });

  // Since we only want to push unique elements in our case...
  // we can implement a counter to keep track of what we already added
  secondArray.forEach(function(element) {
    if (hashmap[element] === 1) {
      intersectionArray.push(element);
      hashmap[element]++;
    }
  });

  return intersectionArray;

  // Time complexity O(n), Space complexity O(n)
}

console.log(intersection (firstArray, secondArray))
