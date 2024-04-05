import { Link } from "react-router-dom";
import Nav from "../shared/Nav";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
      const {signIn} = useContext(AuthContext);

    const handleLogin = e =>{
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        // console.log(form.get('password'));
        console.log(email, password);
        signIn(email, password)
        .then(result =>{
          console.log(result.user)
        })
        .catch(error=>{
          console.error(error)
        })
    }
  return (
    <div className=" ">
      <Nav></Nav>
        <h2 className="text-3xl my-10 text-center">Please Login</h2>
          <div className="shrink-0 w-full max-w-sm shadow-2xl  flex items-center justify-center bg-base-100 border lg:ml-[400px]">
            <form onSubmit={handleLogin} className="card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button  className="btn btn-primary">Login</button>
              </div>
              <p className="text-center mt-4 ">Do not have an account? <Link to='/register'> <span className="text-blue-600">Register Now</span></Link></p>
            </form>
            
          </div>
     
    
    </div>
  );
};

export default Login;
