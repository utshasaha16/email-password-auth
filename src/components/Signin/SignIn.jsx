import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase.init";
import { Link } from "react-router-dom";

const SignIn = () => {
    const [success, setSuccess] = useState(false);
    const [signInError, setSignInError] = useState('')

    const handleSignIn = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        // sign in status
        setSuccess(false);
        setSignInError('');

        // login user
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            console.log(result.user);
            setSuccess(true)
        })
        .catch(error => {
            console.log("ERROR", error.message);
            setSignInError(error.message)
        })

    }

  return (
    <div className="hero bg-base-200 py-9">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSignIn} className="card-body">
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
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          {
            success && <p className="text-green-600 text-center">successfully sign in</p>
          }
          {
            signInError && <p className="text-red-600 text-center">{signInError}</p>
          }
          <p className="p-5 text-center">New To The website please <Link to="/signUp">Sign Up</Link></p>
        </div>
    </div>
  );
};

export default SignIn;
