let strings = [];

// no-empty-collection reports an issue here. This is ok because the
// code below "expands" to `strings[1] = strings[1] || "foo"` and the
// 2nd `strings[1]` is noncompliant:
strings[0] = "foo";


// no-empty-collection reports an issue here. This is wrong because at
// this point strings[1] contains "foo":
if (strings[0]) {
  // Same here. Executing this program prints "foo" further confirming
  // that the `if` statement above is correct:
  console.log(strings[0]);
}
