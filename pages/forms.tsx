import { useForm } from "react-hook-form";

//Less code - v
//Better validation
//Better Errors (set, clear, display)
//Have control over inputs
//Dont deal with event -v
//Easier Inputs -v

export default function Forms() {
  const { register, handleSubmit } = useForm();
  const onValid = () => {};
  return (
    <form onSubmit={handleSubmit(onValid)}>
      <input
        {...register("username", { required: true })}
        type="text"
        placeholder="Username"
      />
      <input
        {...register("email", { required: true })}
        type="email"
        placeholder="Email"
      />
      <input
        {...register("password", { required: true })}
        type="password"
        placeholder="Password"
      />
      <input type="submit" value="Create Account" />
    </form>
  );
}
