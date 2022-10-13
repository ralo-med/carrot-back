import { useForm } from "react-hook-form";

//Less code - v
//Better validation
//Better Errors (set, clear, display)
//Have control over inputs
//Dont deal with event -v
//Easier Inputs -v

export default function Forms() {
  const { register, watch } = useForm();
  return (
    <form>
      <input
        {...register("username")}
        type="text"
        placeholder="Username"
        required
      />
      <input {...register("email")} type="email" placeholder="Email" required />
      <input
        {...register("password")}
        type="password"
        placeholder="Password"
        required
      />
      <input type="submit" value="Create Account" />
    </form>
  );
}
