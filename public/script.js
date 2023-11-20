const dfMessenger = document.querySelector('df-messenger');

function findUserLocation() {
    return new Promise((resolve, reject) => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(function (success) {
                const userLatitude = success.coords.latitude;
                const userLongitude = success.coords.longitude;
                console.log(`Location found: ${userLatitude}, ${userLongitude}`);

                dfMessenger.setQueryParameters({
                    payload: {
                        latitude: userLatitude,
                        longitude: userLongitude
                    }
                });

                resolve();
            }, function (error) {
                console.error(`Error occurred: ${error.message}`);
                reject(error);
            });
        } else {
            console.error('Geolocation is not supported by this browser.');
            reject('Geolocation not supported');
        }
    });
}

findUserLocation().catch(error => console.error('Error fetching location:', error));
