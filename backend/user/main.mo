import TrieMap "mo:base/TrieMap";
import Principal "mo:base/Principal";
import Result "mo:base/Result";
import Text "mo:base/Text";
import Types "types";

actor class User() {

  type Result<Ok, Error> = Types.Result<Ok, Error>;
  type User = Types.User;

  // TrieMap to store users, with Principal as the key and User as the value
  let users = TrieMap.TrieMap<Principal, User>(Principal.equal, Principal.hash);

  public shared ({ caller }) func register() : async Result<User, Text> {
    switch (users.get(caller)) {
      case (?_) {
        return #err("User already exists");
      };

      case (null) {

        let user = {
          internet_identity = caller;
          username = "";
          email = "";
          role = "";
          address = "";
          isAuthorize = false;
        };

        users.put(caller, user);
        return #ok(user);
      };
    };
  };

  public shared ({ caller }) func updateUser(user : User) : async Result<User, Text> {
    switch (users.get(caller)) {
      case (?_) {
        users.put(caller, user);
        return #ok(user);
      };
      case (null) {
        return #err("User not found");
      };
    };
  };

  // Function to get a user by their principal
  public query func getUser(principal : Principal) : async ?User {
    return users.get(principal);
  };

};
