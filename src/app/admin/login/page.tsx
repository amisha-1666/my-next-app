// src/app/login/page.tsx
'use client';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react'; // Imports the useState hook from React, which is needed for managing state (form inputs, response messages, etc.) within the component.



export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const res = await fetch('/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });


    }
    return (
        <>

            <section className="d-flex align-items-center justify-content-center min-vh-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6 col-lg-5">
                            <div className="card p-4 shadow-sm">
                                <div className="card-body">
                                    <div className="text-center mb-4">
                                        {/* Logo or illustration */}

                                        <h4 className="mb-0">Login to Your Account</h4>
                                    </div>

                                    <form onSubmit={handleSubmit}>
                                        <div className="form-group mb-3">
                                            <label htmlFor="email">Email Address</label>
                                            <input
                                                type="email"
                                                id="email"
                                                className="form-control"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
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
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                placeholder="Enter your password"
                                                required
                                            />
                                        </div>

                                        <button type="submit" className="btn btn-primary btn-block w-100">
                                            Login
                                        </button>
                                    </form>
                                    <div className="text-center mt-4">
                                        <p className="mb-0">
                                            Don't have an account? <a href="/admin/register">Register</a>
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
