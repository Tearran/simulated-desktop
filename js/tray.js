document.addEventListener('DOMContentLoaded', function() {
        // Get the time section element
            var timeSection = document.getElementById('time-section');
    
            // Function to update the time
            function updateTime() {
                var now = new Date();
                var hours = now.getHours();
                var minutes = now.getMinutes();
                var seconds = now.getSeconds();
    
                // Convert to 12-hour format
                var ampm = hours >= 12 ? 'PM' : 'AM';
                hours = hours % 12;
                hours = hours ? hours : 12; // the hour '0' should be '12'
    
                // Format the time as HH:MM:SS AM/PM
                var timeString = [
                    hours.toString().padStart(2, '0'),
                    minutes.toString().padStart(2, '0'),
                    seconds.toString().padStart(2, '0')
                ].join(':') + ' ' + ampm;
    
                // Update the time section with the current time
                timeSection.textContent = timeString;
            }
    
            // Update the time immediately
            updateTime();
    
            // Update the time every second
            setInterval(updateTime, 1000);
    
    });