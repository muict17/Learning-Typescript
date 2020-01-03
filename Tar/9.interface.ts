interface UserInfo {
  name: string;
  lastName: string;
  birthDate: string;
}

interface UserInfoWithAddress {
  userInfo: UserInfo;
  address: string;
}
function addDefaultAddress(userInfo: UserInfo): UserInfoWithAddress {
  return {
    userInfo,
    address: "default"
  };
}

const userOne: UserInfo = { name: "test", lastName: "last", birthDate: "29" };

console.log(addDefaultAddress(userOne));
