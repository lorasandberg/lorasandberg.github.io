import { Grid, Link } from '@mui/material';
import MailIcon from './assets/mail.svg';
import LinkedInIcon from './assets/linkedin.svg';


function ContactInfo() {



    return <>
    
        <Grid size={12} container className="contact_info" spacing={10} justifyContent={"space-around"}>
            <h2>Contact</h2>
            <Grid>
                <Grid container direction={"column"} alignItems={"center"} spacing={3}>
                    <Link href="mailto:lora.sandberg@gmail.com"><img src={MailIcon} /></Link>
                    <span>lora.sandberg@gmail.com</span>
                </Grid>
            </Grid>
            <Grid><Link href="https://www.linkedin.com/in/sandberglora/" target="_blank"><img src={LinkedInIcon} /></Link></Grid>
        </Grid>
    </>
}

export default ContactInfo;