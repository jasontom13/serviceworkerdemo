var title = "Application Approval";
var body = ""
var icon='/assets/images/amexicon192.png';
var tag='global-apply-for-card';

self.addEventListener('push', function(event){
    var payload = event.data ? event.data.text() : 'no payload';
    console.log("Push Notification Received");
    console.log(event);

    event.waitUntil(
        self.registration.showNotification(title, {
            body: "Please review pending application.",
            icon: icon,
            tag: tag
        })
    );
});

self.addEventListener('notificationClick', function(event){
    console.log("notification clicked");
    event.notification.close();
    event.waitUntil(self.clients.openWindow("http://localhost:3001"));
})