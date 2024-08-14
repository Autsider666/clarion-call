// if (Notification.permission !== 'denied') {
//     if (Notification.permission !== 'granted') {
//         Notification.requestPermission().then((permission) => {
//             console.log(permission);
//             // If the user accepts, let's create a notification
//             if (permission === "granted") {
//                 const notification = new Notification("Hi there!", {});
//                 console.log(notification);
//             }
//         }).catch(error => console.error(error));
//     }
// }
//
// console.log({
//     maxActions: Notification.maxActions as number,
// });
