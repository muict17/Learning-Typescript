const object: Object = {};
console.log(object);
object["name1"] = "Test";
object["name2"] = "AAA";

const arrayObject: Array<any> = [];
arrayObject.push({ address: "my Address1", name: "Test1" });
arrayObject.push({ name: "Test2", address: "my Address2" });
arrayObject.push({ name: "Test3", address: "my Address3" });

// plain point

const plainArray: Array<any> = [];

arrayObject.push(["Test1", "my Address1"]);
arrayObject.push(["my Address2", "Test2"]);
