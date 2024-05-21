import {cert, getApps, initializeApp} from 'firebase-admin/app';

export default function firebaseServer(appName) {
    const {
        type,
        projectId,
        privateKeyId,
        privateKey,
        clientEmail,
        clientId,
        authUri,
        tokenUri,
        authProviderX509CertUrl,
        clientX509CertUrl,
        universeDomain,
    } = useRuntimeConfig().public;
    const firebaseConfig = {
        type,
        project_id: projectId,
        private_key_id: privateKeyId,
        private_key: privateKey.replace(/\\n/gm, "\n"),
        client_email: clientEmail,
        client_id: clientId,
        auth_uri: authUri,
        token_uri: tokenUri,
        auth_provider_x509_cert_url: authProviderX509CertUrl,
        client_x509_cert_url: clientX509CertUrl,
        universe_domain: universeDomain
    };
    console.log(getApps.length);
    if (getApps.length == 0) {
        initializeApp({
            appName,
            credential: cert(firebaseConfig)
        })
    }
}