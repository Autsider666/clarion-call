export async function getRegistration(): Promise<ServiceWorkerRegistration | undefined> {
    return navigator.serviceWorker.getRegistration();
}