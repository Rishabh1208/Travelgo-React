import React from 'react';
import Styled from 'styled-components';

class ContactForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        email: '',
        message: ''
      }
    }
  
  render() {
   return( 
        <ContactForms className="container">
            <div className="row">
                <div className="col-lg-8">
                <p><strong>Get in Touch</strong></p>
                <form id="contact-form" onSubmit={this.handleSubmit.bind(this)}>
                <div className="form-group">
                <label htmlFor="name">First Name</label>
                <input type="text" className="form-control" placeholder="First Name" value={this.state.name} onChange={this.onNameChange.bind(this)} />
                </div>
                <div className="form-group">
                <label htmlFor="name">Last Name</label>
                <input type="text" className="form-control" placeholder="First Name" value={this.state.name} onChange={this.onNameChange.bind(this)} />
                </div>
                <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" placeholder="Enter Email" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                </div>
                <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea className="form-control" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                </div>

                <div className="col-lg-3 offset-1">
                        <div className="media contact-info">
                            <span className="contact-info__icon"><i className="fa fa-home" style={{"fontSize":"2rem"}}></i></span>
                            <div className="media-body">
                                <h3>Laxman Zhula, Rishikesh.</h3>
                                <p>Dehradun Road, Uk 325478</p>
                            </div>
                        </div>
                        <div className="media contact-info">
                            <span className="contact-info__icon"><i className="fa fa-tablet" style={{"fontSize":"2rem"}}></i></span>
                            <div className="media-body">
                                <h3>+91 124 785 852</h3>
                                <p>Mon to Fri 9am to 6pm</p>
                            </div>
                        </div>
                        <div className="media contact-info">
                            <span className="contact-info__icon"><i className="fa fa-mail-forward" style={{"fontSize":"2rem"}}></i></span>
                            <div className="media-body">
                                <h3>support@travlego.com</h3>
                                <p>Send us your query anytime!</p>
                            </div>
                        </div>
                </div>
            </div>
        </ContactForms>
       

    
     
   );
  }
  
    onNameChange(event) {
      this.setState({name: event.target.value})
    }
  
    onEmailChange(event) {
      this.setState({email: event.target.value})
    }
  
    onMessageChange(event) {
      this.setState({message: event.target.value})
    }
  
  handleSubmit(event) {
  }
  }
  
  export default ContactForm;

  const ContactForms = Styled.div`
  strong {
      line-height: 3rem;
      font-family: 'sans-serif';
      font-size: 2rem;
  }
  .contact-info {
    padding-top: 1rem;
  }
  .contact-info__icon {
    margin-right: 1rem;
    margin-top: 0.3rem;
  }
  `