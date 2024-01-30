
document.addEventListener('DOMContentLoaded', function() {
// Array of objects for the desktop items
var items = [
    {icon: 'fas fa-home', name: 'Home', link: 'https://www.example.com/home'},
    {icon: 'fas fa-user', name: 'Profile', link: 'https://www.example.com/profile'},
    {icon: 'fas fa-envelope', name: 'Messages', link: 'https://www.example.com/messages'},
    {icon: 'fas fa-comment', name: 'Comments', link: 'https://www.example.com/comments'},
    {icon: 'fas fa-cog', name: 'Settings', link: 'https://www.example.com/settings'},
    {icon: 'fab fa-github', name: 'GitHub', link: 'https://www.github.com'},
    {icon: 'fab fa-linkedin', name: 'LinkedIn', link: 'https://www.linkedin.com'},
    {icon: 'fab fa-deviantart', name: 'DeviantArt', link: 'https://www.deviantart.com'},
    {icon: 'fab fa-discord', name: 'Discord', link: 'https://www.discord.com'},
    {icon: 'fab fa-instagram', name: 'Instagram', link: 'https://www.instagram.com'},
    {icon: 'fab fa-facebook', name: 'Facebook', link: 'https://www.facebook.com'},
    {icon: 'fab fa-twitter', name: 'Twitter', link: 'https://www.twitter.com'},
    {icon: 'fab fa-twitch', name: 'Twitch', link: 'https://www.twitch.tv'},
    {icon: 'fab fa-youtube', name: 'YouTube', link: 'https://www.youtube.com'},
    {icon: 'fab fa-reddit', name: 'Reddit', link: 'https://www.reddit.com'},
    {icon: 'fab fa-pinterest', name: 'Pinterest', link: 'https://www.pinterest.com'},
    {icon: 'fab fa-snapchat', name: 'Snapchat', link: 'https://www.snapchat.com'},
    {icon: 'fab fa-tumblr', name: 'Tumblr', link: 'https://www.tumblr.com'},
    {icon: 'fab fa-vine', name: 'Vine', link: 'https://www.vine.com'},
    {icon: 'fab fa-whatsapp', name: 'WhatsApp', link: 'https://www.whatsapp.com'},
    {icon: 'fab fa-skype', name: 'Skype', link: 'https://www.skype.com'},
    {icon: 'fab fa-steam', name: 'Steam', link: 'https://www.steampowered.com'},
    {icon: 'fab fa-soundcloud', name: 'SoundCloud', link: 'https://www.soundcloud.com'},
    {icon: 'fab fa-spotify', name: 'Spotify', link: 'https://www.spotify.com'},
];

// Get the desktop element
var desktop = document.getElementById('desktop');

// Loop over the items array
for (var i = 0; i < items.length; i++) {
    // Create a new div for the desktop item
    var item = document.createElement('div');
    item.className = 'desktop-item';

    // Create a new i element for the icon
    var icon = document.createElement('i');
    icon.className = items[i].icon + ' fa-3x'; // Add the FontAwesome class and the 'fa-3x' class to make the icon 3x size

    // Create a new span element for the name
    var name = document.createElement('span');
    name.textContent = items[i].name;

    // Add the icon and name to the desktop item
    item.appendChild(icon);
    item.appendChild(name);

    // Add the desktop item to the desktop
    desktop.appendChild(item);

    // Use an IIFE to capture the current value of i
    (function(i) {
        // Add a click event listener to the desktop item
        item.addEventListener('click', function() {
            // Navigate to the link when the desktop item is clicked
            window.location.href = items[i].link;
        });
    })(i);
}

console.log(icon); // Should log an HTML element with the tag name 'i'
item.appendChild(icon);

console.log(name); // Should log an HTML element with the tag name 'span'
item.appendChild(name);

console.log(item); // Should log an HTML element with the tag name 'div'
desktop.appendChild(item);
});