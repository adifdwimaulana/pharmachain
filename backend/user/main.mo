import TrieMap "mo:base/TrieMap";
import Principal "mo:base/Principal";
import Result "mo:base/Result";
import Debug "mo:base/Debug";

actor class User() {

  type User = {
    internet_identity : Principal;
    username : Text;
    email : Text;
  };

  // TrieMap to store users, with Principal as the key and User as the value
  let users = TrieMap.TrieMap<Principal, User>(Principal.equal, Principal.hash);  

    // Register a new user
   public shared (msg) func register(username : Text, email : Text) : async Result.Result<User, Text> {

      let user_id = msg.caller;

      Debug.print("user id : " # Principal.toText(user_id));

      if (users.get(user_id) != null) {
         return #err("User already exists");
      };

      for (user in users.vals()) {
         if (user.email != "" and user.email == email) {
            return #err("Email already exists");
         };
      };

      let user = {
        internet_identity = user_id;
        username = username;
        email = email;
      };

      users.put(user.internet_identity, user);

      return #ok(user);
   }; 

  // Function to get a user by their principal
  public query func getUser(principal : Principal) : async ?User {
      return users.get(principal);
  };


};
