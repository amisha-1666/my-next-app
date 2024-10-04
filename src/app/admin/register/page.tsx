// src/app/register/page.tsx
import Head from 'next/head';
import Image from 'next/image';

export default function Register() {
  return (
    <>
      <Head>
        <title>Register - Your Site Name</title>
        <meta name="description" content="Create a new account" />
      </Head>

      <section className="d-flex align-items-center justify-content-center min-vh-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-5">
              <div className="card p-4 shadow-sm">
                <div className="card-body">
                  <div className="text-center mb-4">
                    {/* Logo or illustration */}
                    <Image 
                      src="/images/logo.png" 
                      alt="Logo" 
                      width={100} 
                      height={100} 
                      className="mb-3" 
                    />
                    <h4 className="mb-0">Create a New Account</h4>
                  </div>

                  <form>
                    <div className="form-group mb-3">
                      <label htmlFor="name">Full Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="form-control" 
                        placeholder="Enter your full name" 
                        required 
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="email">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="form-control" 
                        placeholder="Enter your email" 
                        required 
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="password">Password</label>
                      <input 
                        type="password" 
                        id="password" 
                        className="form-control" 
                        placeholder="Enter your password" 
                        required 
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="confirmPassword">Confirm Password</label>
                      <input 
                        type="password" 
                        id="confirmPassword" 
                        className="form-control" 
                        placeholder="Confirm your password" 
                        required 
                      />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block w-100">
                      Register
                    </button>
                  </form>
                  <div className="text-center mt-4">
                    <p className="mb-0">
                      Already have an account? <a href="/admin/login">Login</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
