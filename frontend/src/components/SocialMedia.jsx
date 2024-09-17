import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { IconButton } from '@mui/material';

function SocialMedia() {
    return(
        <div className="py-2 flex gap-4 justify-center">
            <IconButton href="https://www.linkedin.com/in/catherine-potung-chow/" target="_blank">
                <LinkedInIcon />
            </IconButton>
            <IconButton href="mailto:cathchow@seas.upenn.edu" target="_blank">
                <EmailIcon />
            </IconButton>
            <IconButton href="https://github.com/Cath3333" target="_blank">
                <GitHubIcon />
            </IconButton>
            <IconButton href="https://www.instagram.com/ca.th.chow/" target="_blank">
                <InstagramIcon />
            </IconButton>
        </div>
    );
}
export default SocialMedia;