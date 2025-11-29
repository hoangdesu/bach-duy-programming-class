// import Image from "next/image";

export default function LoginPage() {
  return (
    <div>
      <h1>Login</h1>

      <form action='http://localhost:3001/login' method='POST'>
        <div>
          <label htmlFor='uname'>Username: </label>
          <input type='text' id='uname' name='username' />
        </div>
        <div>
          <label htmlFor='pwd'>Password: </label>
          <input type='password' id='pwd' name='password' />
        </div>
        <button>Login</button>
      </form>
    </div>
  );
}
