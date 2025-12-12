export default function SignupPage() {
  return (
    <div>
      <h1>Signup</h1>

      <form action='http://localhost:3001/signup' method='POST'>
        <div>
          <label htmlFor='uname'>Username: </label>
          <input type='text' id='uname' name="username" />
        </div>
        <div>
          <label htmlFor='pwd'>Password: </label>
          <input type='password' id='pwd' name="password" />
        </div>
        <button>Sign up</button>
      </form>
    </div>
  );
}
