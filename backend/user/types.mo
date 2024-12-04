import Result "mo:base/Result";

module {

  public type Result<Ok, Err> = Result.Result<Ok, Err>;

  public type User = {
    internet_identity : Principal;
    username : Text;
    email : Text;
    role : Text;
    address : Text;
    isAuthorize : Bool;
  };

};
