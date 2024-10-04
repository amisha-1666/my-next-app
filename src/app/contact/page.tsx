"use client"; // Ensures that this component is a Client Component (used in Next.js), meaning it runs on the client side and can use hooks like useState.

import { useState } from 'react'; // Imports the useState hook from React, which is needed for managing state (form inputs, response messages, etc.) within the component.

const Contact = () => {
  // Declares state variables for name, email, message, and responseMessage, all initialized to empty strings.
  const [name, setName] = useState(''); // Stores the user's input for the "name" field.
  const [email, setEmail] = useState(''); // Stores the user's input for the "email" field.
  const [message, setMessage] = useState(''); // Stores the user's input for the "message" field.
  const [responseMessage, setResponseMessage] = useState(''); // Stores the response message returned from the API after the form submission.

  // Defines the function that handles form submission. It will run when the form is submitted.
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevents the default behavior of form submission (which would reload the page). We handle the submission via JavaScript.

    // Sends a POST request to the '/api/contact' endpoint with form data in JSON format.
    const res = await fetch('/api/contact/store', {
      method: 'POST', // Specifies the HTTP method to be POST, indicating we are sending data to the server.
      headers: {
        'Content-Type': 'application/json', // Informs the server that the body of the request contains JSON data.
      },
      body: JSON.stringify({ name, email, message }), // Converts the form data (name, email, message) into a JSON string and sends it in the request body.
    });

    // Waits for the server's response, parses it as JSON, and stores the parsed result in the 'data' variable.
    const data = await res.json();
    
    // Updates the 'responseMessage' state with the message returned from the server. This message is shown to the user.
    setResponseMessage(data.message);

    // Resets the form fields by setting the 'name', 'email', and 'message' states to empty strings after a successful submission.
    setName('');
    setEmail('');
    setMessage('');
  };

  // The JSX that defines the structure and layout of the Contact form.
  return (
    <section id="contact" className="py-5"> {/* A section element with an id of 'contact' and Bootstrap padding (py-5) applied. */}
      <div className="container"> {/* A Bootstrap container to center and limit the width of the content. */}
        <h2 className="text-center mb-4">Get in Touch</h2> {/* Heading, centered using Bootstrap class, with margin-bottom (mb-4). */}
        
        <div className="row"> {/* Bootstrap row to create a grid structure with two columns. */}
          <div className="col-md-6"> {/* Left column for contact information, takes up half the row on medium+ screens. */}
            <h4>Contact Information</h4> {/* Heading for the contact information section. */}
            <p><strong>Email:</strong> contact@nextjswebsite.com</p> {/* Displays the email address. */}
            <p><strong>Phone:</strong> +123 456 7890</p> {/* Displays the phone number. */}
            <p><strong>Address:</strong> 123 Business Street, City, Country</p> {/* Displays the physical address. */}
          </div>

          <div className="col-md-6"> {/* Right column for the contact form, takes up the other half of the row. */}
            <h4>Send Us a Message</h4> {/* Heading for the contact form section. */}
            
            {/* Form element that will call handleSubmit when submitted. */}
            <form onSubmit={handleSubmit}>
              {/* Input field for the user's name, with Bootstrap styling and 'required' validation. */}
              <div className="mb-3"> {/* A div wrapper for spacing (margin-bottom). */}
                <label htmlFor="name" className="form-label">Your Name</label> {/* Label for the name input field. */}
                <input
                  type="text" // Input type is text.
                  className="form-control" // Bootstrap class for styling the input.
                  id="name" // Sets the id of the input field for accessibility.
                  value={name} // Binds the input value to the 'name' state.
                  onChange={(e) => setName(e.target.value)} // Updates the 'name' state when the user types in the input.
                  required // Ensures the field is required and cannot be submitted if empty.
                />
              </div>

              {/* Input field for the user's email, with validation for a valid email address. */}
              <div className="mb-3"> {/* Another div for form element spacing. */}
                <label htmlFor="email" className="form-label">Your Email</label> {/* Label for the email input field. */}
                <input
                  type="email" // Input type is email to enforce proper email format.
                  className="form-control" // Bootstrap styling for form inputs.
                  id="email" // Accessibility id for the email field.
                  value={email} // Binds the input value to the 'email' state.
                  onChange={(e) => setEmail(e.target.value)} // Updates the 'email' state when the user types.
                  required // Validates that the input is not empty and contains a valid email.
                />
              </div>

              {/* Textarea field for the message the user wants to send. */}
              <div className="mb-3"> {/* Wrapper for spacing. */}
                <label htmlFor="message" className="form-label">Message</label> {/* Label for the textarea field. */}
                <textarea
                  className="form-control" // Bootstrap styling for text areas.
                  id="message" // Accessibility id for the message field.
                  rows={3} // Sets the height of the textarea to 3 rows.
                  value={message} // Binds the value of the textarea to the 'message' state.
                  onChange={(e) => setMessage(e.target.value)} // Updates the 'message' state when the user types.
                  required // Ensures the textarea cannot be empty.
                ></textarea>
              </div>

              {/* Submit button that triggers form submission. */}
              <button type="submit" className="btn btn-primary">Send Message</button> {/* Button with Bootstrap primary styling. */}
            </form>

            {/* Conditionally renders a success message below the form if 'responseMessage' contains a value. */}
            {responseMessage && ( /* Checks if responseMessage has a value. If true, the following block is rendered. */
              <div className="mt-3 alert alert-success"> {/* Shows an alert with Bootstrap success styling. */}
                {responseMessage} {/* Displays the success message from the server response. */}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; // Exports the Contact component so it can be used in other parts of the app.
