import React from 'react'
import { FaInstagram, FaYoutube, FaFacebook, FaGitSquare, FaLinkedin } from "react-icons/fa"
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <div class="bg-dark mt-5">
            <div class="container">
                <footer class="py-3 ">
                    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                        <li class="nav-item"><Link to="/" class="nav-link px-2 text-muted">Home</Link></li>
                        <li class="nav-item"><Link to="/contact" class="nav-link px-2 text-muted">Contact Us</Link></li>
                        <li class="nav-item"><Link to="/about" class="nav-link px-2 text-muted">About</Link></li>
                        <li class="nav-item"><Link to="/policy" class="nav-link px-2 text-muted">Terms and Policy</Link></li>
                    </ul>
                    <div class="d-flex justify-content-between py-4">
                        <p className='text-muted'>© 2022 Kamal Hossain. All rights reserved.</p>
                        <ul class="list-unstyled d-flex">
                            <li class="ms-3"><a target='_blank' class="text-muted" href="https://www.instagram.com/Kamalhossain09"><FaInstagram /></a></li>
                            <li class="ms-3"><a target='_blank' class="text-muted" href="https://github.com/Kamalhossain24"><FaGitSquare /></a></li>
                            <li class="ms-3"><a target='_blank' class="text-muted" href="https://www.facebook.com/KamalHossain09"><FaFacebook /></a></li>
                            <li class="ms-3"><a target='_blank' class="text-muted" href="https://www.youtube.com/c/TheKamal"><FaYoutube /></a></li>
                            <li class="ms-3"><a target='_blank' class="text-muted" href="https://www.linkedin.com/in/kamalhossain24"><FaLinkedin /></a></li>

                        </ul>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Footer