import Heading from "../ui/Heading";
import SignupForm from "../features/authentication/SignupForm";

function NewUsers() {
  return (
    <>
      <Heading as="h1" className="font-bold text-5xl">
        Create a new user
      </Heading>
      <SignupForm />
    </>
  );
}

export default NewUsers;
