import { FacebookIcon } from "../icons/FBIcon";
import { InstagramIcon } from "../icons/InstaIcon";
import { LinkedInIcon } from "../icons/LinkedInIcon";
import { PinterestIcon } from "../icons/PinterestIcon";
import { RedditIcon } from "../icons/RedditIcon";
import { SpotifyIcon } from "../icons/SpotifyIcon";
import { TwitterIcon } from "../icons/TwitterIcon";
import { YouTubeIcon } from "../icons/YoutubeIcon";
import { SidebarItem } from "./SideBarItem";
import { HomeIcon } from "../icons/HomeIcon"

export function SideBar(){
    return <div className='h-screen bg-white border-r-2 border-grayBorder w-72 fixed left-0 top-0 rounded-md'>
        <div className='mb-2 flex items-center'>
            <img src="https://img.icons8.com/?size=100&id=VC6klGoOCGJJ&format=png&color=000000" className='w-20 h-20 m-2 mr-4' ></img>
            <h1 className="font-mono text-3xl">Brainly</h1>
        </div>
        <div>
            <SidebarItem icon={<HomeIcon size={'xl'} />} text={'Home'} onclick=''/>
            <SidebarItem icon={<TwitterIcon size={'xl'} />} text={'Twitter'} onclick='twitter' />
            <SidebarItem icon={<LinkedInIcon size={'xl'} />} text={'LinkedIn'} onclick='linkedin' />
            <SidebarItem icon={<YouTubeIcon size={'xl'} />} text={'Youtube'} onclick='youtube' />
            <SidebarItem icon={<SpotifyIcon size={'xl'} />} text={'Spotify'} onclick='spotify' />
            <SidebarItem icon={<InstagramIcon size={'xl'} />} text={'Instagram'} onclick='instagram' />
            <SidebarItem icon={<FacebookIcon size={'xl'} />} text={'Facebook'} onclick='facebook' />
            <SidebarItem icon={<RedditIcon size={'xl'} />} text={'Reddit'} onclick='reddit' />
            <SidebarItem icon={<PinterestIcon size={'xl'} />} text={'Pinterest'} onclick='pinterest' />
        </div>
        
    </div>
}