function Contact(){
    return (
        <div>
            <section id="contact" className="contact">
                <h2 className="contact-header">Want to contact me?</h2>
                
                <div className="contact-links">
                <a
                href="https://facebook.com/"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
                ><i className="fab fa-facebook-square"></i> Facebook</a>
                
                <a
                href="https://twitter.com/"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
                ><i className="fab fa-twitter"></i> Twitter</a>
                
                <a href="mailto:Alch4ize@gmail.com" className="contact-link"
                ><i className="fas fa-at"></i> Send a mail</a>
                
                <a
                href="https://github.com/Alchaize"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
                ><i className="fab fa-github"></i> GitHub</a>
                
                </div>
        </section>
    </div>
    )
}

export default Contact;